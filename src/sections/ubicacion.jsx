import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const horarios = [
  { dia: "Lunes", horas: "12:00 — 15:00 · 20:00 — 24:00" },
  { dia: "Martes", horas: "12:00 — 15:00 · 20:00 — 24:00" },
  { dia: "Miércoles", horas: "12:00 — 15:00 · 20:00 — 24:00" },
  { dia: "Jueves", horas: "12:00 — 15:00 · 20:00 — 24:00" },
  { dia: "Viernes", horas: "12:00 — 15:00 · 20:00 — 01:00" },
  { dia: "Sábado", horas: "12:00 — 16:00 · 20:00 — 01:00" },
  { dia: "Domingo", horas: "12:00 — 16:00 · 20:00 — 24:00" },
];

const today = new Date()
  .toLocaleDateString("es-AR", { weekday: "long" })
  .replace(/^\w/, (c) => c.toUpperCase());

function Ubicacion() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="ubicacion"
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
            Encontranos
          </p>
          <h2
            className="font-serif text-5xl font-bold"
            style={{ color: "#F5F0E8" }}
          >
            Ubicación y horarios
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016880985!2d-58.43280492346658!3d-34.587565858767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb58b4b9b7b1f%3A0x8a7f7e7b7e7b7e7b!2sPalermo%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1620000000000!5m2!1ses!2sar"
              width="100%"
              height="340"
              style={{
                border: "none",
              }}
              allowFullScreen=""
              loading="lazy"
              title="Ubicación Don Pedro"
            />
            <div className="mt-6 flex flex-col gap-3">
              {[
                { icon: "◎", text: "Thames 1234, Palermo, Buenos Aires" },
                { icon: "✆", text: "+54 11 4832-5678" },
                { icon: "✉", text: "reservas@donpedro.com.ar" },
                { icon: "◈", text: "@donpedrobodegon" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex gap-3 items-center">
                  <span className="text-xs" style={{ color: "#C9A84C" }}>
                    {icon}
                  </span>
                  <p className="text-sm" style={{ color: "#B8A99A" }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Horarios */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <p
              className="text-xs uppercase tracking-widest mb-6"
              style={{ color: "#6B5D50" }}
            >
              Horarios de atención
            </p>
            <div className="flex flex-col gap-0">
              {horarios.map(({ dia, horas }) => {
                const isToday = dia === today;
                return (
                  <div
                    key={dia}
                    className="flex justify-between items-center py-4"
                    style={{
                      borderBottom: "1px solid #2A2015",
                      background: isToday
                        ? "rgba(201, 168, 76, 0.05)"
                        : "transparent",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <span
                          className="text-xs px-2 py-0.5 tracking-widest uppercase"
                          style={{ background: "#C9A84C", color: "#0A0A0A" }}
                        >
                          Hoy
                        </span>
                      )}
                      <p
                        className="text-sm"
                        style={{
                          color: isToday ? "#F5F0E8" : "#6B5D50",
                          fontWeight: isToday ? 700 : 400,
                        }}
                      >
                        {dia}
                      </p>
                    </div>
                    <p
                      className="text-sm"
                      style={{ color: isToday ? "#C9A84C" : "#6B5D50" }}
                    >
                      {horas}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Ubicacion;
