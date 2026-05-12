import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import svgPaths from "../../imports/Html→Body-1/svg-a8l4qlap8i";
import imgHeroBg from "figma:asset/90b4456baadce727174c32a2d7c26cef0ba16b94.png";
import imgHeroRight from "figma:asset/0540334252044eaf1b4b7a0b80be236aa268c88b.png";
import imgMiningProject from "figma:asset/5f70417c4863d26b109e62fd95b09ed20057a6fe.png";
import ExperienceSection from "../../imports/ExperienceSection-3/ExperienceSection";

/* ─── HELPERS ──────────────────────────────────────────────────────── */

function YellowButton({
  children,
  href,
  to,
}: {
  children: React.ReactNode;
  href?: string;
  to?: string;
}) {
  const cls =
    "inline-flex items-center gap-3 bg-[#EEA906] text-white px-6 py-2.5 text-sm tracking-widest uppercase font-medium shadow-[0px_1px_8px_rgba(238,194,9,0.9)] hover:bg-[#d4960a] transition-colors duration-200 cursor-pointer";

  if (to)
    return (
      <Link to={to} className={cls}>
        <svg className="w-4 h-5 flex-shrink-0" fill="none" viewBox="0 0 20 25">
          <path d={svgPaths.p17359280} fill="white" />
        </svg>
        {children}
      </Link>
    );

  return (
    <a href={href} className={cls}>
      <svg className="w-4 h-5 flex-shrink-0" fill="none" viewBox="0 0 20 25">
        <path d={svgPaths.p17359280} fill="white" />
      </svg>
      {children}
    </a>
  );
}

/* ─── 1. HERO ──────────────────────────────────────────────────────── */
function NosotrosHero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[680px] flex flex-col justify-center overflow-hidden bg-[#041627]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={imgHeroBg}
          alt=""
          className="absolute w-full h-[139%] top-[-19.5%] left-0 object-cover opacity-40 pointer-events-none"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(144.264deg, #041627 0%, rgba(4,22,39,0.82) 50%, rgba(4,22,39,0.1) 100%)",
          }}
        />
      </div>

      {/* Right decorative image */}
      <div className="absolute right-0 bottom-0 h-[85%] w-[30%] pointer-events-none hidden xl:block">
        <img
          src={imgHeroRight}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Decorative bolt */}
      <div className="absolute right-[6%] top-0 bottom-0 w-[14%] pointer-events-none opacity-[0.04] hidden lg:flex items-center justify-center">
        <svg viewBox="0 0 200 400" className="h-3/4 text-[#EEA906]" fill="currentColor">
          <polygon points="120,0 50,200 110,200 80,400 170,150 110,150 150,0" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-36 pb-20">
        <div className="max-w-3xl flex flex-col gap-6">
          {/* Badge */}
          <span className="inline-flex">
            <span className="bg-[#EEA906] text-white text-xs tracking-[2.4px] uppercase px-3 py-1 font-bold">
              Nosotros
            </span>
          </span>

          {/* Heading */}
          <h1
            className="text-white leading-none"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
              fontWeight: 800,
              letterSpacing: "-2.5px",
              lineHeight: 1.05,
            }}
          >
            Quiénes somos y{" "}
            <span className="text-[#EEA906]">por qué nos eligen</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#8192a7] text-lg leading-relaxed max-w-2xl">
            Somos una empresa de servicios eléctricos industriales con base en
            Antofagasta, Chile. Trabajamos con el más alto nivel técnico para
            industrias mineras, energéticas y de manufactura.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <YellowButton to="/contacto">Solicitar cotización</YellowButton>
            <a
              href="https://wa.me/56933836531"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 text-sm tracking-widest uppercase font-bold text-white border border-white/30 hover:border-white/60 transition-all duration-200"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 2. QUIÉNES SOMOS ──────────────────────────────────────────────── */
function QuienesSomosSection() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Left: Image */}
          <div className="relative min-h-[420px] lg:min-h-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1595831708961-1b13c0dd2422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwdGVjaG5pY2lhbiUyMGluZHVzdHJpYWwlMjB3b3JrZXIlMjBzYWZldHklMjBoZWxtZXR8ZW58MXx8fHwxNzc4NTU3ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Técnico eléctrico industrial"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Yellow bottom-left accent triangle */}
            <div
              className="absolute bottom-0 left-0 w-48 h-48 bg-[#EEA906]/80 z-10"
              style={{ clipPath: "polygon(0 100%, 0 30%, 100% 100%)" }}
            />
            {/* Stats card */}
            <div className="absolute bottom-8 right-6 z-20 bg-[#041627] text-white px-7 py-5 hidden lg:block">
              <div
                className="text-[#EEA906]"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "2.4rem",
                  fontWeight: 800,
                  letterSpacing: "-1.5px",
                  lineHeight: 1,
                }}
              >
                +10
              </div>
              <div className="text-xs text-[#8192a7] tracking-widest uppercase mt-1">
                Años de experiencia
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-7 px-10 md:px-16 py-20 justify-center">
            {/* Label */}
            <span
              className="text-[#EEA906] text-xs tracking-[3.6px] uppercase"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
            >
              Nuestra empresa
            </span>

            {/* Heading */}
            <div>
              <p
                className="text-[#1a1a1a] leading-tight mb-0"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "clamp(2rem, 3.2vw, 2.8rem)",
                  fontWeight: 700,
                  letterSpacing: "-1px",
                }}
              >
                Fundada para resolver
              </p>
              <p
                className="text-[#EEA906] leading-tight"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "clamp(2rem, 3.2vw, 2.8rem)",
                  fontWeight: 700,
                  letterSpacing: "-1px",
                }}
              >
                los desafíos del norte
              </p>
            </div>

            {/* Text */}
            <p
              className="text-[#44474c] text-sm leading-relaxed max-w-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Electric Company SpA nació con la misión de brindar soluciones
              eléctricas industriales de alto estándar en la Región de
              Antofagasta. Nuestra experiencia se ha forjado trabajando junto a
              las empresas más exigentes del rubro minero y energético del
              norte de Chile.
            </p>
            <p
              className="text-[#44474c] text-sm leading-relaxed max-w-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Contamos con técnicos habilitados SEC, equipamiento de última
              generación y una metodología de trabajo que prioriza la seguridad,
              la eficiencia y la entrega puntual de cada proyecto.
            </p>

            {/* Key bullets */}
            <div className="flex flex-col gap-3">
              {[
                "Habilitación SEC vigente",
                "Técnicos certificados en media y baja tensión",
                "Respuesta de emergencia 24/7 en Antofagasta",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#EEA906] flex-shrink-0" />
                  <span
                    className="text-[#1b1c1c] text-sm tracking-widest uppercase"
                    style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <YellowButton to="/contacto">Contáctanos</YellowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 3. PROPUESTA DE VALOR ─────────────────────────────────────────── */
function ValorCard({
  svgPath,
  svgViewBox,
  title,
  desc,
}: {
  svgPath: string;
  svgViewBox: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white border border-[#e6e6e6] flex flex-col gap-5 p-8 relative group hover:border-[#EEA906]/50 transition-colors duration-200">
      {/* Yellow left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#EEA906] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      {/* Icon */}
      <div className="h-9 w-9 flex-shrink-0">
        <svg fill="none" viewBox={svgViewBox} className="h-9 w-auto">
          <path d={svgPath} fill="#EEA906" />
        </svg>
      </div>

      {/* Title */}
      <h3
        className="text-[#1b1c1c] uppercase"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "2.4px",
        }}
      >
        {title}
      </h3>

      {/* Desc */}
      <p
        className="text-[#44474c] text-sm leading-relaxed"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {desc}
      </p>
    </div>
  );
}

function PropuestaDeValor() {
  const cards = [
    {
      svgPath: svgPaths.p2256d300,
      svgViewBox: "0 0 20 25",
      title: "Seguridad",
      desc: "Rigor técnico y cumplimiento normativo absoluto en cada conexión. Todos nuestros trabajos cumplen con la normativa SEC vigente.",
    },
    {
      svgPath: svgPaths.p3c3be360,
      svgViewBox: "0 0 25 20",
      title: "Calidad",
      desc: "Componentes de clase mundial e integración de alta ingeniería. Usamos materiales certificados y proveedores de primer nivel.",
    },
    {
      svgPath: svgPaths.p17359280,
      svgViewBox: "0 0 20 25",
      title: "Eficiencia",
      desc: "Optimización del consumo y reducción drástica de tiempos muertos. Nuestros proyectos entregan resultados medibles desde el día uno.",
    },
    {
      svgPath: svgPaths.p39cda500,
      svgViewBox: "0 0 25.002 20",
      title: "Rápida respuesta",
      desc: "Soporte técnico local en Antofagasta con tiempos de respuesta críticos. Disponibles 24 horas para emergencias eléctricas industriales.",
    },
  ];

  return (
    <section className="bg-[#e6e6e6] py-20 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4">
          <span
            className="text-[#EEA906] text-xs tracking-[3.6px] uppercase"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
          >
            Nuestra propuesta de valor
          </span>
          <div>
            <p
              className="text-[#1a1a1a] leading-tight mb-0"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.8rem, 3.2vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-1.5px",
              }}
            >
              Por qué confiar en
            </p>
            <p
              className="text-[#EEA906] leading-tight"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.8rem, 3.2vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-1.5px",
              }}
            >
              Electric Company SpA
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-6">
          {cards.map((card) => (
            <ValorCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 4. ESTADÍSTICAS ───────────────────────────────────────────────── */
function EstadisticasSection() {
  const stats = [
    { number: "+10", label: "Años de experiencia", sub: "En la industria eléctrica del norte" },
    { number: "+80", label: "Proyectos ejecutados", sub: "En minería, energía e industria" },
    { number: "+40", label: "Clientes activos", sub: "Empresas de primer nivel" },
    { number: "4", label: "Certificaciones", sub: "SEC, ISO 9001, OHSAS 18001, Nch" },
  ];

  return (
    <section className="bg-[#041627] py-16 px-6 md:px-10 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-y-0 right-0 w-[40%] pointer-events-none opacity-[0.03]">
        <svg viewBox="0 0 200 400" className="h-full w-auto ml-auto" fill="#EEA906">
          <polygon points="120,0 50,200 110,200 80,400 170,150 110,150 150,0" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#041627] flex flex-col gap-2 px-8 py-10"
            >
              <span
                className="text-[#EEA906]"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 800,
                  letterSpacing: "-2px",
                  lineHeight: 1,
                }}
              >
                {stat.number}
              </span>
              <span
                className="text-white text-xs tracking-[2px] uppercase"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
              >
                {stat.label}
              </span>
              <span
                className="text-[#8192a7] text-xs leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 5. MISIÓN / VISIÓN ────────────────────────────────────────────── */
function MisionVisionSection() {
  return (
    <section className="bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[560px]">
          {/* Left: Content */}
          <div className="flex flex-col gap-8 px-10 md:px-16 py-20 justify-center">
            <span
              className="text-[#EEA906] text-xs tracking-[3.6px] uppercase"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
            >
              Identidad corporativa
            </span>

            <div>
              <p
                className="text-[#1a1a1a] leading-tight mb-0"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                  fontWeight: 700,
                  letterSpacing: "-1px",
                }}
              >
                Misión y
              </p>
              <p
                className="text-[#EEA906] leading-tight"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                  fontWeight: 700,
                  letterSpacing: "-1px",
                }}
              >
                visión
              </p>
            </div>

            {/* Misión */}
            <div className="flex gap-4 items-start">
              <span
                className="text-[#EEA906] flex-shrink-0 leading-none"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                }}
              >
                /
              </span>
              <div className="flex flex-col gap-1">
                <span
                  className="text-[#1b1c1c] text-xs tracking-[2.5px] uppercase"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
                >
                  Misión
                </span>
                <p
                  className="text-[#44474c] text-sm leading-relaxed"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  Proveer soluciones eléctricas industriales de alta complejidad con
                  los más altos estándares de calidad, seguridad y eficiencia, siendo
                  el aliado estratégico de las industrias del norte de Chile.
                </p>
              </div>
            </div>

            {/* Visión */}
            <div className="flex gap-4 items-start">
              <span
                className="text-[#EEA906] flex-shrink-0 leading-none"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                }}
              >
                /
              </span>
              <div className="flex flex-col gap-1">
                <span
                  className="text-[#1b1c1c] text-xs tracking-[2.5px] uppercase"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
                >
                  Visión
                </span>
                <p
                  className="text-[#44474c] text-sm leading-relaxed"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  Ser reconocidos como la empresa de servicios eléctricos
                  industriales más confiable y técnicamente avanzada de la
                  Región de Antofagasta, expandiendo nuestra presencia en toda
                  la macro zona norte.
                </p>
              </div>
            </div>

            {/* Valores */}
            <div className="flex gap-4 items-start">
              <span
                className="text-[#EEA906] flex-shrink-0 leading-none"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                }}
              >
                /
              </span>
              <div className="flex flex-col gap-1">
                <span
                  className="text-[#1b1c1c] text-xs tracking-[2.5px] uppercase"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
                >
                  Valores
                </span>
                <p
                  className="text-[#44474c] text-sm leading-relaxed"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  Integridad, excelencia técnica, compromiso con la seguridad,
                  responsabilidad ambiental y orientación absoluta al cliente.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative hidden lg:block">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1771795172587-71ef788374e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcG93ZXIlMjBwbGFudCUyMGVsZWN0cmljYWwlMjBpbmZyYXN0cnVjdHVyZSUyMG5pZ2h0fGVufDF8fHx8MTc3ODU1NzgwOXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Planta industrial eléctrica"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "saturate(0.6)" }}
            />
            {/* Yellow corner decoration */}
            <div className="absolute top-0 right-0 w-28 h-28 z-10 pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  borderTop: "8px solid #EEA906",
                  borderRight: "8px solid #EEA906",
                }}
              />
            </div>
            {/* Bottom border */}
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{ borderBottom: "4px solid #EEA906" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 6. CERTIFICACIONES Y PROYECTOS ────────────────────────────────── */
function CertificacionesSection() {
  const certs = [
    {
      code: "SEC",
      title: "Habilitación SEC",
      desc: "Superintendencia de Electricidad y Combustibles de Chile",
    },
    {
      code: "ISO\n9001",
      title: "ISO 9001",
      desc: "Sistema de Gestión de Calidad certificado internacionalmente",
    },
    {
      code: "OHSAS\n18001",
      title: "OHSAS 18001",
      desc: "Sistema de Gestión de Seguridad y Salud Ocupacional",
    },
    {
      code: "NCh\n4/2003",
      title: "Nch 4/2003",
      desc: "Norma chilena para instalaciones eléctricas industriales",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-10 border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="flex flex-col gap-4">
            <span
              className="text-[#EEA906] text-xs tracking-[3.6px] uppercase"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
            >
              Respaldo técnico
            </span>
            <div>
              <p
                className="text-[#1a1a1a] leading-tight mb-0"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)",
                  fontWeight: 700,
                  letterSpacing: "-1px",
                }}
              >
                Certificaciones y
              </p>
              <p
                className="text-[#EEA906] leading-tight"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)",
                  fontWeight: 700,
                  letterSpacing: "-1px",
                }}
              >
                acreditaciones
              </p>
            </div>
          </div>
          <div className="h-px bg-[rgba(196,198,205,0.3)] flex-1 max-w-xs hidden md:block mb-3" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert) => (
            <div
              key={cert.code}
              className="border border-[#e6e6e6] flex flex-col gap-4 p-7 relative group hover:border-[#EEA906] transition-all duration-200"
            >
              {/* Code badge */}
              <div className="bg-[#041627] inline-flex items-center justify-center w-16 h-16 flex-shrink-0">
                <span
                  className="text-[#EEA906] text-center whitespace-pre-line leading-tight"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    letterSpacing: "1.5px",
                  }}
                >
                  {cert.code}
                </span>
              </div>

              <h3
                className="text-[#1b1c1c] uppercase"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "2px",
                }}
              >
                {cert.title}
              </h3>

              <p
                className="text-[#44474c] text-xs leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {cert.desc}
              </p>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EEA906] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 7. PROYECTOS DESTACADOS ──────────────────────────────────────── */
function ProyectosDestacados() {
  const projects = [
    {
      num: "01",
      title: "Subestación Minera",
      tag: "Media tensión",
      desc: "Instalación y puesta en marcha de subestación eléctrica de 23 kV para planta concentradora en el norte de Chile.",
      img: "https://images.unsplash.com/photo-1638423086998-beb8b82ce15f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBpbmR1c3RyaWFsJTIwcGxhbnQlMjBhbnRvZmFnYXN0YSUyMGRlc2VydHxlbnwxfHx8fDE3Nzg1NTc3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      num: "02",
      title: "Tableros de Control",
      tag: "Automatización",
      desc: "Diseño, fabricación e integración de 12 tableros CCM con variadores de frecuencia para sistema de bombeo industrial.",
      img: "https://images.unsplash.com/photo-1759830337357-29c472b6746c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZWxlY3RyaWNhbCUyMHBhbmVsJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc3ODU1Nzc3OXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      num: "03",
      title: "Mantención Preventiva",
      tag: "Mantenimiento",
      desc: "Plan de mantención preventiva y termografía infrarroja para flota de 48 motores eléctricos en planta procesadora.",
      img: "https://images.unsplash.com/photo-1559774944-4e6c033af2fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZWxlY3RyaWNhbCUyMHdvcmtlcnMlMjBDaGlsZSUyMG1pbmluZ3xlbnwxfHx8fDE3Nzg1NTc3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section className="bg-[#f6f3f2] py-20 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4">
          <span
            className="text-[#EEA906] text-xs tracking-[3.6px] uppercase"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
          >
            Experiencia comprobada
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p
                className="text-[#1a1a1a] leading-tight mb-0"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(1.8rem, 3.2vw, 3rem)",
                  fontWeight: 700,
                  letterSpacing: "-1.5px",
                }}
              >
                Proyectos
              </p>
              <p
                className="text-[#EEA906] leading-tight"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(1.8rem, 3.2vw, 3rem)",
                  fontWeight: 700,
                  letterSpacing: "-1.5px",
                }}
              >
                destacados
              </p>
            </div>
            <YellowButton to="/servicios">Ver todos los servicios</YellowButton>
          </div>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-3 gap-0">
          {projects.map((project) => (
            <div
              key={project.num}
              className="bg-white border border-[#e6e6e6] flex flex-col group hover:border-[#EEA906]/40 transition-colors duration-200"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <ImageWithFallback
                  src={project.img}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-[#041627]/30 group-hover:bg-[#041627]/20 transition-colors duration-300" />
                {/* Number badge */}
                <div className="absolute top-4 left-4 bg-[#EEA906] text-white px-3 py-1">
                  <span
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "1.5px",
                    }}
                  >
                    {project.num}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-7 flex-1">
                {/* Tag */}
                <span
                  className="text-[#EEA906] text-xs tracking-[2px] uppercase"
                  style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
                >
                  {project.tag}
                </span>

                {/* Title */}
                <h3
                  className="text-[#1b1c1c]"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    letterSpacing: "-0.5px",
                  }}
                >
                  {project.title}
                </h3>

                {/* Desc */}
                <p
                  className="text-[#44474c] text-sm leading-relaxed flex-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {project.desc}
                </p>

                {/* Bottom border CTA area */}
                <div className="pt-5 mt-auto border-t border-[rgba(196,198,205,0.2)]">
                  <span
                    className="text-[#EEA906] text-xs tracking-[1.5px] uppercase"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                  >
                    Problem Solved
                  </span>
                  <div className="mt-3">
                    <button
                      onClick={() => {}}
                      className="bg-[#f6f3f2] w-full py-3 text-xs tracking-[1.2px] uppercase text-[#1b1c1c] hover:bg-[#EEA906] hover:text-white transition-colors duration-200"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                    >
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 8. CTA BANNER ────────────────────────────────────────────────── */
function CtaBanner() {
  return (
    <section
      id="contacto"
      className="bg-[#041627] py-20 px-6 md:px-10 relative overflow-hidden"
    >
      {/* Decorative bolt */}
      <div className="absolute right-16 inset-y-0 flex items-center opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 400" className="h-64 text-[#EEA906]" fill="currentColor">
          <polygon points="120,0 50,200 110,200 80,400 170,150 110,150 150,0" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-3 max-w-xl">
          <span
            className="text-[#EEA906] text-xs tracking-[3px] uppercase"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
          >
            ¿Necesita una cotización?
          </span>
          <h2
            className="text-white leading-tight"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-1px",
            }}
          >
            Contáctenos y nuestro equipo responderá en menos de 24 horas
          </h2>
          <p
            className="text-[#8192a7] text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Soporte técnico local en Antofagasta. Atendemos emergencias
            eléctricas críticas con prioridad máxima.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
          <YellowButton href="mailto:contacto@electriccompany.cl">
            Solicitar cotización
          </YellowButton>
          <a
            href="https://wa.me/56933836531"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm tracking-widest uppercase font-bold text-white border border-white/30 hover:border-[#EEA906] hover:text-[#EEA906] transition-all duration-200"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── PAGE EXPORT ──────────────────────────────────────────────────── */
export function NosotrosPage() {
  return (
    <>
      <NosotrosHero />
      <QuienesSomosSection />
      <PropuestaDeValor />
      <EstadisticasSection />
      <MisionVisionSection />
      <ExperienceSection />
      <CtaBanner />
    </>
  );
}
