import { Link } from "react-router";
import { ArrowRight, Zap } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Instalaciones\nIndustriales",
    desc: "Infraestructura eléctrica de alta potencia para plantas mineras y centros de producción.",
    items: ["Canalización EMT/IMC", "Tendido de conductores", "Mallas a tierra"],
    problem: "DESCONTINUIDAD DE SUMINISTRO",
  },
  {
    num: "02",
    title: "Mantenimiento\nIndustrial",
    desc: "Desarrollamos proyectos enfocados en el apoyo de actividades de mantenimientos industriales en altas eficiencias.",
    items: ["Termografía infrarroja", "Análisis de redes", "Pruebas dieléctricas"],
    problem: "FALLAS CRÍTICAS INESPERADAS",
  },
  {
    num: "03",
    title: "Montaje e integración\nde tableros",
    desc: "Diseño y ensamblaje de tableros de control, fuerza y distribución bajo norma.",
    items: ["Centros de Control (CCM)", "PLC e Instrumentación", "Tableros TDF"],
    problem: "FALTA DE CONTROL Y MONITOREO",
  },
  {
    num: "04",
    title: "Servicios de\ningeniería eléctrica",
    desc: "Desarrollamos servicios de ingeniería en cada instalación.",
    items: [
      "Levantamiento eléctrico",
      "Cuentas de carga",
      "Planos ET / BT",
    ],
    problem: "PROYECTOS SIN RESPALDO TÉCNICO",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 gap-8">
          <div>
            <span className="text-[#EEA906] text-xs tracking-[3px] uppercase font-bold block mb-2">
              Service Catalogue
            </span>
            <h2
              className="text-[#1b1c1c]"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-1.5px",
                lineHeight: 1,
              }}
            >
              Nuestras Soluciones
            </h2>
          </div>
          <div className="hidden md:block flex-1 h-px bg-gray-200 mb-2" />
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {services.map((svc, i) => (
            <div
              key={i}
              className="bg-white border border-[#e6e6e6] flex flex-col group hover:border-[#EEA906] transition-colors duration-300"
            >
              <div className="p-8 flex flex-col gap-4 flex-1">
                {/* Number */}
                <span className="text-[#EEA906] text-sm font-mono tracking-tight">
                  {svc.num} / SOL
                </span>

                {/* Lightning accent */}
                <div className="w-6 h-6 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#EEA906]" fill="#EEA906" />
                </div>

                {/* Title */}
                <h3
                  className="text-[#1b1c1c]"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    lineHeight: 1.3,
                    whiteSpace: "pre-line",
                  }}
                >
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="text-[#44474c] text-sm leading-relaxed">
                  {svc.desc}
                </p>

                {/* Item list */}
                <ul className="flex flex-col gap-2 flex-1">
                  {svc.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-[#1b1c1c]">
                      <span className="w-1.5 h-1.5 bg-[#EEA906] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-100 px-8 pt-4 pb-6 flex flex-col gap-3">
                <span className="text-[#EEA906] text-[10px] font-bold uppercase tracking-wide">
                  Solución: {svc.problem}
                </span>
                <Link
                  to="/servicios"
                  className="w-full bg-[#f6f3f2] hover:bg-[#EEA906] hover:text-white text-[#1b1c1c] text-xs font-bold tracking-widest uppercase py-3 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Ver más
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}