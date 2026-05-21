import { ChevronDown, Download } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router";
import { useRef } from "react";
import heroImg from "../../imports/ServiciosVf/electrical-control-panels-in-modern-industrial-bui-2026-03-16-00-39-38-utc.jpg";
import catalogPdf from "../../imports/Catalogo_electric_comp_compressed.pdf";
import mockupCatalogo from "../../imports/mockup_catalogo.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

function CatalogParallaxBanner({ catalogPdf: pdfUrl }: { catalogPdf: string }) {
  const bannerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["10%", "-14%"]);
  /** Zoom ~20% menor para que el mockup del catálogo sea más legible */
  const bgScale = useTransform(scrollYProgress, [0, 0.45, 1], [0.896, 0.976, 0.88]);
  const bgPosY = useTransform(scrollYProgress, [0, 1], [44, 56]);
  const bgPosition = useTransform(bgPosY, (v) => `50% ${v}%`);

  /** Contenedor del botón: ligero contra-movimiento para sensación de profundidad. */
  const contentY = useTransform(scrollYProgress, [0, 1], [12, -10]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0.88, 1, 1, 0.92]);

  return (
    <div
      ref={bannerRef}
      className="relative z-10 mt-auto w-full h-[311px] shrink-0 border-t border-white/15 overflow-hidden"
    >
      <div className="relative h-full w-full">
        <motion.div
          className="absolute left-[-8%] right-[-8%] top-[-35%] bottom-[-35%] bg-cover bg-no-repeat will-change-transform"
          style={{
            backgroundImage: `url(${mockupCatalogo})`,
            backgroundPosition: bgPosition,
            y: bgY,
            scale: bgScale,
          }}
        />

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(4,22,39,0.88) 0%, rgba(4,22,39,0.55) 45%, rgba(4,22,39,0.72) 100%)",
          }}
        />

        <motion.div
          className="relative z-[1] h-full flex items-center justify-center px-6 will-change-transform"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <a
            href={pdfUrl}
            download="Catalogo_electric_comp_compressed.pdf"
            className="group inline-flex items-center gap-3 bg-[#EEA906] text-white px-10 py-4 text-xs sm:text-sm tracking-widest uppercase font-bold shadow-[0_4px_24px_rgba(0,0,0,0.35)] hover:bg-[#fcd800] hover:text-[#041627] hover:shadow-[0_6px_28px_rgba(238,169,6,0.45)] border border-white/20 hover:border-black/10 transition-all duration-200"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" strokeWidth={2.5} aria-hidden />
            Descargar catálogo de servicios
          </a>
        </motion.div>
      </div>
    </div>
  );
}

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
          alt="Tableros de control eléctrico en instalación industrial"
          className="w-full h-full object-cover opacity-35"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 p-[0px]"
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
            <div className="inline-flex pt-[25px]">
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
              <Link
                to="/contacto"
                className="bg-[#EEA906] text-white px-8 py-4 text-sm tracking-widest uppercase font-bold hover:bg-[#d4960a] transition-colors duration-200 shadow-[0_2px_12px_rgba(238,169,6,0.5)]"
              >
                Solicitar Cotización
              </Link>
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

          {/* Right: spacer */}
          <div className="hidden lg:block" />
        </div>
      </div>

      <CatalogParallaxBanner catalogPdf={catalogPdf} />

      {/* Scroll indicator */}
      <div className="absolute hidden md:flex bottom-[324px] left-1/2 -translate-x-1/2 z-10 text-white/40 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
