import svgPaths from "./svg-uz6xjjavrj";
import imgDescarga1 from "./7ce1318be4f01bc4ad11e9842aec959d4be810c3.png";
import imgRetrato21 from "./22c433eb49777e05fc4cccab3972d55e6f8b98d2.png";
import catalogBrochureUrl from "../Catalogo_electric_comp_compressed.pdf";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[48px] text-center tracking-[-2.4px] w-[506.45px]">
        <p className="leading-[48px]">Equipo comprometido</p>
      </div>
    </div>
  );
}

function Heading2Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Heading 2:margin">
      <Heading />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#eea906] text-[12px] text-center tracking-[3.6px] uppercase w-[255px]">
        <p className="leading-[16px]">nosotros</p>
      </div>
      <Heading2Margin />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1c1c] text-[24px] w-full">
        <p className="leading-[28px]">Juan Carlos Mondaca</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[18px] w-full">
        <p className="leading-[16px]">Gerente</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="capitalize flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#eea906] text-[18px] w-full">
        <p className="leading-[30px]">Especialidad: Ingeniería eléctrica e industrial</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function TechnicalWork() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[599px] items-center relative shrink-0 w-[407px]" data-name="Technical Work 3">
      <div className="h-[348px] relative shrink-0 w-full" data-name="descarga 1">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgDescarga1} />
      </div>
      <Heading1 />
      <Background />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1c1c] text-[24px] w-full">
        <p className="leading-[28px]">Belén Espinosa</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="capitalize flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#eea906] text-[18px] w-full">
        <p className="leading-[25px]">Especialidad: Instrumentación y control industrial</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function TechnicalWork1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[599px] items-center relative shrink-0 w-[409px]" data-name="Technical Work 4">
      <div className="relative shrink-0 size-[344px]" data-name="retrato_2 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRetrato21} />
      </div>
      <Heading2 />
      <Background1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[57px] items-start justify-center relative shrink-0 w-[1098px]" data-name="Container">
      <TechnicalWork />
      <TechnicalWork1 />
    </div>
  );
}

function Button() {
  return (
    <a
      href={catalogBrochureUrl}
      download="Catalogo_electric_comp_compressed.pdf"
      className="bg-[#eea906] content-stretch drop-shadow-[-1px_0px_5.858px_rgba(255,193,47,0.99)] flex gap-[20px] items-center justify-center pb-[17.5px] pt-[16.5px] px-[40px] relative shrink-0 cursor-pointer no-underline transition-[filter,opacity] duration-200 hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      data-name="Button"
    >
      <div className="h-[25px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 25">
          <path d={svgPaths.p17359280} fill="var(--fill-0, white)" id="Icon" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1.4px] uppercase w-[194.03px]">
        <p className="leading-[20px]">descargar brochure</p>
      </div>
    </a>
  );
}

function Container() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center max-w-[inherit] relative size-full p-[0px]">
          <Container1 />
          <Container2 />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <div className="bg-[#e6e6e6] content-stretch flex flex-col items-start py-[96px] relative size-full" data-name="Experience Section">
      <Container />
    </div>
  );
}