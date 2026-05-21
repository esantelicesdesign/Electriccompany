import { useState } from "react";
import { MapPin, Clock, Zap, MessageCircle } from "lucide-react";
import svgPaths from "../../imports/Contactanos-1/svg-0a6ile8q3c";

/* ─── HERO SECTION ──────────────────────────────────────────────────── */
function ContactoHero() {
  return (
    <section className="bg-[#041627] pt-48 pb-32 px-6 md:px-10 relative overflow-hidden">
      {/* Decorative bolt */}
      <div className="absolute right-16 inset-y-0 flex items-center opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 400" className="h-64 text-[#EEA906]" fill="currentColor">
          <polygon points="120,0 50,200 110,200 80,400 170,150 110,150 150,0" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <span
          className="text-[#EEA906] text-xs tracking-[3.6px] uppercase inline-block mb-4"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
        >
          Contacto Directo
        </span>
        <h1
          className="text-white leading-none mb-6"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 800,
            letterSpacing: "-2.5px",
            lineHeight: 1.05,
          }}
        >
          Solicita tu <span className="text-[#EEA906]">cotización</span>
        </h1>
        <p className="text-[#8192a7] text-lg max-w-2xl mx-auto">
          Estamos listos para evaluar tu proyecto. Completa el formulario o
          contáctanos vía WhatsApp para una respuesta inmediata.
        </p>
      </div>
    </section>
  );
}

const CONTACT_FORM_EMAIL = "contacto@electricompany.cl";

/* ─── CONTACT FORM & INFO ───────────────────────────────────────────── */
function ContactoMain() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("sending");
    setSubmitMessage("");

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_FORM_EMAIL)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: "Solicitud de cotización — formulario web Electric Company",
            _replyto: formData.email,
            nombre: formData.nombre,
            empresa: formData.empresa,
            email: formData.email,
            telefono: formData.telefono || "No indicado",
            mensaje: formData.mensaje,
            _template: "table",
            _captcha: "false",
          }),
        },
      );
      const data = (await res.json()) as { success?: boolean | string; message?: string };
      const ok =
        res.ok &&
        (data.success === true || data.success === "true" || data.success === "True");
      if (!ok) {
        throw new Error(data.message || "No se pudo enviar el formulario.");
      }
      setSubmitStatus("success");
      setSubmitMessage(
        "Tu mensaje fue enviado. Revisaremos tu solicitud y te contactaremos pronto.",
      );
      setFormData({ nombre: "", empresa: "", email: "", telefono: "", mensaje: "" });
    } catch {
      setSubmitStatus("error");
      setSubmitMessage(
        "No pudimos enviar el formulario. Intenta de nuevo o escríbenos por WhatsApp o correo.",
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left: Contact Info */}
          <div className="flex flex-col gap-10">


            {/* Business Hours */}
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 flex-shrink-0 mt-1">
                <Clock className="w-5 h-5 text-[#EEA906]" />
              </div>
              <div className="flex flex-col gap-1">
                <span
                  className="text-[#1b1c1c] text-sm tracking-widest uppercase"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                >
                  Horario de atención
                </span>
                <span
                  className="text-[#5f5e5e] text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Lunes a Viernes: 08:00 - 18:00
                </span>
              </div>
            </div>

            {/* Emergency Support */}
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 flex-shrink-0 mt-1">
                <Zap className="w-5 h-5 text-[#EEA906]" fill="#EEA906" />
              </div>
              <div className="flex flex-col gap-3">
                <span
                  className="text-[#1b1c1c] text-sm tracking-widest uppercase"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                >
                  Soporte urgente
                </span>
                <a
                  href="https://wa.me/56933836531"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 hover:bg-[#20BA5A] transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5" fill="white" />
                  <span
                    className="text-base"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                  >
                    Escribir por WhatsApp
                  </span>
                </a>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="mt-6 p-6 bg-[#f6f3f2] border border-[#e6e6e6]">
              <h3
                className="text-[#1b1c1c] text-lg mb-4"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                }}
              >
                Canales de contacto
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#EEA906] flex-shrink-0" />
                  <a
                    href="tel:+56933836531"
                    className="text-[#44474c] text-sm hover:text-[#EEA906] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    +56 9 3383 6531
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#EEA906] flex-shrink-0" />
                  <a
                    href="mailto:contacto@electricompany.cl"
                    className="text-[#44474c] text-sm hover:text-[#EEA906] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    contacto@electricompany.cl
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-[#f6f3f2] border border-[#e6e6e6] p-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="nombre"
                  className="text-[#5f5e5e] text-[10px] tracking-widest uppercase"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ingresa tu nombre"
                  required
                  className="bg-white border-b-2 border-[rgba(196,198,205,0.3)] px-0 py-3 text-sm text-[#1b1c1c] placeholder:text-[#6b7280] focus:outline-none focus:border-[#EEA906] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              {/* Company */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="empresa"
                  className="text-[#5f5e5e] text-[10px] tracking-widest uppercase"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder="Nombre de tu empresa"
                  required
                  className="bg-white border-b-2 border-[rgba(196,198,205,0.3)] px-0 py-3 text-sm text-[#1b1c1c] placeholder:text-[#6b7280] focus:outline-none focus:border-[#EEA906] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-[#5f5e5e] text-[10px] tracking-widest uppercase"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tucorreo@empresa.cl"
                  required
                  className="bg-white border-b-2 border-[rgba(196,198,205,0.3)] px-0 py-3 text-sm text-[#1b1c1c] placeholder:text-[#6b7280] focus:outline-none focus:border-[#EEA906] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="telefono"
                  className="text-[#5f5e5e] text-[10px] tracking-widest uppercase"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                >
                  Teléfono <span className="normal-case font-normal">(opcional)</span>
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="+56 9 XXXX XXXX"
                  className="bg-white border-b-2 border-[rgba(196,198,205,0.3)] px-0 py-3 text-sm text-[#1b1c1c] placeholder:text-[#6b7280] focus:outline-none focus:border-[#EEA906] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="mensaje"
                  className="text-[#5f5e5e] text-[10px] tracking-widest uppercase"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                >
                  Mensaje / Descripción del proyecto
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos brevemente qué necesitas"
                  required
                  rows={5}
                  className="bg-white border-b-2 border-[rgba(196,198,205,0.3)] px-0 py-3 text-sm text-[#1b1c1c] placeholder:text-[#6b7280] focus:outline-none focus:border-[#EEA906] transition-colors resize-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitStatus === "sending"}
                className="bg-[#041627] text-white py-4 text-sm tracking-widest uppercase hover:bg-[#0a2942] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
              >
                {submitStatus === "sending" ? "Enviando…" : "Enviar solicitud de cotización"}
              </button>
              {submitMessage ? (
                <p
                  role="status"
                  className={
                    submitStatus === "success"
                      ? "text-sm text-[#166534]"
                      : "text-sm text-[#b91c1c]"
                  }
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {submitMessage}
                </p>
              ) : null}
              <p className="text-xs text-[#6b7280]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Los datos se envían a{" "}
                <a href={`mailto:${CONTACT_FORM_EMAIL}`} className="text-[#EEA906] hover:underline">
                  {CONTACT_FORM_EMAIL}
                </a>
                . La primera vez puede llegar un correo de activación a esa bandeja; debe
                confirmarse una sola vez.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA SECTION ───────────────────────────────────────────────────── */
function ContactoCta() {
  return (
    <section className="bg-[#e6e6e6] py-16 px-6 md:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="text-[#1b1c1c] mb-4"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            fontWeight: 700,
            letterSpacing: "-1px",
          }}
        >
          ¿Tienes una <span className="text-[#EEA906]">emergencia eléctrica?</span>
        </h2>
        <p
          className="text-[#44474c] text-base mb-8"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Nuestro equipo técnico está disponible 24/7 para atender emergencias
          eléctricas industriales en Antofagasta y la región.
        </p>
        <a
          href="tel:+56933836531"
          className="inline-flex items-center gap-3 bg-[#EEA906] text-white px-8 py-4 text-sm tracking-widest uppercase font-bold shadow-[0px_1px_8px_rgba(238,194,9,0.9)] hover:bg-[#d4960a] transition-colors duration-200"
        >
          <svg className="w-4 h-5 flex-shrink-0" fill="none" viewBox="0 0 20 25">
            <path d={svgPaths.p17359280} fill="white" />
          </svg>
          Llamar ahora: +56 9 3383 6531
        </a>
      </div>
    </section>
  );
}

/* ─── PAGE EXPORT ───────────────────────────────────────────────────── */
export function ContactoPage() {
  return (
    <>
      <ContactoHero />
      <ContactoMain />
      <ContactoCta />
    </>
  );
}
