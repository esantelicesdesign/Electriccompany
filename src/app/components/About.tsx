import { Shield, Star, Zap, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const aboutImg =
  "https://images.unsplash.com/photo-1736664031618-26133b0f8eaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZW5naW5lZXIlMjBpbmR1c3RyaWFsJTIwbWluaW5nfGVufDF8fHx8MTc3ODQ3MDM5MHww&ixlib=rb-4.1.0&q=80&w=1080";

const pillars = [
  {
    icon: <Shield className="w-5 h-5 text-[#EEA906]" />,
    title: "Seguridad",
    desc: "Certificaciones y normas aplicadas en cada proyecto.",
  },
  {
    icon: <Star className="w-5 h-5 text-[#EEA906]" />,
    title: "Calidad",
    desc: "Selección rigurosa de materiales y procesos de clase mundial.",
  },
  {
    icon: <Zap className="w-5 h-5 text-[#EEA906]" fill="#EEA906" />,
    title: "Eficiencia",
    desc: "Soluciones que optimizan el consumo y minimizan los tiempos muertos.",
  },
  {
    icon: <Clock className="w-5 h-5 text-[#EEA906]" />,
    title: "Innovación",
    desc: "Nos mantenemos certificando con los mejores del mercado.",
  },
];

export function About() {
  return (
    <section id="nosotros" className="py-20 bg-[#041627] relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={aboutImg}
          alt="Equipo eléctrico industrial"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#041627] via-[#041627]/80 to-[#041627]/50" />
      </div>

      {/* Decorative lightning bolt */}
      <div className="absolute right-8 top-8 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 400" className="h-64 text-[#EEA906]" fill="currentColor">
          <polygon points="120,0 50,200 110,200 80,400 170,150 110,150 150,0" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-[#EEA906] text-xs tracking-[3px] uppercase font-bold block mb-2">
                Strategic Partner
              </span>
              <h2
                className="text-white"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-1.5px",
                  lineHeight: 1.1,
                }}
              >
                Aliado estratégico{" "}
                <span className="text-[#EEA906]">en energía</span>
              </h2>
            </div>

            <p className="text-[#8192a7] text-base leading-relaxed">
              Somos Electric Company SpA, un equipo de especialistas dedicados
              a la excelencia técnica en la Región de Antofagasta. Entendemos que
              el sector industrial no tolera la falla crítica. Por eso combinamos
              experiencia de campo con las certificaciones más exigentes del
              mercado.
            </p>

            {/* Pillar grid */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex flex-col gap-2 hover:border-[#EEA906]/40 transition-colors duration-300"
                >
                  <div className="flex items-center gap-2">
                    {p.icon}
                    <span className="text-white text-xs font-bold tracking-widest uppercase">
                      {p.title}
                    </span>
                  </div>
                  <p className="text-[#8192a7] text-xs leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 bg-[#EEA906] text-white px-8 py-4 text-sm tracking-widest uppercase font-bold hover:bg-[#d4960a] transition-colors duration-200"
              >
                <Zap className="w-4 h-4" fill="white" />
                Trabaja con nosotros
              </a>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { num: "+10", label: "Años de experiencia" },
              { num: "+80", label: "Proyectos ejecutados" },
              { num: "100%", label: "Cumplimiento normativo" },
              { num: "24/7", label: "Soporte de emergencia" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 flex flex-col gap-2 hover:bg-white/10 transition-colors duration-300"
              >
                <span
                  className="text-[#EEA906]"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "2.8rem",
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: "-2px",
                  }}
                >
                  {stat.num}
                </span>
                <span className="text-white/70 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
