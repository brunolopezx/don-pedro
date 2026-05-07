import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const resenas = [
  {
    id: 1,
    nombre: "Martina López",
    texto:
      "El mejor bife de chorizo que comí en mi vida. El ambiente te transporta a otro tiempo, con esa luz cálida y la música de fondo. Volvería mil veces.",
    estrellas: 5,
    fecha: "Marzo 2025",
    iniciales: "ML",
  },
  {
    id: 2,
    nombre: "Carlos Benítez",
    texto:
      "Fuimos a festejar el cumpleaños de mi viejo y fue una experiencia increíble. El servicio impecable, la comida abundante y sabrosa. Don Pedro es un clásico que no falla.",
    estrellas: 5,
    fecha: "Febrero 2025",
    iniciales: "CB",
  },
  {
    id: 3,
    nombre: "Sofía Ramírez",
    texto:
      "Las empanadas son caseras de verdad, se nota. El provolone a la parrilla para empezar y el asado de tira para el principal. No le pidas más a la vida.",
    estrellas: 5,
    fecha: "Enero 2025",
    iniciales: "SR",
  },
  {
    id: 4,
    nombre: "Diego Ferreyra",
    texto:
      "Ambiente auténtico, precios razonables y porciones generosas. El vino de la casa acompaña perfecto. Un bodegón como los de antes, difícil de encontrar hoy en día.",
    estrellas: 5,
    fecha: "Diciembre 2024",
    iniciales: "DF",
  },
];

function Estrellas() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} style={{ color: "#C9A84C", fontSize: 14 }}>
          ★
        </span>
      ))}
    </div>
  );
}

function Resenas() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % resenas.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="resenas"
      className="py-28 px-6"
      style={{ background: "#0F0C07" }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div
            className="mx-auto mb-6"
            style={{ width: 40, height: 1, background: "#C9A84C" }}
          />
          <p
            className="text-xs tracking-[.3em] uppercase mb-4"
            style={{ color: "#C9A84C" }}
          >
            Lo que dicen nuestros comensales
          </p>
          <h2
            className="font-serif text-5xl font-bold"
            style={{ color: "#F5F0E8" }}
          >
            Reseñas
          </h2>
        </div>

        {/* Carrusel */}
        <div className="relative" style={{ minHeight: 220 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center px-6"
            >
              <Estrellas />
              <p
                className="font-serif text-xl italic leading-relaxed mb-8"
                style={{ color: "#F5F0E8" }}
              >
                "{resenas[active].texto}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: "#C9A84C", color: "#0A0A0A" }}
                >
                  {resenas[active].iniciales}
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold" style={{ color: "#F5F0E8" }}>
                    {resenas[active].nombre}
                  </p>
                  <p className="text-xs" style={{ color: "#6B5D50" }}>
                    {resenas[active].fecha}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-10">
          {resenas.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-300"
              style={{
                width: active === i ? 24 : 8,
                height: 2,
                background: active === i ? "#C9A84C" : "#2A2015",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resenas;
