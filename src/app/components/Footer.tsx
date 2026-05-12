import { Link } from "react-router";
import { Zap, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logoImg from "../../imports/logo_electric_company.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks: { label: string; to?: string; href?: string }[] = [
    { label: "Inicio", to: "/" },
    { label: "Nosotros", to: "/nosotros" },
    { label: "Servicios", to: "/servicios" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
    { label: "WhatsApp", href: "https://wa.me/56933836531" },
  ];

  const certs = ["SEC", "ISO 9001", "OHSAS 18001", "Nch 4/2003"];

  return (
    <footer className="bg-[#041627] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <Link to="/">
            <img
              src={logoImg}
              alt="Electric Company SpA"
              className="h-16 w-auto object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>

          <p className="text-[#8192a7] text-sm leading-relaxed max-w-xs">
            Especialistas en servicios eléctricos industriales en Antofagasta,
            Chile. Seguridad, calidad e innovación en cada proyecto.
          </p>

          <div className="flex flex-col gap-2">
            <a
              href="tel:+56933836531"
              className="flex items-center gap-2 text-[#8192a7] hover:text-[#EEA906] text-sm transition-colors duration-200"
            >
              <Phone className="w-4 h-4 text-[#EEA906]" />
              +56 9 3383 6531
            </a>
            <a
              href="mailto:contacto@electriccompany.cl"
              className="flex items-center gap-2 text-[#8192a7] hover:text-[#EEA906] text-sm transition-colors duration-200"
            >
              <Mail className="w-4 h-4 text-[#EEA906]" />
              contacto@electriccompany.cl
            </a>
            <div className="flex items-center gap-2 text-[#8192a7] text-sm">
              <MapPin className="w-4 h-4 text-[#EEA906]" />
              Antofagasta, Chile
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-3">
            {[
              { icon: <Facebook className="w-4 h-4" />, href: "#" },
              { icon: <Instagram className="w-4 h-4" />, href: "#" },
              { icon: <Linkedin className="w-4 h-4" />, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-[#8192a7] hover:border-[#EEA906] hover:text-[#EEA906] transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-xs font-bold tracking-widest uppercase border-b border-white/10 pb-3">
            Enlaces Rápidos
          </h4>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              if (link.to) {
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="text-[#8192a7] hover:text-[#EEA906] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#EEA906]/50 group-hover:bg-[#EEA906] transition-colors duration-200" />
                    {link.label}
                  </Link>
                );
              }
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#8192a7] hover:text-[#EEA906] text-sm transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[#EEA906]/50 group-hover:bg-[#EEA906] transition-colors duration-200" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-xs font-bold tracking-widest uppercase border-b border-white/10 pb-3">
            Certificaciones
          </h4>
          <div className="flex flex-wrap gap-2">
            {certs.map((cert) => (
              <span
                key={cert}
                className="border border-white/20 text-[#8192a7] text-xs px-3 py-1.5 font-medium hover:border-[#EEA906] hover:text-[#EEA906] transition-colors duration-200 cursor-default"
              >
                {cert}
              </span>
            ))}
          </div>
          <p className="text-[#8192a7] text-xs leading-relaxed mt-2">
            Nuestros técnicos cuentan con habilitación SEC y formación continua
            en los más altos estándares de la industria eléctrica industrial.
          </p>

          {/* CTA */}
          <a
            href="https://wa.me/56933836531"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto flex items-center justify-center gap-2 bg-[#EEA906] text-white px-6 py-3 text-xs tracking-widest uppercase font-bold hover:bg-[#d4960a] transition-colors duration-200"
          >
            <Zap className="w-4 h-4" fill="white" />
            Cotizar ahora
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="text-[#8192a7] text-xs">
            © {currentYear} Electric Company SpA. Todos los derechos reservados.
          </span>
          <span className="text-[#8192a7] text-xs">
            Antofagasta, Chile · Servicios Eléctricos Industriales
          </span>
        </div>
      </div>
    </footer>
  );
}