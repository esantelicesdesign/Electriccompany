import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Link, useLocation } from "react-router";
import logoImg from "../../imports/logo_electric_company.png";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isServicesPage = location.pathname === "/servicios";
  const isHomePage = location.pathname === "/";
  const isNosotrosPage = location.pathname === "/nosotros";
  const isProyectosPage = location.pathname === "/proyectos";

  const navLinks: { label: string; to?: string; href?: string; isRoute?: boolean }[] = [
    { label: "Inicio", to: "/", isRoute: true },
    { label: "Nosotros", to: "/nosotros", isRoute: true },
    { label: "Servicios", to: "/servicios", isRoute: true },
    { label: "Proyectos", to: "/proyectos", isRoute: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top info bar */}
      <div className="bg-[#EEA906] px-4 md:px-8 py-1.5 flex items-center justify-between">
        <span className="text-white text-xs tracking-widest uppercase font-medium">
          Antofagasta, Chile.
        </span>
        <span className="text-white text-xs tracking-widest uppercase font-medium hidden md:block">
          +56 9 3383 6531
        </span>
        <span className="text-white text-xs tracking-widest uppercase font-medium hidden md:block">
          contacto@electriccompany.cl
        </span>
      </div>

      {/* Main nav */}
      <nav
        className={`transition-all duration-300 ${ scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/90 backdrop-blur-md" } bg-[#ffffffd9]`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between py-4 mx-[127px] my-[0px]">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src={logoImg}
              alt="Electric Company SpA"
              className="h-16 w-auto object-contain m-[0px]"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                (link.isRoute && link.to === location.pathname) ||
                (link.label === "Servicios" && isServicesPage) ||
                (link.label === "Nosotros" && isNosotrosPage) ||
                (link.label === "Proyectos" && isProyectosPage) ||
                (link.label === "Inicio" && isHomePage && link.to === "/");

              if (link.isRoute && link.to) {
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    className={`text-sm tracking-widest uppercase transition-colors duration-200 relative group pb-0.5 ${
                      isActive
                        ? "text-[#EEA906] border-b border-[#EEA906]"
                        : "text-[#475569] hover:text-[#EEA906]"
                    }`}
                  >
                    {link.label}
                    {!isActive && (
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#EEA906] transition-all duration-200 group-hover:w-full" />
                    )}
                  </Link>
                );
              }
              return (
                null
              );
            })}
          </div>

          {/* CTA button */}
          <Link
            to="/contacto"
            className="hidden lg:flex items-center gap-2 bg-[#EEA906] text-white px-5 py-2.5 text-sm tracking-widest uppercase font-semibold hover:bg-[#d4960a] transition-colors duration-200 shadow-[0_1px_8px_rgba(238,169,6,0.6)]"
          >
            <Zap className="w-4 h-4" fill="white" />
            Contáctanos
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-[#041627] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = link.isRoute && link.to === location.pathname;
              if (link.isRoute && link.to) {
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    className={`text-sm tracking-widest uppercase font-medium py-3 border-b border-gray-50 ${
                      isActive ? "text-[#EEA906]" : "text-[#475569]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#475569] text-sm tracking-widest uppercase hover:text-[#EEA906] transition-colors font-medium py-3 border-b border-gray-50"
                >
                  {link.label}
                </a>
              );
            })}
            <Link
              to="/contacto"
              className="flex items-center justify-center gap-2 bg-[#EEA906] text-white px-5 py-3 text-sm tracking-widest uppercase font-semibold mt-2"
            >
              <Zap className="w-4 h-4" fill="white" />
              Contáctanos
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}