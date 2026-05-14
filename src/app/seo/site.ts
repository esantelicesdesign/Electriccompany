/** URL pública del sitio (sin barra final). Prioridad: env de Vite → valor por defecto. */
export function getSiteUrl(): string {
  const raw = import.meta.env.VITE_SITE_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  return "https://electricompany.cl";
}

export const siteName = "Electric Company SpA";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteName,
  description:
    "Especialistas en servicios eléctricos industriales en Antofagasta, Chile. Instalaciones, mantenimiento, tableros e ingeniería eléctrica.",
  url: getSiteUrl(),
  email: "contacto@electricompany.cl",
  telephone: "+56-9-3383-6531",
  areaServed: {
    "@type": "Place",
    name: "Antofagasta, Chile",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Antofagasta",
    addressCountry: "CL",
  },
};
