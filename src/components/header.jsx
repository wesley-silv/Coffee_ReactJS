// Header.jsx
import { useEffect, useRef, useState } from "react";
import { GiCoffeePot } from "react-icons/gi";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const menuRef = useRef(null);
  const firstMenuItemRef = useRef(null);

  const menu = [
    { label: "Início", href: "#" },
    { label: "Delivery", href: "#" },
    { label: "Custos", href: "#" },
    { label: "Serviços", href: "#" },
    { label: "Contatos", href: "#" },
  ];

  const toggleMenu = () => setIsMenuOpen((s) => !s);

  // Fecha com ESC, detecta clique fora e fecha no resize para desktop
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setIsMenuOpen(false); };
    const onClickOutside = (e) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    const onResize = () => { if (window.innerWidth >= 768) setIsMenuOpen(false); };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    window.addEventListener("resize", onResize);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
      window.removeEventListener("resize", onResize);
    };
  }, [isMenuOpen]);

  // Bloqueia scroll ao abrir menu móvel
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  // Foca o primeiro item do menu móvel quando aberto (pequeno delay para garantir render)
  useEffect(() => {
    if (isMenuOpen) {
      setTimeout(() => firstMenuItemRef.current?.focus(), 60);
    }
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="w-full bg-gradient-to-r from-[#071027]/90 via-[#081827]/70 to-[#02101a]/90 backdrop-blur-md border-b border-white/5 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
          {/* logo / brand */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <GiCoffeePot className="text-cyan-400 text-2xl" />
              <div className="flex flex-col leading-tight">
                
                <span className="text-xs text-slate-400 -mt-1">Tech • Fast • Reliable</span>
              </div>
            </div>
          </div>

          {/* menu desktop */}
          <nav
            className="hidden md:flex items-center gap-6"
            role="navigation"
            aria-label="Menu principal"
          >
            <ul className="flex items-center gap-4">
              {menu.map((item, idx) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setActiveIndex(idx)}
                    className={`group relative inline-block px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400/40 transition`}
                    aria-current={activeIndex === idx ? "page" : undefined}
                  >
                    <span className={`text-sm font-medium ${activeIndex === idx ? "text-white" : "text-slate-200/90"}`}>
                      {item.label}
                    </span>

                    {/* animated underline */}
                    <span
                      className={`block h-0.5 rounded mt-1 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
                        activeIndex === idx ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ações / hamburger */}
          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-600 text-slate-900 font-semibold shadow-md hover:scale-105 transition-transform">
              <FaShoppingCart className="text-base" />
              <span>Pedir Agora</span>
            </button>

            {/* Hamburger (mobile) */}
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="md:hidden p-2 rounded-md hover:bg-white/5 transition"
            >
              {isMenuOpen ? (
                <HiOutlineX className="text-2xl text-white" />
              ) : (
                <HiOutlineMenuAlt3 className="text-2xl text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-over menu + overlay */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`fixed inset-0 z-40 md:hidden pointer-events-none`}
        aria-hidden={!isMenuOpen}
      >
        {/* overlay */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0"}`}
          aria-hidden="true"
        />

        {/* panel */}
        <aside
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-[#071027] text-slate-100 p-6 transform transition-transform duration-300 shadow-xl ${
            isMenuOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu móvel"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <GiCoffeePot className="text-cyan-400 text-2xl" />
              <div>
                <div className="font-semibold text-lg">Coffee</div>
                <div className="text-xs text-slate-400">Tech • Delivery</div>
              </div>
            </div>
            <button onClick={() => setIsMenuOpen(false)} aria-label="Fechar menu" className="p-2 rounded-md hover:bg-white/5">
              <HiOutlineX className="text-2xl" />
            </button>
          </div>

          <nav>
            <ul className="flex flex-col gap-3">
              {menu.map((item, idx) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    ref={idx === 0 ? firstMenuItemRef : null}
                    onClick={() => { setActiveIndex(idx); setIsMenuOpen(false); }}
                    className="block px-4 py-3 rounded-lg text-base font-medium hover:bg-white/5 transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 border-t border-white/5 pt-6">
            <a
              href="#"
              className="block text-center px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-600 text-slate-900 font-semibold shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Pedir Agora
            </a>
            <p className="text-xs text-slate-400 mt-3 text-center">Atendimento 24/7 • Suporte técnico</p>
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Header;
