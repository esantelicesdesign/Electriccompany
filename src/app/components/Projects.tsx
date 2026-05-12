import { MapPin, Tag, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    img: "https://images.unsplash.com/photo-1738918937796-743064feefa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwcGFuZWwlMjBjb250cm9sJTIwcm9vbSUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzc4NDcwMzkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "MINERÍA",
    title: "Proyecto 1",
    subtitle: "CCM de Alta Tensión",
    location: "Antofagasta, Chile",
    category: "Montaje e integración de tableros",
    desc: "Diseño, suministro y montaje de Centro de Control de Motores para planta minera. Canalización EMT/IMC y tendido de conductores de 500 kVA.",
  },
  {
    img: "https://images.unsplash.com/photo-1776251896448-a5eb8ae25e35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwbWFpbnRlbmFuY2UlMjB0cmFuc2Zvcm1lciUyMHN1YnN0YXRpb258ZW58MXx8fHwxNzc4NDcwMzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "MANTENIMIENTO",
    title: "Proyecto 2",
    subtitle: "Plan de Mantenimiento Preventivo",
    location: "Sierra Gorda, Chile",
    category: "Mantenimiento industrial",
    desc: "Implementación de plan de mantenimiento preventivo anual con termografía infrarroja, análisis de redes y pruebas dieléctricas.",
  },
  {
    img: "https://images.unsplash.com/photo-1622426385889-4fc93a72423a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2lyaW5nJTIwY2FibGUlMjBpbnN0YWxsYXRpb24lMjB3b3JrZXJ8ZW58MXx8fHwxNzc4NDcwMzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "INGENIERÍA",
    title: "Proyecto 3",
    subtitle: "Instalación Eléctrica Industrial",
    location: "Calama, Chile",
    category: "Instalaciones industriales",
    desc: "Instalación completa de infraestructura eléctrica industrial en nuevo centro de producción: mallas a tierra, subestación y distribución BT.",
  },
];

export function Projects() {
  return (
    <section id="proyectos" className="py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#EEA906] text-xs tracking-[3px] uppercase font-bold block mb-2">
            Experiencia y Proyectos
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
            Experiencia y Proyectos
          </h2>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="bg-white group overflow-hidden border border-[#e6e6e6] hover:border-[#EEA906] transition-all duration-300 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <ImageWithFallback
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041627]/70 to-transparent" />
                <span className="absolute top-4 left-4 bg-[#EEA906] text-white text-[10px] font-bold tracking-widest uppercase px-2 py-1">
                  {proj.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3">
                <div>
                  <span className="text-[#EEA906] text-xs font-bold tracking-wider uppercase">
                    {proj.title}
                  </span>
                  <h3
                    className="text-[#1b1c1c] mt-1"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                    }}
                  >
                    {proj.subtitle}
                  </h3>
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-[#44474c] text-xs">
                    <MapPin className="w-3 h-3 text-[#EEA906] flex-shrink-0" />
                    {proj.location}
                  </div>
                  <div className="flex items-center gap-2 text-[#44474c] text-xs">
                    <Tag className="w-3 h-3 text-[#EEA906] flex-shrink-0" />
                    {proj.category}
                  </div>
                </div>

                <p className="text-[#44474c] text-sm leading-relaxed">
                  {proj.desc}
                </p>

                <button className="mt-2 flex items-center gap-2 text-[#1b1c1c] text-xs font-bold tracking-widest uppercase hover:text-[#EEA906] transition-colors duration-200 group/btn">
                  Ver proyecto
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/contacto"
            className="flex items-center gap-3 bg-[#EEA906] text-white px-10 py-4 text-sm tracking-widest uppercase font-bold hover:bg-[#d4960a] transition-colors duration-200 shadow-[0_2px_16px_rgba(238,169,6,0.4)]"
          >
            Solicitar Brochure
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
