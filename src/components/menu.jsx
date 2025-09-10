// Menu.jsx
import {
  SiCoffeescript,
  SiBuymeacoffee,
} from "react-icons/si";
import {
  GiCoffeeMug,
  GiCoffeeCup,
  GiCoffeeBeans,
  GiCoffeePot,
} from "react-icons/gi";
import { FaCoffee 
} from "react-icons/fa";
import {
  BiSolidCoffeeBean,
  BiSolidCoffeeTogo,
} from "react-icons/bi";
import { motion } from "framer-motion";

const offers = [
  {
    icon: SiCoffeescript,
    title: "Script Coffee",
    desc: "Um sabor exclusivo que mistura tradição e inovação, perfeito para programadores e criativos.",
  },
  {
    icon: SiBuymeacoffee,
    title: "Buy Me a Coffee",
    desc: "O café mais compartilhado da casa, pensado para quem gosta de encontros rápidos e produtivos.",
  },
  {
    icon: GiCoffeeMug,
    title: "Mug Experience",
    desc: "Uma experiência intensa em cada gole, feita para energizar o seu dia.",
  },
  {
    icon: GiCoffeeCup,
    title: "Cup Classic",
    desc: "O clássico indispensável, equilibrado e reconfortante.",
  },
  {
    icon: GiCoffeeBeans,
    title: "Premium Beans",
    desc: "Grãos selecionados de alta qualidade, torrados artesanalmente.",
  },
  {
    icon: BiSolidCoffeeTogo,
    title: "Coffee To Go",
    desc: "Perfeito para a correria, leve seu café com estilo e energia.",
  },
  {
    icon: BiSolidCoffeeBean,
    title: "Bean Lover",
    desc: "Uma seleção especial para os amantes de café em grãos.",
  },
  {
    icon: GiCoffeePot,
    title: "Brew Master",
    desc: "Café preparado lentamente na tradicional cafeteira, com aroma envolvente e sabor marcante.",
  },
  {
    icon: FaCoffee,
    title: "Morning Boost",
    desc: "O despertar perfeito: forte, encorpado e feito sob medida para começar bem o dia.",
  },
];

const Menu = () => {
  return (
    <div className="relative top-20 px-6 py-16 max-w-7xl mx-auto">
      {/* título */}
      <h2 className="text-4xl md:text-5xl text-center font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text drop-shadow-lg">
        Experimente todos os sabores!
      </h2>
      <p className="text-center mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
        Descubra nossas opções exclusivas de café, feitas para energizar e inspirar.
      </p>

      {/* grid responsivo */}
      <section className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {offers.map(({ icon: Icon, title, desc }, i) => (
          <motion.article
            key={i}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="relative flex flex-col items-center p-6 rounded-2xl bg-[#0c1018] border border-white/5 shadow-lg hover:shadow-cyan-500/20 group"
          >
            {/* ícone */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 shadow-md group-hover:scale-110 transition-transform duration-300">
              <Icon className="text-4xl text-white" aria-hidden="true" />
            </div>

            {/* texto */}
            <h3 className="mt-6 text-lg font-semibold text-white">
              {title}
            </h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed text-center">
              {desc}
            </p>

            {/* borda animada */}
            <span className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyan-400/40 transition-colors duration-300" />
          </motion.article>
        ))}
      </section>
    </div>
  );
};

export default Menu;
