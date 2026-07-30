import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { SITE } from "@/lib/data";

export interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  postalCode: string;
  projectType: string;
  roofType?: string;
  message?: string;
}

async function sendViaSmtp(payload: ContactPayload) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) return false;

  const transporter = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  });

  const to = process.env.CONTACT_EMAIL ?? SITE.email;

  await transporter.sendMail({
    from: `"${SITE.name}" <${user}>`,
    to,
    replyTo: payload.email,
    subject: `[Devis] ${payload.firstName} ${payload.lastName} — ${payload.postalCode}`,
    text: formatPlainText(payload),
    html: formatHtml(payload),
  });

  return true;
}

async function sendViaResend(payload: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const to = process.env.CONTACT_EMAIL ?? SITE.email;
  const from = process.env.RESEND_FROM ?? `${SITE.name} <onboarding@resend.dev>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject: `[Devis] ${payload.firstName} ${payload.lastName} — ${payload.postalCode}`,
      html: formatHtml(payload),
    }),
  });

  return res.ok;
}

function formatPlainText(p: ContactPayload) {
  return [
    `Nouvelle demande de devis — ${SITE.name}`,
    "",
    `Nom : ${p.firstName} ${p.lastName}`,
    `Email : ${p.email}`,
    `Téléphone : ${p.phone}`,
    `Code postal : ${p.postalCode}`,
    `Type de projet : ${p.projectType}`,
    p.roofType ? `Toiture : ${p.roofType}` : "",
    p.message ? `Message : ${p.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function formatHtml(p: ContactPayload) {
  return `
    <h2>Nouvelle demande de devis</h2>
    <table cellpadding="6">
      <tr><td><strong>Nom</strong></td><td>${p.firstName} ${p.lastName}</td></tr>
      <tr><td><strong>Email</strong></td><td><a href="mailto:${p.email}">${p.email}</a></td></tr>
      <tr><td><strong>Téléphone</strong></td><td>${p.phone}</td></tr>
      <tr><td><strong>Code postal</strong></td><td>${p.postalCode}</td></tr>
      <tr><td><strong>Projet</strong></td><td>${p.projectType}</td></tr>
      ${p.roofType ? `<tr><td><strong>Toiture</strong></td><td>${p.roofType}</td></tr>` : ""}
    </table>
    ${p.message ? `<p><strong>Message :</strong><br>${p.message.replace(/\n/g, "<br>")}</p>` : ""}
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (
      !body.firstName ||
      !body.lastName ||
      !body.email ||
      !body.phone ||
      !body.postalCode ||
      !body.projectType
    ) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    const sent =
      (await sendViaResend(body)) || (await sendViaSmtp(body));

    if (!sent) {
      console.log("[CONTACT — mode dev, email non configuré]", body);
      return NextResponse.json({
        success: true,
        dev: true,
        message:
          "Demande enregistrée (mode dev — configurez SMTP ou Resend dans .env.local)",
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi" },
      { status: 500 }
    );
  }
}
