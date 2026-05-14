import { useState } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ProjectPhotosGalleryModal } from "../components/ProjectPhotosGalleryModal";
import { ProjectYoutubeVideoModal } from "../components/ProjectYoutubeVideoModal";
import svgPaths from "../../imports/Html→Body-1/svg-a8l4qlap8i";
import imgHeroBg from "figma:asset/90b4456baadce727174c32a2d7c26cef0ba16b94.png";
import imgHeroRight from "figma:asset/0540334252044eaf1b4b7a0b80be236aa268c88b.png";
import imgProyectoWom from "../../imports/proyectos/proyecto_wom.png";
import imgStandExponor from "../../imports/proyectos/instalacion_stand_exponor_2.jpeg";
import imgStandExponor1 from "../../imports/proyectos/instalacion_stand_exponor_1.jpg";
import imgBodegaSalfa from "../../imports/proyectos/bodega_salfa (1).jpg";
import imgBodegaSalfa2 from "../../imports/proyectos/bodega_salfa (2).jpg";
import imgDomiciliario from "../../imports/proyectos/domiciliario_1.jpg";
import imgDomiciliario2 from "../../imports/proyectos/Domiciliario_2.jpg";
import imgEquipoMantenedor from "../../imports/proyectos/equipomantenedor_respaldo_salfa.jpg";
import imgEquipoMantenedor2 from "../../imports/proyectos/equipomantenedor_respaldo_salfa2.jpg";
import imgEquipoMantenedor3 from "../../imports/proyectos/equipomantenedor_respaldo_salfa3.jpg";
import imgEmpalme from "../../imports/proyectos/empalme_electrico.jpg";
import imgEmpalme2 from "../../imports/proyectos/empalme_electrico2.jpg";
import imgVariadorSchneider from "../../imports/proyectos/variador_schneider.jpg";
import imgTransferenciaAuto from "../../imports/proyectos/tablero transferecncia automática.jpg";
import imgTableroEnergy from "../../imports/proyectos/tablero_electrico_energy.jpg";
import imgTableroEnergy2 from "../../imports/proyectos/tablero_electrico_energy_2.jpg";
import imgLindeGas from "../../imports/proyectos/tablero de transferencia_linde gas_2.jpg";
import imgGeneradorRespaldo from "../../imports/proyectos/instalacion_generador_de_respaldo.jpg";
import imgGeneradorRespaldo2 from "../../imports/proyectos/instalacion_generador_de_respaldo_2.jpg";

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

/* ─── 2. PROJECT CARD ──────────────────────────────────────────────── */
interface ProjectCardProps {
  num: string;
  title: string;
  tag: string;
  desc: string;
  images: string[];
  onOpenFotos: () => void;
  onOpenVideo?: () => void;
}

function ProjectCard({ num, title, tag, desc, images, onOpenFotos, onOpenVideo }: ProjectCardProps) {
  const coverSrc = images[0] ?? "";
  return (
    <div className="bg-white border border-[#e6e6e6] flex flex-col group hover:border-[#EEA906]/50 transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden h-64">
        <ImageWithFallback
          src={coverSrc}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#041627]/50 group-hover:bg-[#041627]/35 transition-colors duration-300" />

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
            <button
              type="button"
              onClick={onOpenFotos}
              className={`flex items-center justify-center gap-2 bg-[#f6f3f2] hover:bg-[#EEA906] text-[#1b1c1c] hover:text-white py-2.5 text-[0.65rem] tracking-[1.5px] uppercase transition-colors duration-200 ${
                onOpenVideo ? "flex-1" : "w-full"
              }`}
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Fotos
            </button>
            {onOpenVideo ? (
              <button
                type="button"
                onClick={onOpenVideo}
                title="Ver video del proyecto"
                className="flex-1 flex items-center justify-center gap-2 bg-[#f6f3f2] hover:bg-[#EEA906] text-[#1b1c1c] hover:text-white py-2.5 text-[0.65rem] tracking-[1.5px] uppercase transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Video
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── 3. PROJECTS GRID ─────────────────────────────────────────────── */
function ProyectosGrid() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryTitle, setGalleryTitle] = useState("");
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  const [videoOpen, setVideoOpen] = useState(false);
  const [videoTitle, setVideoTitle] = useState("");
  const [videoId, setVideoId] = useState<string | null>(null);

  const openGallery = (title: string, images: string[]) => {
    setGalleryTitle(title);
    setGalleryImages(images);
    setGalleryOpen(true);
  };

  const openYoutube = (title: string, id: string) => {
    setVideoTitle(title);
    setVideoId(id);
    setVideoOpen(true);
  };

  const handleVideoModalOpenChange = (open: boolean) => {
    setVideoOpen(open);
    if (!open) setVideoId(null);
  };

  const projects: Array<
    Omit<ProjectCardProps, "onOpenFotos" | "onOpenVideo"> & { youtubeVideoId?: string }
  > = [
    {
      num: "01",
      title: "Tablero Eléctrico WOM",
      tag: "Automatización Industrial",
      desc: "Desarrollo e integración de tablero eléctrico para operación comercial, enfocado en continuidad operativa, seguridad y correcta distribución energética.",
      images: [imgProyectoWom],
      youtubeVideoId: "ri2KyP-5BEg",
    },
    {
      num: "02",
      title: "Stand Exponor",
      tag: "Instalaciones Industriales",
      desc: "Implementación de soluciones eléctricas para espacio expositivo industrial, considerando montaje, distribución y funcionamiento seguro de equipos.",
      images: [imgStandExponor1, imgStandExponor],
    },
    {
      num: "03",
      title: "Renovación Salfa Rent",
      tag: "Iluminación Industrial",
      desc: "Renovación de sistema de iluminación en bodega industrial, optimizando visibilidad, eficiencia energética y operatividad del espacio.",
      images: [imgBodegaSalfa, imgBodegaSalfa2],
    },
    {
      num: "04",
      title: "Proyecto Residencial",
      tag: "Instalaciones Eléctricas",
      desc: "Ejecución de instalación eléctrica residencial, incorporando soluciones seguras y adaptadas a los requerimientos del cliente.",
      images: [imgDomiciliario, imgDomiciliario2],
    },
    {
      num: "05",
      title: "Mantenedor de Batería",
      tag: "Sistemas de Respaldo",
      desc: "Instalación de sistema de respaldo y mantenimiento de baterías para generador eléctrico, mejorando confiabilidad y disponibilidad operativa.",
      images: [imgEquipoMantenedor, imgEquipoMantenedor2, imgEquipoMantenedor3],
    },
    {
      num: "06",
      title: "Empalme Trifásico",
      tag: "Distribución Eléctrica",
      desc: "Desarrollo de empalme trifásico orientado a una distribución eléctrica segura, estable y acorde a estándares técnicos.",
      images: [imgEmpalme, imgEmpalme2],
    },
    {
      num: "07",
      title: "Tablero Schneider",
      tag: "Control y Fuerza",
      desc: "Configuración e integración de tablero de control con variador de frecuencia Schneider para optimización de procesos eléctricos industriales.",
      images: [imgVariadorSchneider],
    },
    {
      num: "08",
      title: "Transferencia Automática",
      tag: "Continuidad Operacional",
      desc: "Instalación de tablero de transferencia automática para operación industrial, asegurando continuidad energética y respuesta eficiente.",
      images: [imgTransferenciaAuto],
      youtubeVideoId: "Knj_9ozn8yk",
    },
    {
      num: "09",
      title: "Tablero Energy",
      tag: "Minería e Industria",
      desc: "Desarrollo e integración de tablero de distribución para operación minera, enfocado en seguridad y eficiencia operacional.",
      images: [imgTableroEnergy, imgTableroEnergy2],
      youtubeVideoId: "KsnRSXWWYD8",
    },
    {
      num: "10",
      title: "Mantención Linde Gas",
      tag: "Mantenimiento Eléctrico",
      desc: "Cambio de componentes y pruebas funcionales en tablero de transferencia automática para asegurar continuidad y correcto funcionamiento.",
      images: [imgLindeGas],
    },
    {
      num: "11",
      title: "Generador Minero",
      tag: "Energía de Respaldo",
      desc: "Implementación de sistema de generación de respaldo para operación minera, orientado a mantener estabilidad energética y operativa.",
      images: [imgGeneradorRespaldo, imgGeneradorRespaldo2],
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-10">
      <ProjectPhotosGalleryModal
        open={galleryOpen}
        onOpenChange={setGalleryOpen}
        projectTitle={galleryTitle}
        images={galleryImages}
      />
      <ProjectYoutubeVideoModal
        open={videoOpen}
        onOpenChange={handleVideoModalOpenChange}
        projectTitle={videoTitle}
        videoId={videoId}
      />
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
          {projects.map(({ youtubeVideoId, ...project }) => (
            <ProjectCard
              key={project.num}
              {...project}
              onOpenFotos={() => openGallery(project.title, project.images)}
              onOpenVideo={
                youtubeVideoId
                  ? () => openYoutube(project.title, youtubeVideoId)
                  : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 4. CAPACIDADES ───────────────────────────────────────────────── */
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

/* ─── 5. CTA SECTION ───────────────────────────────────────────────── */
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
          <YellowButton href="mailto:contacto@electricompany.cl">
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
      <ProyectosGrid />
      <CapacidadesSection />
      <CtaSection />
    </>
  );
}
