import svgPaths from "./svg-0a6ile8q3c";
import imgImage1 from "./a907f05b03ae3a8f12c3ffc5b40e0be929b5684b.png";

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[2.24px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Antofagasta, chile.</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[2.24px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">+56 9 33836531</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[2.24px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">CONTACTO@ELECTRICOMPANY.CL</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#eea906] content-stretch flex inset-[0_0_79.91%_0] items-center justify-between overflow-clip px-[71px] py-[2px]">
      <Frame2 />
      <Frame4 />
      <Frame3 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="h-[145px] relative shrink-0 w-[183px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[14px] tracking-[2.24px] uppercase w-[86.53px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Inicio</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[14px] tracking-[2.24px] uppercase w-[92px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Nosotros</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[14px] tracking-[2.24px] uppercase w-[93.47px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Servicios</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[14px] tracking-[2.24px] uppercase w-[112px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Experiencia</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Nav">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#fcd800] content-stretch drop-shadow-[0px_1px_7.5px_rgba(238,194,9,0.98)] flex gap-[24px] items-center justify-center px-[24px] py-[8px] relative shrink-0" data-name="Button">
      <div className="h-[25px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 25">
          <path d={svgPaths.p17359280} fill="var(--fill-0, white)" id="Icon" />
        </svg>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[2.24px] uppercase w-[124.88px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">{`Contáctanos `}</p>
      </div>
    </div>
  );
}

function HeaderTopNavBar() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(248,250,252,0.85)] content-stretch flex gap-[125px] inset-[20.09%_0_0_0] items-center px-[40px] py-[24px]" data-name="Header / TopNavBar">
      <Container />
      <Nav />
      <Button />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col h-[214px] items-start relative shrink-0 w-[1281px]">
      <div className="h-[214px] relative shrink-0 w-[1281px]" data-name="Component 1">
        <Frame />
        <HeaderTopNavBar />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[48px] tracking-[-2.4px] w-full">
        <p className="leading-[48px]">Solicita tu cotización</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[23.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#44474c] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Estamos listos para evaluar tu proyecto. Completa el formulario o</p>
        <p className="leading-[24px]">contáctanos vía WhatsApp para una respuesta inmediata.</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1c1c] text-[14px] tracking-[-0.7px] uppercase w-[72.73px]">
        <p className="leading-[20px]">UBICACIÓN</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[14px] w-[241.45px]">
        <p className="leading-[20px]">Sector Industrial, Antofagasta, Chile.</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[241.45px]" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
          <path d={svgPaths.p1869180} fill="var(--fill-0, #EEA906)" id="Icon" />
        </svg>
      </div>
      <Container6 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1c1c] text-[14px] tracking-[-0.7px] uppercase w-[150.23px]">
        <p className="leading-[20px]">HORARIO DE ATENCIÓN</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[14px] w-[203.81px]">
        <p className="leading-[20px]">Lunes a Viernes: 08:00 - 18:00</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[203.81px]" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p256e1340} fill="var(--fill-0, #EEA906)" id="Icon" />
        </svg>
      </div>
      <Container10 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1c1c] text-[14px] tracking-[-0.7px] uppercase w-[126.66px]">
        <p className="leading-[20px]">SOPORTE URGENTE</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p3ffd6800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#25d366] content-stretch flex gap-[7.99px] items-center px-[24px] py-[12px] relative shrink-0" data-name="Button">
      <Container16 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[176.63px]">
        <p className="leading-[24px]">Escribir por WhatsApp</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Container15 />
      <Button1 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="h-[18px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
          <path d={svgPaths.p20cc9b00} fill="var(--fill-0, #EEA906)" id="Icon" />
        </svg>
      </div>
      <Container14 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start pt-[39.5px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container9 />
      <Container13 />
    </div>
  );
}

function Container2() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8.5px] items-start justify-self-stretch pb-[69px] relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#eea906] text-[12px] tracking-[3.6px] uppercase w-[181.83px]">
        <p className="leading-[16px]">CONTACTO DIRECTO</p>
      </div>
      <Heading />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">NOMBRE COMPLETO</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
          <p className="leading-[normal]">Ingresa tu nombre</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip pb-[16px] pt-[13px] relative rounded-[inherit] size-full">
        <Container18 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(196,198,205,0.3)] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">EMPRESA</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
          <p className="leading-[normal]">Nombre de tu empresa</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip pb-[16px] pt-[13px] relative rounded-[inherit] size-full">
        <Container20 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(196,198,205,0.3)] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Input1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">MENSAJE / DESCRIPCIÓN DEL PROYECTO</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
          <p className="leading-[20px]">Cuéntanos brevemente qué necesitas</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Textarea">
      <div className="content-stretch flex items-start justify-center overflow-clip pb-[74px] pt-[12px] relative rounded-[inherit] size-full">
        <Container22 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(196,198,205,0.3)] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Textarea />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#041627] content-stretch flex items-center justify-center py-[16px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1.4px] uppercase w-[288.44px]">
        <p className="leading-[20px]">ENVIAR SOLICITUD DE COTIZACIÓN</p>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <Container17 />
        <Container19 />
        <Container21 />
        <Button2 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f6f3f2] col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(196,198,205,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[57px] pt-[41px] px-[41px] relative size-full">
        <Form />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="gap-x-[80px] gap-y-[80px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_489px] px-[86px] py-[115px] relative size-full">
        <Container2 />
        <BackgroundBorder />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.9px] uppercase w-full">
        <p className="leading-[28px]">ELECTRIC COMPANY SPA</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.3px] w-full">
        <p className="leading-[19.5px] mb-0">Expertos en soluciones eléctricas de alta potencia para el sector</p>
        <p className="leading-[19.5px]">industrial y minero en el norte de Chile.</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
          <path d={svgPaths.p12df5c00} fill="var(--fill-0, white)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[18px] relative shrink-0 w-[21.9px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9 18">
          <path d={svgPaths.p2815d40} fill="var(--fill-0, white)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[18.506px] relative shrink-0 w-[18.032px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0318 18.5059">
          <path d={svgPaths.p26ad4c00} fill="var(--fill-0, white)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[16px] h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container23() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[45px] relative size-full">
        <Container24 />
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">{`Enlaces Rápidos `}</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.3px] w-full">
        <p className="leading-[16px]">Servicios</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.3px] w-full">
        <p className="leading-[16px]">Nosotros</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.3px] w-full">
        <p className="leading-[16px]">Experiencia</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.3px] w-full">
        <p className="leading-[16px]">Contáctanos</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ca8a04] text-[12px] tracking-[-0.3px] w-full">
        <p className="leading-[16px]">WhatsApp</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
    </div>
  );
}

function Container30() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <Heading1 />
        <List />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Certificaciones</p>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[13px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.3px] w-[41.95px]">
          <p className="leading-[16px]">SEC_CL</p>
        </div>
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[13px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.3px] w-[49.63px]">
          <p className="leading-[16px]">ISO_9001</p>
        </div>
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[13px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.3px] w-[74.98px]">
          <p className="leading-[16px]">OHSAS_18001</p>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[16px] h-[42px] items-start opacity-50 relative shrink-0 w-full" data-name="Container">
      <Border />
      <Border1 />
      <Border2 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-[241px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e6e6e6] text-[9px] tracking-[0.9px] uppercase w-full">
        <p className="leading-[16px] mb-0">© 2026 ELECTRIC COMPANY SPA. todos los derechos reservados.</p>
        <p className="leading-[16px]">ANTOFAGASTA, CHILE.</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[22px] relative size-full">
        <Heading2 />
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#1a1a1a] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-solid border-t border-white inset-0 pointer-events-none" />
      <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_184px] pb-[64px] pt-[65px] px-[40px] relative size-full">
        <Container23 />
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

export default function Contactanos() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(251, 249, 248) 0%, rgb(251, 249, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Contactanos">
      <Frame1 />
      <Container1 />
      <Footer />
    </div>
  );
}