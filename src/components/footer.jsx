import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { GiCoffeePot } from "react-icons/gi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-r from-[#071027]/90 via-[#081827]/70 to-[#02101a]/90 backdrop-blur-md border-t border-white/5 shadow-lg mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 grid gap-10 md:grid-cols-3">
        {/* Branding */}
        <div>
          <div className="flex items-center gap-3">
            <GiCoffeePot className="text-cyan-400 text-2xl" />
            <div className="flex flex-col leading-tight">
              <span className="text-white font-semibold text-lg">Coffee</span>
              <span className="text-xs text-slate-400">Tech • Fast • Reliable</span>
            </div>
          </div>
          <p className="mt-3 text-slate-400 text-sm leading-relaxed max-w-xs">
            Mais do que café, uma experiência feita para energizar criativos, programadores e apaixonados pela vida.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h4 className="text-white font-semibold text-lg">Navegação</h4>
          <ul className="mt-4 space-y-3">
            {["Início", "Delivery", "Custos", "Serviços", "Contatos"].map(
              (item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="group relative inline-block text-slate-200/90 text-sm font-medium px-1 py-0.5 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400/40 transition"
                  >
                    {item}
                    {/* underline animada igual ao header */}
                    <span className="block h-0.5 rounded mt-1 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 w-0 group-hover:w-full" />
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contato & Social */}
        <div>
          <h4 className="text-white font-semibold text-lg">Contato</h4>
          <p className="mt-4 text-slate-400 text-sm">contato@coffee.com</p>
          <p className="text-slate-400 text-sm">+55 (34) 99254-0828</p>

          <div className="flex gap-5 mt-6">
            <a
              href="https://github.com/wesley-silv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200/90 hover:text-cyan-400 transition text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/wesleysilv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200/90 hover:text-cyan-400 transition text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200/90 hover:text-cyan-400 transition text-xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5 py-4 text-center text-white text-sm">
        © {year} Coffee. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;