import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import svgPaths from "../../imports/ServiciosVf/svg-w2e8j0p753";
import imgHeroBg from "figma:asset/90b4456baadce727174c32a2d7c26cef0ba16b94.png";
import imgImage5 from "figma:asset/0540334252044eaf1b4b7a0b80be236aa268c88b.png";
import imgImage7 from "figma:asset/eaccb6d7d1fb1a413df015da0c4a0a9028b519c3.png";
import imgImage9 from "figma:asset/69bf0fa6de2e46c39421e323140a5857942f374d.png";
import imgImage10 from "figma:asset/7f5bc54ffbb2fdc2a3c4058f601d2d11d50d6fea.png";
import imgImage11 from "figma:asset/6f16c606a5ef2427aa5423ca2103b5ddcd824461.png";
import imgImage12 from "figma:asset/dcde8b483ee5aab57993347fcb7c187d7ce3e6e6.png";
import imgImage13 from "figma:asset/5464d5c6b2ec3ed71f251855e37ac4bdf695c269.png";
import imgEngineering from "figma:asset/482a34fb4d7740d9a8225750fe380a725eec645d.png";

// Lightning bolt CTA button matching the Figma style
function YellowButton({ children, href, to }: { children: React.ReactNode; href?: string; to?: string }) {
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

  if (href)
    return (
      <a href={href} className={cls}>
        <svg className="w-4 h-5 flex-shrink-0" fill="none" viewBox="0 0 20 25">
          <path d={svgPaths.p17359280} fill="white" />
        </svg>
        {children}
      </a>
    );

  return (
    <button className={cls}>
      <svg className="w-4 h-5 flex-shrink-0" fill="none" viewBox="0 0 20 25">
        <path d={svgPaths.p17359280} fill="white" />
      </svg>
      {children}
    </button>
  );
}

// Checkmark list item matching Figma
function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 20 20">
        <path d={svgPaths.p7b061c0} fill="#EEA906" />
      </svg>
      <span
        className="text-[#1a1a1a] text-sm tracking-widest uppercase"
        style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
      >
        {text}
      </span>
    </div>
  );
}

/* ─── 1. HERO ─────────────────────────────────────────────────────── */
function ServicesHero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex flex-col justify-center overflow-hidden bg-[#041627]">
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
              "linear-gradient(144.264deg, #041627 0%, rgba(4,22,39,0.8) 46%, rgba(4,22,39,0) 86%)",
          }}
        />
      </div>

      {/* Decorative lightning */}
      <div className="absolute right-0 top-0 bottom-0 w-[30%] pointer-events-none opacity-5 hidden lg:flex items-center justify-center">
        <svg viewBox="0 0 200 400" className="h-3/4 text-[#EEA906]" fill="currentColor">
          <polygon points="120,0 50,200 110,200 80,400 170,150 110,150 150,0" />
        </svg>
      </div>

      {/* Right image element */}
      <div className="absolute right-0 bottom-0 h-[85%] w-[32%] pointer-events-none hidden xl:block">
        <img
          src={imgImage5}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-36 pb-20">
        <div className="max-w-3xl flex flex-col gap-6">
          {/* Badge */}
          <span className="inline-flex">
            <span className="bg-[#EEA906] text-white text-xs tracking-[2.4px] uppercase px-3 py-1 font-bold">
              Servicios
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
            Nuestros servicios{" "}
            <span className="text-[#EEA906]">especializados</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#8192a7] text-lg leading-relaxed max-w-2xl">
            Eficiencia operativa, seguridad y respaldo técnico en Antofagasta,
            Chile. Elevando los estándares de la industria energética con
            precisión técnica.
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

/* ─── 2. INSTALACIONES INDUSTRIALES ───────────────────────────────── */
function InstallationsSection() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[620px]">
          {/* Left: Content */}
          <div className="flex flex-col gap-7 px-10 md:px-16 py-20 justify-center">
            {/* Icon */}
            <div className="w-9 h-10 flex-shrink-0">
              <img src={imgImage9} alt="" className="w-full h-full object-contain" />
            </div>

            {/* Heading */}
            <div>
              <p
                className="text-[#1a1a1a] leading-tight mb-0"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                  letterSpacing: "-1px",
                }}
              >
                Instalaciones
              </p>
              <p
                className="text-[#EEA906] leading-tight"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                  letterSpacing: "-1px",
                }}
              >
                Industriales
              </p>
            </div>

            {/* Description */}
            <p
              className="text-[#a3a3a3] text-sm leading-relaxed max-w-lg"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Diseño y ejecución de infraestructuras eléctricas de alta
              complejidad. Nos especializamos en la integración de redes de
              media y baja tensión bajo normativas internacionales.
            </p>

            {/* Items */}
            <div className="flex flex-col gap-4">
              <CheckItem text="Sistema de alumbrado" />
              <CheckItem text="Instalaciones de motores eléctricos" />
              <CheckItem text="Inspección y mantención de equipos de media tensión" />
            </div>

            <div className="pt-2">
              <YellowButton to="/contacto">Ver más</YellowButton>
            </div>
          </div>

          {/* Right: Image with geometric overlay */}
          <div className="relative hidden lg:block">
            <img
              src={imgImage7}
              alt="Instalaciones industriales"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "center top" }}
            />
            {/* Blue diagonal shape matching Figma */}
            <div
              className="absolute bottom-0 left-0 w-48 h-48 bg-[#1e90c0]/80"
              style={{ clipPath: "polygon(0 100%, 0 40%, 100% 100%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 3. MANTENIMIENTO INDUSTRIAL ─────────────────────────────────── */
function MaintenanceSection() {
  return (
    <section className="bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[620px]">
          {/* Left: Image */}
          <div className="relative hidden lg:block min-h-[560px]">
            <img
              src={imgImage11}
              alt="Mantenimiento industrial"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-7 px-10 md:px-16 py-20 justify-center">
            {/* Icon */}
            <div className="w-9 h-10 flex-shrink-0">
              <img src={imgImage10} alt="" className="w-full h-full object-contain" />
            </div>

            {/* Heading */}
            <div>
              <p
                className="text-[#1a1a1a] leading-tight mb-0"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                  letterSpacing: "-1px",
                }}
              >
                Mantenimiento
              </p>
              <p
                className="text-[#EEA906] leading-tight"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                  letterSpacing: "-1px",
                }}
              >
                Industriales
              </p>
            </div>

            {/* Description */}
            <p
              className="text-[#a3a3a3] text-sm leading-relaxed max-w-lg"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Diseño y ejecución de infraestructuras eléctricas de alta
              complejidad. Nos especializamos en la integración de redes de
              media y baja tensión bajo normativas internacionales.
            </p>

            {/* Items */}
            <div className="flex flex-col gap-4">
              <CheckItem text="Salas eléctricas" />
              <CheckItem text="Motores de baja tensión" />
              <CheckItem text="Variadores de frecuencia" />
            </div>

            <div className="pt-2">
              <YellowButton to="/contacto">Ver más</YellowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 4. MONTAJE E INTEGRACIÓN DE TABLEROS ────────────────────────── */
function TableroCard({
  icon,
  title,
  desc,
  borderColor = "#FFD700",
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  borderColor?: string;
}) {
  return (
    <div
      className="bg-[#1a1a1a] flex flex-col gap-6 p-8 flex-1 relative"
      style={{ borderBottom: `8px solid ${borderColor}` }}
    >
      {/* Icon */}
      <div className="h-11 w-auto flex items-start">{icon}</div>

      {/* Title */}
      <h3
        className="text-[#eae2cf] uppercase leading-tight"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "1.5rem",
          fontWeight: 700,
          letterSpacing: "1.5px",
        }}
      >
        {title}
      </h3>

      {/* Desc */}
      <p
        className="text-[#d0c6ab] text-base leading-relaxed"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {desc}
      </p>
    </div>
  );
}

function TablerosSection() {
  const tableroCards = [
    {
      svgPath: svgPaths.p1698ad80,
      svgViewBox: "0 0 44 42",
      title: "Tablero de distribución",
      desc: "Validación técnica y normativa de cada montaje bajo estándares de seguridad vigentes.",
    },
    {
      svgPath: svgPaths.p33d3100,
      svgViewBox: "0 0 44 44",
      title: "Tablero con variador de frecuencia",
      desc: "Ensamblaje certificado de tableros de distribución de fuerza con componentes de grado industrial.",
    },
    {
      svgPath: svgPaths.p18684d00,
      svgViewBox: "0 0 36 37.012",
      title: "Tablero de fuerza",
      desc: "Integración de lógica programable para el control preciso de procesos industriales críticos.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <div className="mb-14 flex flex-col gap-5">
          <div className="flex items-center gap-3">
            {/* Flipped icon */}
            <div className="w-9 h-10 transform scale-y-[-1]">
              <img src={imgImage12} alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <div>
            <p
              className="text-[#1a1a1a] leading-tight mb-0"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-1px",
              }}
            >
              Montaje e integración
            </p>
            <p
              className="text-[#EEA906] leading-tight"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-1px",
              }}
            >
              de tableros eléctricos
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-10">
          {tableroCards.map((card, i) => (
            <TableroCard
              key={i}
              title={card.title}
              desc={card.desc}
              icon={
                <svg
                  fill="none"
                  viewBox={card.svgViewBox}
                  className="h-10"
                >
                  <path d={card.svgPath} fill="#FFD700" />
                </svg>
              }
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <YellowButton to="/contacto">Ver más</YellowButton>
        </div>
      </div>
    </section>
  );
}

/* ─── 5. SERVICIO DE INGENIERÍA ────────────────────────────────────── */
function EngineeringItem({
  label,
  desc,
}: {
  label: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4 items-start">
      <span
        className="text-[#EEA906] flex-shrink-0 leading-none"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "2rem",
          fontWeight: 700,
          letterSpacing: "1px",
        }}
      >
        /
      </span>
      <div className="flex flex-col gap-1">
        <span
          className="text-[#a3a3a3] text-xs tracking-[2.5px] uppercase font-bold"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {label}
        </span>
        <p
          className="text-[#a3a3a3] text-sm leading-relaxed"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

function EngineeringSection() {
  return (
    <section className="bg-[#e6e6e6] py-20 md:py-28 px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="flex flex-col gap-8">
            {/* Icon */}
            <div className="h-[70px] w-[40px]">
              <img
                src={imgImage13}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>

            {/* Heading */}
            <div>
              <p
                className="text-[#1a1a1a] leading-tight mb-0"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 4.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-1.5px",
                }}
              >
                Servicio de
              </p>
              <p
                className="text-[#EEA906] leading-tight"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 4.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-1.5px",
                }}
              >
                Ingeniería
              </p>
            </div>

            {/* Engineering items */}
            <div className="flex flex-col gap-6">
              <EngineeringItem
                label="Proyectos eléctricos"
                desc="Desarrollo de ingeniería básica y de detalle para plantas nuevas o remodelaciones."
              />
              <EngineeringItem
                label="Cumplimiento normativo"
                desc="Asesoría experta en normativas SEC y estándares internacionales (IEC/IEEE)."
              />
              <EngineeringItem
                label="Optimización energética"
                desc="Auditorías de consumo y mejora del factor de potencia para reducción de costos."
              />
            </div>

            <div className="pt-2">
              <YellowButton to="/contacto">Ver más</YellowButton>
            </div>
          </div>

          {/* Right: Image with corner decoration */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-[560px] ml-auto">
              {/* Top-right yellow corner */}
              <div className="absolute top-0 right-0 w-32 h-32 z-10 pointer-events-none">
                <div
                  className="absolute inset-0"
                  style={{
                    borderTop: "8px solid #FFD700",
                    borderRight: "8px solid #FFD700",
                  }}
                />
              </div>

              {/* Grayscale image with yellow bottom border */}
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={imgEngineering}
                  alt="Ingeniería eléctrica industrial"
                  className="w-full h-full object-cover"
                  style={{ filter: "saturate(0)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    borderBottom: "4px solid #FFD700",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 6. CTA BANNER ────────────────────────────────────────────────── */
function CtaBanner() {
  return (
    <section
      id="contacto"
      className="bg-[#041627] py-20 px-6 md:px-10 relative overflow-hidden"
    >
      {/* decorative bolt */}
      <div className="absolute right-16 inset-y-0 flex items-center opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 400" className="h-64 text-[#EEA906]" fill="currentColor">
          <polygon points="120,0 50,200 110,200 80,400 170,150 110,150 150,0" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-3 max-w-xl">
          <span className="text-[#EEA906] text-xs tracking-[3px] uppercase font-bold">
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
          <p className="text-[#8192a7] text-sm">
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
export function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <InstallationsSection />
      <MaintenanceSection />
      <TablerosSection />
      <EngineeringSection />
      <CtaBanner />
    </>
  );
}
