import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const fotos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    label: "El salón",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800",
    label: "Asado de tira",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    label: "La parrilla",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1558030006-450675393462?w=800",
    label: "Bife de chorizo",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800",
    label: "Ambiente",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800",
    label: "Vinos de la casa",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800",
    label: "Postres",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
    label: "Tabla de fiambres",
  },
];

function Galeria() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="galeria"
      ref={ref}
      className="py-28 px-6"
      style={{ background: "#0A0A0A" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div
            className="mx-auto mb-6"
            style={{ width: 40, height: 1, background: "#C9A84C" }}
          />
          <p
            className="text-xs tracking-[.3em] uppercase mb-4"
            style={{ color: "#C9A84C" }}
          >
            Galería
          </p>
          <h2
            className="font-serif text-5xl font-bold"
            style={{ color: "#F5F0E8" }}
          >
            El alma del lugar
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {fotos.map((foto, i) => (
            <motion.div
              key={foto.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className={`relative overflow-hidden cursor-pointer group ${
                i === 0 || i === 6 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{ aspectRatio: i === 0 || i === 6 ? "1" : "3/4" }}
              onClick={() => setSelected(foto)}
            >
              <img
                src={foto.src}
                alt={foto.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)",
                }}
              >
                <p
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "#C9A84C" }}
                >
                  {foto.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: "rgba(0,0,0,0.95)" }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selected.src}
              alt={selected.label}
              className="max-w-4xl max-h-[85vh] w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-2xl transition-colors"
              style={{ color: "#C9A84C" }}
            >
              ✕
            </button>
            <p
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-widest uppercase"
              style={{ color: "#C9A84C" }}
            >
              {selected.label}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Galeria;
