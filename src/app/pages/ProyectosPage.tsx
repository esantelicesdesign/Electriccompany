import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import svgPaths from "../../imports/Html→Body-1/svg-a8l4qlap8i";
import imgHeroBg from "figma:asset/90b4456baadce727174c32a2d7c26cef0ba16b94.png";
import imgHeroRight from "figma:asset/0540334252044eaf1b4b7a0b80be236aa268c88b.png";
import imgProyectoWom from "../../imports/proyecto_wom.png";
import imgStandExponor from "../../imports/instalacion_stand_exponor_2.jpeg";

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
function ProyectosHero() {
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
              Proyectos
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
            Experiencia y{" "}
            <span className="text-[#EEA906]">proyectos destacados</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#8192a7] text-lg leading-relaxed max-w-2xl">
            Desde automatización industrial hasta sistemas de respaldo energético,
            nuestro portafolio refleja más de una década de excelencia técnica
            en el norte de Chile.
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

/* ─── 2. STATS BAR ─────────────────────────────────────────────────── */
function StatsBar() {
  const stats = [
    { number: "+80", label: "Proyectos completados" },
    { number: "+40", label: "Clientes industriales" },
    { number: "24/7", label: "Soporte técnico" },
    { number: "100%", label: "Cumplimiento normativo" },
  ];

  return (
    <section className="bg-[#e6e6e6] border-y border-[#d1d1d1]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2 items-center text-center">
              <span
                className="text-[#EEA906]"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-2px",
                  lineHeight: 1,
                }}
              >
                {stat.number}
              </span>
              <span
                className="text-[#1b1c1c] text-xs tracking-[2px] uppercase"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 3. PROJECT CARD ──────────────────────────────────────────────── */
interface ProjectCardProps {
  num: string;
  title: string;
  tag: string;
  desc: string;
  imgUrl: string;
}

function ProjectCard({ num, title, tag, desc, imgUrl }: ProjectCardProps) {
  return (
    <div className="bg-white border border-[#e6e6e6] flex flex-col group hover:border-[#EEA906]/50 transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden h-64">
        <ImageWithFallback
          src={imgUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#041627]/40 group-hover:bg-[#041627]/25 transition-colors duration-3 p-[0px]00" />

        {/* Number badge */}
        <div className="absolute top-5 left-5 bg-[#EEA906] text-white px-3.5 py-1.5 shadow-lg">
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            {num}
          </span>
        </div>

        {/* Yellow corner accent (bottom right) */}
        <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            className="absolute inset-0"
            style={{
              borderBottom: "4px solid #EEA906",
              borderRight: "4px solid #EEA906",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-7 flex-1">
        {/* Tag */}
        <span
          className="text-[#EEA906] text-[0.7rem] tracking-[2.5px] uppercase inline-block"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
        >
          {tag}
        </span>

        {/* Title */}
        <h3
          className="text-[#1b1c1c]"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "1.4rem",
            fontWeight: 700,
            letterSpacing: "-0.5px",
            lineHeight: 1.2,
          }}
        >
          {title}
        </h3>

        {/* Desc */}
        <p
          className="text-[#44474c] text-sm leading-relaxed flex-1"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {desc}
        </p>

        {/* Bottom CTA area */}
        <div className="pt-4 mt-auto border-t border-[#e6e6e6]">
          <div className="flex items-center gap-2">
            <button className="flex-1 flex items-center justify-center gap-2 bg-[#f6f3f2] hover:bg-[#EEA906] text-[#1b1c1c] hover:text-white py-2.5 text-[0.65rem] tracking-[1.5px] uppercase transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Fotos
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-[#f6f3f2] hover:bg-[#EEA906] text-[#1b1c1c] hover:text-white py-2.5 text-[0.65rem] tracking-[1.5px] uppercase transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── 4. PROJECTS GRID ─────────────────────────────────────────────── */
function ProyectosGrid() {
  const projects: ProjectCardProps[] = [
    {
      num: "01",
      title: "Tablero Eléctrico WOM",
      tag: "Automatización Industrial",
      desc: "Desarrollo e integración de tablero eléctrico para operación comercial, enfocado en continuidad operativa, seguridad y correcta distribución energética.",
      imgUrl: imgProyectoWom,
    },
    {
      num: "02",
      title: "Stand Exponor",
      tag: "Instalaciones Industriales",
      desc: "Implementación de soluciones eléctricas para espacio expositivo industrial, considerando montaje, distribución y funcionamiento seguro de equipos.",
      imgUrl: imgStandExponor,
    },
    {
      num: "03",
      title: "Renovación Salfa Rent",
      tag: "Iluminación Industrial",
      desc: "Renovación de sistema de iluminación en bodega industrial, optimizando visibilidad, eficiencia energética y operatividad del espacio.",
      imgUrl: "https://images.unsplash.com/photo-1586864387634-3e3a50b8489b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwbGlnaHRpbmclMjBsZWR8ZW58MXx8fHwxNzc4NTU3OTA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      num: "04",
      title: "Proyecto Residencial",
      tag: "Instalaciones Eléctricas",
      desc: "Ejecución de instalación eléctrica residencial, incorporando soluciones seguras y adaptadas a los requerimientos del cliente.",
      imgUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGVsZWN0cmljYWwlMjBpbnN0YWxsYXRpb24lMjBob3VzZXxlbnwxfHx8fDE3Nzg1NTc5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      num: "05",
      title: "Mantenedor de Batería",
      tag: "Sistemas de Respaldo",
      desc: "Instalación de sistema de respaldo y mantenimiento de baterías para generador eléctrico, mejorando confiabilidad y disponibilidad operativa.",
      imgUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXR0ZXJ5JTIwYmFja3VwJTIwc3lzdGVtJTIwaW5kdXN0cmlhbCUyMHVwc3xlbnwxfHx8fDE3Nzg1NTc5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      num: "06",
      title: "Empalme Trifásico",
      tag: "Distribución Eléctrica",
      desc: "Desarrollo de empalme trifásico orientado a una distribución eléctrica segura, estable y acorde a estándares técnicos.",
      imgUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJlZSUyMHBoYXNlJTIwZWxlY3RyaWNhbCUyMGNvbm5lY3Rpb24lMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc3ODU1NzkwNnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      num: "07",
      title: "Tablero Schneider",
      tag: "Control y Fuerza",
      desc: "Configuración e integración de tablero de control con variador de frecuencia Schneider para optimización de procesos eléctricos industriales.",
      imgUrl: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2huZWlkZXIlMjBlbGVjdHJpYyUyMHBhbmVsJTIwY29udHJvbCUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzc4NTU3OTA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      num: "08",
      title: "Transferencia Automática",
      tag: "Continuidad Operacional",
      desc: "Instalación de tablero de transferencia automática para operación industrial, asegurando continuidad energética y respuesta eficiente.",
      imgUrl: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aWMlMjB0cmFuc2ZlciUyMHN3aXRjaCUyMGVsZWN0cmljYWwlMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc3ODU1NzkwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      num: "09",
      title: "Tablero Energy",
      tag: "Minería e Industria",
      desc: "Desarrollo e integración de tablero de distribución para operación minera, enfocado en seguridad y eficiencia operacional.",
      imgUrl: "https://images.unsplash.com/photo-1638423086998-beb8b82ce15f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBlbGVjdHJpY2FsJTIwcGFuZWwlMjBpbmR1c3RyaWFsJTIwQ2hpbGV8ZW58MXx8fHwxNzc4NTU3OTA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      num: "10",
      title: "Mantención Linde Gas",
      tag: "Mantenimiento Eléctrico",
      desc: "Cambio de componentes y pruebas funcionales en tablero de transferencia automática para asegurar continuidad y correcto funcionamiento.",
      imgUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwbWFpbnRlbmFuY2UlMjB3b3JrZXIlMjBpbmR1c3RyaWFsJTIwcGFuZWx8ZW58MXx8fHwxNzc4NTU3OTA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      num: "11",
      title: "Generador Minero",
      tag: "Energía de Respaldo",
      desc: "Implementación de sistema de generación de respaldo para operación minera, orientado a mantener estabilidad energética y operativa.",
      imgUrl: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZ2VuZXJhdG9yJTIwbWluaW5nJTIwZWxlY3RyaWNhbHxlbnwxfHx8fDE3Nzg1NTc5MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-4">
          <span
            className="text-[#EEA906] text-xs tracking-[3.6px] uppercase"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
          >
            Portafolio
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
              realizados
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.num} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 5. CAPACIDADES ───────────────────────────────────────────────── */
function CapacidadesSection() {
  const capabilities = [
    {
      icon: svgPaths.p2256d300,
      title: "Media y Baja Tensión",
      desc: "Instalaciones certificadas SEC para sistemas de distribución eléctrica industrial en todo rango de voltaje.",
    },
    {
      icon: svgPaths.p3c3be360,
      title: "Tableros de Control",
      desc: "Diseño, fabricación e integración de tableros CCM, MCC y sistemas de automatización industrial.",
    },
    {
      icon: svgPaths.p17359280,
      title: "Sistemas de Respaldo",
      desc: "Implementación de generadores, UPS y tableros de transferencia automática para continuidad operativa.",
    },
    {
      icon: svgPaths.p39cda500,
      title: "Mantenimiento Predictivo",
      desc: "Termografía infrarroja, análisis de aceite dieléctrico y mantención preventiva de equipos eléctricos.",
    },
  ];

  return (
    <section className="bg-[#e6e6e6] py-20 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-12 text-center flex flex-col gap-4 items-center">
          <span
            className="text-[#EEA906] text-xs tracking-[3.6px] uppercase"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
          >
            Capacidades técnicas
          </span>
          <h2
            className="text-[#1b1c1c] max-w-2xl"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 700,
              letterSpacing: "-1.5px",
              lineHeight: 1.2,
            }}
          >
            Soluciones integrales para{" "}
            <span className="text-[#EEA906]">cada desafío eléctrico</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-white border border-[#e6e6e6] flex flex-col gap-5 p-7 relative group hover:border-[#EEA906]/50 transition-all duration-200"
            >
              {/* Yellow left accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#EEA906] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

              {/* Icon */}
              <div className="h-9 w-9 flex-shrink-0">
                <svg fill="none" viewBox="0 0 20 25" className="h-9 w-auto">
                  <path d={cap.icon} fill="#EEA906" />
                </svg>
              </div>

              {/* Title */}
              <h3
                className="text-[#1b1c1c] uppercase"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "2.2px",
                }}
              >
                {cap.title}
              </h3>

              {/* Desc */}
              <p
                className="text-[#44474c] text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {cap.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 6. CTA SECTION ───────────────────────────────────────────────── */
function CtaSection() {
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
            ¿Tiene un proyecto en mente?
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
            Conversemos sobre cómo podemos apoyar su operación
          </h2>
          <p
            className="text-[#8192a7] text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Equipo técnico local en Antofagasta. Respuesta en menos de 24 horas
            para cotizaciones y emergencias eléctricas industriales.
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
export function ProyectosPage() {
  return (
    <>
      <ProyectosHero />
      <StatsBar />
      <ProyectosGrid />
      <CapacidadesSection />
      <CtaSection />
    </>
  );
}
