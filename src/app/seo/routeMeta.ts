export type PageSeo = {
  /** Título corto (se concatena con el nombre del sitio si aplica) */
  title: string;
  description: string;
  keywords?: string;
};

const defaultDescription =
  "Electric Company SpA: soluciones eléctricas industriales seguras y eficientes en Antofagasta, Chile. Instalaciones, mantenimiento, tableros de control e ingeniería eléctrica con cumplimiento normativo.";

const base: PageSeo = {
  title: "Servicios eléctricos industriales",
  description: defaultDescription,
  keywords:
    "electricidad industrial, ingeniería eléctrica, Antofagasta, tableros eléctricos, mantenimiento industrial, Electric Company",
};

export const routeMeta: Record<string, PageSeo> = {
  "/": {
    ...base,
    title: "Servicios eléctricos industriales en Antofagasta",
  },
  "/servicios": {
    title: "Servicios",
    description:
      "Catálogo de servicios eléctricos industriales: instalaciones de alta potencia, mantenimiento, montaje de tableros CCM y TDF, e ingeniería y cumplimiento normativo en Antofagasta.",
    keywords:
      "instalaciones industriales, mantenimiento eléctrico, tableros eléctricos, variadores de frecuencia, cumplimiento SEC, Antofagasta",
  },
  "/nosotros": {
    title: "Nosotros",
    description:
      "Conoce Electric Company SpA: aliado estratégico en energía con enfoque en seguridad, calidad, eficiencia e innovación certificada para la industria en el norte de Chile.",
    keywords:
      "Electric Company SpA, empresa eléctrica Antofagasta, certificaciones eléctricas, minería industria energía",
  },
  "/proyectos": {
    title: "Proyectos",
    description:
      "Proyectos y experiencia en automatización industrial, instalaciones, tableros de control y generación en Antofagasta y norte de Chile.",
    keywords:
      "proyectos eléctricos industriales, tableros Schneider, automatización, Exponor, Antofagasta",
  },
  "/contacto": {
    title: "Contacto",
    description:
      "Contacta a Electric Company SpA en Antofagasta: cotizaciones, emergencias y soporte técnico. WhatsApp y correo profesional disponibles.",
    keywords:
      "contacto Electric Company, cotización instalación eléctrica, soporte técnico 24/7 Chile",
  },
};

export function resolvePageMeta(pathname: string): PageSeo {
  return routeMeta[pathname] ?? base;
}
