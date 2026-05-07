import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function Historia() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="historia"
      ref={ref}
      className="py-28 px-6"
      style={{ background: "#0F0C07" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800"
            alt="El restaurante"
            className="w-full h-96 lg:h-[520px] object-cover"
          />
          <div
            className="absolute -bottom-6 -right-6 px-8 py-6 text-center"
            style={{ background: "#C9A84C", color: "#0A0A0A" }}
          >
            <p className="font-serif text-4xl font-bold">37</p>
            <p className="text-xs tracking-widest uppercase mt-1">
              Años de historia
            </p>
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div
            className="mb-6"
            style={{ width: 40, height: 1, background: "#C9A84C" }}
          />
          <p
            className="text-xs tracking-[.3em] uppercase mb-4"
            style={{ color: "#C9A84C" }}
          >
            Nuestra historia
          </p>
          <h2
            className="font-serif text-4xl lg:text-5xl font-bold mb-8 leading-tight"
            style={{ color: "#F5F0E8" }}
          >
            Una mesa para toda la vida
          </h2>
          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: "#B8A99A" }}
          >
            Don Pedro nació en 1987 de las manos de Pedro Almada, un cocinero
            tucumano que llegó a Buenos Aires con una valija llena de recetas
            familiares y el sueño de recrear la cocina de su abuela en la
            ciudad.
          </p>
          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: "#B8A99A" }}
          >
            Lo que empezó como un pequeño local de ocho mesas en Palermo se
            convirtió en uno de los bodegones más queridos de Buenos Aires. Hoy,
            la tercera generación de la familia Almada sigue cocinando con el
            mismo fuego lento y la misma pasión de siempre.
          </p>
          <p
            className="text-sm leading-relaxed mb-10"
            style={{ color: "#B8A99A" }}
          >
            Cada plato cuenta una historia. Cada visita, un recuerdo.
          </p>

          <div
            className="grid grid-cols-3 gap-6 pt-8"
            style={{ borderTop: "1px solid #2A2015" }}
          >
            {[
              { num: "+12.000", label: "Comensales por año" },
              { num: "4.9★", label: "Puntuación promedio" },
              { num: "100%", label: "Ingredientes locales" },
            ].map(({ num, label }) => (
              <div key={label}>
                <p
                  className="font-serif text-2xl font-bold mb-1"
                  style={{ color: "#C9A84C" }}
                >
                  {num}
                </p>
                <p className="text-xs" style={{ color: "#6B5D50" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Historia;
