import { motion } from "framer-motion";

function Hero() {
  const scrollToReservas = () => {
    document.getElementById("reservas")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <img
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600"
        alt="Don Pedro"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay oscuro */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 text-center px-6">
        {/* Línea decorativa */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mx-auto mb-6"
          style={{ width: 60, height: 1, background: "#C9A84C" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xs tracking-[.4em] uppercase mb-4"
          style={{ color: "#C9A84C" }}
        >
          Desde 1987 · Palermo, Buenos Aires
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-serif text-7xl md:text-8xl font-bold mb-2"
          style={{ color: "#F5F0E8" }}
        >
          Don Pedro
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-serif text-xl italic mb-10"
          style={{ color: "#C9A84C" }}
        >
          Bodegón Porteño
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToReservas}
            className="px-10 py-4 text-xs tracking-widest uppercase transition-colors"
            style={{ background: "#C9A84C", color: "#0A0A0A" }}
            onMouseEnter={(e) => (e.target.style.background = "#B8973B")}
            onMouseLeave={(e) => (e.target.style.background = "#C9A84C")}
          >
            Reservar mesa
          </button>
          <button
            onClick={scrollToMenu}
            className="px-10 py-4 text-xs tracking-widest uppercase transition-colors"
            style={{
              border: "1px solid #C9A84C",
              color: "#C9A84C",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#C9A84C";
              e.target.style.color = "#0A0A0A";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#C9A84C";
            }}
          >
            Ver la carta
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p
          className="text-xs tracking-widest uppercase"
          style={{ color: "#C9A84C" }}
        >
          Scroll
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ width: 1, height: 40, background: "#C9A84C" }}
        />
      </motion.div>
    </section>
  );
}

export default Hero;
