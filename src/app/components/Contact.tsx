import { useState } from "react";
import { Zap, Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#EEA906] text-xs tracking-[3px] uppercase font-bold block mb-2">
            Contáctenos
          </span>
          <h2
            className="text-[#1b1c1c]"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-1.5px",
              lineHeight: 1,
            }}
          >
            Solicite su Cotización
          </h2>
          <p className="text-[#475569] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Cuéntenos su proyecto y uno de nuestros ingenieros se pondrá en
            contacto con usted en menos de 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: <Phone className="w-5 h-5 text-[#EEA906]" />,
                  label: "Teléfono",
                  value: "+56 9 3383 6531",
                  href: "tel:+56933836531",
                },
                {
                  icon: <Mail className="w-5 h-5 text-[#EEA906]" />,
                  label: "Correo electrónico",
                  value: "contacto@electricompany.cl",
                  href: "mailto:contacto@electricompany.cl",
                },
                {
                  icon: <MapPin className="w-5 h-5 text-[#EEA906]" />,
                  label: "Ubicación",
                  value: "Antofagasta, Chile",
                  href: "#",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#EEA906]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#EEA906] transition-colors duration-200">
                    <span className="group-hover:text-white transition-colors duration-200">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <div className="text-[#1b1c1c] text-xs font-bold tracking-widest uppercase mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-[#475569] text-sm">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/56933836531?text=Hola,%20necesito%20una%20cotización%20de%20servicios%20eléctricos%20industriales."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 text-sm tracking-widest uppercase font-bold hover:bg-[#1daa52] transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5" fill="white" />
              Escribir por WhatsApp
            </a>

            {/* Decorative box */}
            <div className="bg-[#041627] p-8 relative overflow-hidden">
              <div className="absolute right-4 bottom-0 opacity-10 pointer-events-none">
                <svg viewBox="0 0 200 400" className="h-40 text-[#EEA906]" fill="currentColor">
                  <polygon points="120,0 50,200 110,200 80,400 170,150 110,150 150,0" />
                </svg>
              </div>
              <div className="relative z-10 flex flex-col gap-3">
                <Zap className="w-8 h-8 text-[#EEA906]" fill="#EEA906" />
                <h4
                  className="text-white"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                  }}
                >
                  Respuesta garantizada en 24 horas
                </h4>
                <p className="text-[#8192a7] text-sm leading-relaxed">
                  Soporte técnico local en Antofagasta. Atendemos emergencias
                  eléctricas críticas con prioridad máxima.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 bg-[#f8f9fa] border border-[#e6e6e6] p-12 text-center">
                <div className="w-16 h-16 bg-[#EEA906] flex items-center justify-center">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-[#1b1c1c]"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                  }}
                >
                  ¡Mensaje enviado!
                </h3>
                <p className="text-[#475569] text-sm">
                  Nos comunicaremos con usted a la brevedad.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 bg-[#f8f9fa] border border-[#e6e6e6] p-8"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#1b1c1c] text-xs font-bold tracking-widest uppercase">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Juan Pérez"
                      className="bg-white border border-[#e6e6e6] px-4 py-3 text-sm text-[#1b1c1c] focus:outline-none focus:border-[#EEA906] transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#1b1c1c] text-xs font-bold tracking-widest uppercase">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Empresa S.A."
                      className="bg-white border border-[#e6e6e6] px-4 py-3 text-sm text-[#1b1c1c] focus:outline-none focus:border-[#EEA906] transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[#1b1c1c] text-xs font-bold tracking-widest uppercase">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="email@empresa.cl"
                    className="bg-white border border-[#e6e6e6] px-4 py-3 text-sm text-[#1b1c1c] focus:outline-none focus:border-[#EEA906] transition-colors duration-200"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[#1b1c1c] text-xs font-bold tracking-widest uppercase">
                    Describa su proyecto *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Cuéntenos sobre su proyecto, ubicación y requerimientos específicos..."
                    className="bg-white border border-[#e6e6e6] px-4 py-3 text-sm text-[#1b1c1c] focus:outline-none focus:border-[#EEA906] transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-[#EEA906] text-white px-8 py-4 text-sm tracking-widest uppercase font-bold hover:bg-[#d4960a] transition-colors duration-200 mt-2 shadow-[0_2px_12px_rgba(238,169,6,0.4)]"
                >
                  <Send className="w-4 h-4" />
                  Enviar solicitud
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
