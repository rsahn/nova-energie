import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/data";

interface LogoProps {
  variant?: "light" | "dark";
  showText?: boolean;
}

export function Logo({ variant = "dark", showText = true }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-navy-900";
  const subColor = variant === "light" ? "text-gray-300" : "text-gray-500";

  return (
    <Link href="/" className="flex items-center gap-2.5">
      <Image
        src="/logo.svg"
        alt={`${SITE.name} — logo`}
        width={40}
        height={40}
        priority
      />
      {showText && (
        <div>
          <p className={`text-lg font-bold leading-tight ${textColor}`}>
            {SITE.name}
          </p>
          <p className={`text-xs ${subColor}`}>{SITE.tagline}</p>
        </div>
      )}
    </Link>
  );
}
