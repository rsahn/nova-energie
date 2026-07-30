"use client";

import { useEffect } from "react";
import { Icon, LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Link from "next/link";
import { MAP_DEFAULT, REALISATIONS, SITE } from "@/lib/data";
import "leaflet/dist/leaflet.css";

const markerIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface InstallationsMapInnerProps {
  height?: string;
  fullscreen?: boolean;
}

export function InstallationsMapInner({
  height = "480px",
  fullscreen = false,
}: InstallationsMapInnerProps) {
  const center: LatLngExpression = fullscreen
    ? [MAP_DEFAULT.center.lat, MAP_DEFAULT.center.lng]
    : [MAP_DEFAULT.center.lat, MAP_DEFAULT.center.lng];

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = ".leaflet-container { z-index: 0; }";
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      className="overflow-hidden rounded-xl border border-gray-200 shadow-sm"
      style={{ height }}
    >
      <MapContainer
        center={center}
        zoom={fullscreen ? 9 : MAP_DEFAULT.zoom}
        scrollWheelZoom={!fullscreen}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[SITE.coordinates.lat, SITE.coordinates.lng]} icon={markerIcon}>
          <Popup>
            <strong>{SITE.name}</strong>
            <br />
            Siège — {SITE.city}
          </Popup>
        </Marker>
        {REALISATIONS.map((r) => (
          <Marker key={r.id} position={[r.lat, r.lng]} icon={markerIcon}>
            <Popup>
              <strong>{r.title}</strong>
              <br />
              {r.type}
              {r.powerKwc ? ` — ${r.powerKwc} kWc` : ""}
              <br />
              <Link
                href="/realisations"
                className="text-solar-600 underline text-sm"
              >
                Voir nos réalisations
              </Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
