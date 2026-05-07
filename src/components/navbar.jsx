import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Historia", href: "#historia" },
  { label: "La carta", href: "#menu" },
  { label: "Galería", href: "#galeria" },
  { label: "Reservas", href: "#reservas" },
  { label: "Ubicación", href: "#ubicacion" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10,10,10,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid #2A2015" : "none",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-serif text-xl font-bold tracking-widest"
          style={{ color: "#C9A84C" }}
        >
          Don Pedro
        </button>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-xs tracking-widest uppercase transition-colors"
              style={{ color: "#6B5D50" }}
              onMouseEnter={(e) => (e.target.style.color = "#C9A84C")}
              onMouseLeave={(e) => (e.target.style.color = "#6B5D50")}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#reservas")}
            className="text-xs tracking-widest uppercase px-6 py-2 transition-colors"
            style={{ border: "1px solid #C9A84C", color: "#C9A84C" }}
            onMouseEnter={(e) => {
              e.target.style.background = "#C9A84C";
              e.target.style.color = "#0A0A0A";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#C9A84C";
            }}
          >
            Reservar
          </button>
        </div>

        {/* Hamburguesa mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className="block w-6 h-px transition-all"
            style={{
              background: "#C9A84C",
              transform: menuOpen
                ? "rotate(45deg) translate(4px, 4px)"
                : "none",
            }}
          />
          <span
            className="block w-6 h-px transition-all"
            style={{ background: "#C9A84C", opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-px transition-all"
            style={{
              background: "#C9A84C",
              transform: menuOpen
                ? "rotate(-45deg) translate(4px, -4px)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* Menú mobile */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{
            background: "rgba(10,10,10,0.97)",
            borderBottom: "1px solid #2A2015",
          }}
        >
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-xs tracking-widest uppercase text-left py-2"
              style={{ color: "#6B5D50", borderBottom: "1px solid #2A2015" }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#reservas")}
            className="text-xs tracking-widest uppercase py-3 mt-2 transition-colors"
            style={{ background: "#C9A84C", color: "#0A0A0A" }}
          >
            Reservar mesa
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
