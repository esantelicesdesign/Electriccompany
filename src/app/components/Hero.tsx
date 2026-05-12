import { Zap, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const heroImg =
  "https://images.unsplash.com/photo-1762004793160-76327a519c0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZWxlY3RyaWNhbCUyMHBvd2VyJTIwbGluZXMlMjBuaWdodHxlbnwxfHx8fDE3Nzg0NzAzOTB8MA&ixlib=rb-4.1.0&q=80&w=1080";

const valueProps = [
  {
    icon: <Zap className="w-5 h-5 text-[#EEA906]" fill="#EEA906" />,
    title: "Seguridad",
    desc: "Rigor técnico y cumplimiento normativo absoluto en cada conexión.",
  },
  {
    icon: (
      <svg className="w-6 h-5" viewBox="0 0 25 20" fill="none">
        <path
          d="M12.5 0L25 7.5V12.5L12.5 20L0 12.5V7.5L12.5 0Z"
          fill="#EEA906"
        />
      </svg>
    ),
    title: "Calidad",
    desc: "Componentes de clase mundial e integración de alta ingeniería.",
  },
  {
    icon: <Zap className="w-5 h-5 text-[#EEA906]" fill="#EEA906" />,
    title: "Eficiencia",
    desc: "Optimización de consumo y reducción drástica de tiempos muertos.",
  },
  {
    icon: (
      <svg className="w-6 h-5" viewBox="0 0 25 20" fill="none">
        <path
          d="M2 10C2 5.58 5.58 2 10 2h5C19.42 2 23 5.58 23 10s-3.58 8-8 8h-5C5.58 18 2 14.42 2 10Z"
          fill="#EEA906"
        />
      </svg>
    ),
    title: "Rápida Respuesta",
    desc: "Soporte técnico local en Antofagasta con tiempos de respuesta críticos.",
  },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#041627]">
        <ImageWithFallback
          src={heroImg}
          alt="Industrial electrical"
          className="w-full h-full object-cover opacity-35"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(144deg, #041627 0%, rgba(4,22,39,0.85) 50%, rgba(4,22,39,0.3) 100%)",
          }}
        />
      </div>

      {/* Lightning bolt decorative shape */}
      <div className="absolute right-0 top-16 bottom-0 w-1/3 flex items-center justify-center pointer-events-none opacity-10 hidden lg:flex">
        <svg viewBox="0 0 200 400" className="h-3/4 text-[#EEA906]" fill="currentColor">
          <polygon points="120,0 50,200 110,200 80,400 170,150 110,150 150,0" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-36 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="inline-flex">
              <span className="bg-[#EEA906] text-white text-xs tracking-widest uppercase px-3 py-1 font-bold">
                Inicio
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-white leading-tight">
              <span
                className="block"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 800,
                  letterSpacing: "-2px",
                  lineHeight: 1,
                }}
              >
                Soluciones eléctricas
              </span>
              <span
                className="block"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 800,
                  letterSpacing: "-2px",
                  lineHeight: 1,
                }}
              >
                industriales{" "}
                <span className="text-[#EEA906]">seguras y</span>
              </span>
              <span
                className="block text-[#EEA906]"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 800,
                  letterSpacing: "-2px",
                  lineHeight: 1,
                }}
              >
                eficientes
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#8192a7] text-base md:text-lg leading-relaxed max-w-xl">
              Eficiencia operativa, seguridad y respaldo técnico en Antofagasta,
              Chile. Elevando los estándares de la industria energética con
              precisión técnica.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contacto"
                className="bg-[#EEA906] text-white px-8 py-4 text-sm tracking-widest uppercase font-bold hover:bg-[#d4960a] transition-colors duration-200 shadow-[0_2px_12px_rgba(238,169,6,0.5)]"
              >
                Solicitar Cotización
              </a>
              <a
                href="https://wa.me/56933836531"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white px-8 py-4 text-sm tracking-widest uppercase font-bold border border-white/30 hover:border-white/60 transition-all duration-200"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Value props */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Value Props bottom bar */}
      <div className="relative z-10 mt-auto">
        <div className="bg-[#e6e6e6]/95 backdrop-blur-sm border-l border-t border-white/20 max-w-7xl mx-auto lg:ml-auto lg:mr-0 lg:w-1/2">
          <div className="grid grid-cols-2 gap-px bg-gray-300/30">
            {valueProps.map((vp, i) => (
              <div
                key={i}
                className="bg-[#ebebeb] px-6 py-5 flex gap-4 items-start"
              >
                <div className="flex-shrink-0 mt-0.5">{vp.icon}</div>
                <div>
                  <div className="text-[#1b1c1c] text-xs font-bold tracking-widest uppercase mb-1">
                    {vp.title}
                  </div>
                  <div className="text-[#44474c] text-xs leading-relaxed">
                    {vp.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-white/40 animate-bounce hidden md:block">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
