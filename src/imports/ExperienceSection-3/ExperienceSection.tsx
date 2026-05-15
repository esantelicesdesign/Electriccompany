import imgEquipo from "../equipo_electrico.png";

type TeamCardProps = {
  name: string;
  role?: string;
  specialty: string;
};

function TeamCard({ name, role, specialty }: TeamCardProps) {
  return (
    <article
      className="group relative overflow-hidden rounded-sm border border-[#d1d1d1] bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:border-[#EEA906]/50 hover:shadow-md"
      data-name="Team card"
    >
      <div
        className="absolute left-0 top-0 h-full w-1 bg-[#EEA906] opacity-90 transition-all duration-300 group-hover:w-1.5"
        aria-hidden
      />
      <div className="flex flex-col gap-2 pl-2">
        <h3
          className="text-[#1b1c1c] text-xl md:text-2xl font-bold tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {name}
        </h3>
        {role ? (
          <p className="text-[#8192a7] text-sm font-semibold uppercase tracking-widest mb-3">
            {role}
          </p>
        ) : null}
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#EEA906] mb-2">
          Especialidad
        </p>
        <p className="text-[#44474c] text-sm md:text-base font-medium leading-relaxed">
          {specialty}
        </p>
      </div>
    </article>
  );
}

export default function ExperienceSection() {
  return (
    <div
      className="bg-[#e6e6e6] flex flex-col items-stretch py-16 md:py-24 w-full"
      data-name="Experience Section"
    >
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        <div className="flex flex-col items-center text-center gap-3 mb-10 md:mb-14">
          <span className="text-[#EEA906] text-xs tracking-[3px] uppercase font-bold">
            Nosotros
          </span>
          <h2
            className="text-[#1b1c1c] text-3xl md:text-[2.5rem] font-extrabold tracking-[-1.5px] leading-tight max-w-2xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Equipo comprometido
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div
            className="relative flex items-center justify-center rounded-sm border border-white/80 bg-white p-4 md:p-6 shadow-[0_8px_40px_rgba(4,22,39,0.08)]"
            data-name="Illustration column"
          >
            <img
              src={imgEquipo}
              alt="Ilustración del equipo técnico de Electric Company en trabajo de campo y oficina"
              className="w-full max-w-lg mx-auto h-auto object-contain select-none"
            />
          </div>

          <div
            className="flex flex-col justify-center gap-5 w-full max-w-xl lg:max-w-none"
            data-name="Team cards column"
          >
            <TeamCard
              name="Juan Carlos Mondaca"
              role="Gerente"
              specialty="Ingeniería eléctrica e industrial"
            />
            <TeamCard
              name="Belén Espinosa"
              specialty="Instrumentación y control industrial"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
