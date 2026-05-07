import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useForm } from "react-hook-form";

function Reservas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const today = new Date().toISOString().split("T")[0];

  const onSubmit = (data) => {
    setSuccess(true);
  };

  if (success)
    return (
      <section
        id="reservas"
        className="py-28 px-6"
        style={{ background: "#0F0C07" }}
      >
        <div className="max-w-xl mx-auto text-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-8"
            style={{ background: "#C9A84C", color: "#0A0A0A" }}
          >
            ✓
          </div>
          <h2
            className="font-serif text-4xl font-bold mb-4"
            style={{ color: "#F5F0E8" }}
          >
            ¡Reserva confirmada!
          </h2>
          <p className="text-sm mb-2" style={{ color: "#B8A99A" }}>
            Gracias por elegir Don Pedro.
          </p>
          <p className="text-sm mb-10" style={{ color: "#6B5D50" }}>
            Te esperamos con una mesa lista y la parrilla encendida.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="text-xs tracking-widest uppercase px-10 py-4 transition-colors"
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
            Hacer otra reserva
          </button>
        </div>
      </section>
    );

  return (
    <section
      id="reservas"
      ref={ref}
      className="py-28 px-6"
      style={{ background: "#0F0C07" }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Texto izquierda */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <div
            className="mb-6"
            style={{ width: 40, height: 1, background: "#C9A84C" }}
          />
          <p
            className="text-xs tracking-[.3em] uppercase mb-4"
            style={{ color: "#C9A84C" }}
          >
            Reservas
          </p>
          <h2
            className="font-serif text-5xl font-bold mb-8 leading-tight"
            style={{ color: "#F5F0E8" }}
          >
            Reservá tu mesa
          </h2>
          <p
            className="text-sm leading-relaxed mb-10"
            style={{ color: "#B8A99A" }}
          >
            Asegurate un lugar en nuestro salón. Aceptamos reservas con hasta 30
            días de anticipación para grupos de hasta 20 personas.
          </p>

          <div className="flex flex-col gap-4">
            {[
              { icon: "◎", text: "Lunes a viernes: 12hs a 15hs y 20hs a 24hs" },
              {
                icon: "◎",
                text: "Sábados y domingos: 12hs a 16hs y 20hs a 01hs",
              },
              { icon: "◎", text: "Grupos grandes: consultanos por WhatsApp" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex gap-3 items-start">
                <span className="text-xs mt-0.5" style={{ color: "#C9A84C" }}>
                  {icon}
                </span>
                <p className="text-xs" style={{ color: "#6B5D50" }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            {/* Nombre */}
            <div>
              <label
                className="text-xs uppercase tracking-widest block mb-2"
                style={{ color: "#6B5D50" }}
              >
                Nombre completo
              </label>
              <input
                {...register("nombre", { required: "Requerido" })}
                placeholder="Juan García"
                className="w-full px-4 py-3 text-sm outline-none transition-colors"
                style={{
                  background: "#1A1208",
                  border: errors.nombre
                    ? "1px solid #8B1A1A"
                    : "1px solid #2A2015",
                  color: "#F5F0E8",
                }}
              />
              {errors.nombre && (
                <p className="text-xs mt-1" style={{ color: "#8B1A1A" }}>
                  {errors.nombre.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                className="text-xs uppercase tracking-widest block mb-2"
                style={{ color: "#6B5D50" }}
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: "Requerido",
                  pattern: { value: /\S+@\S+\.\S+/, message: "Email inválido" },
                })}
                placeholder="juan@email.com"
                className="w-full px-4 py-3 text-sm outline-none"
                style={{
                  background: "#1A1208",
                  border: errors.email
                    ? "1px solid #8B1A1A"
                    : "1px solid #2A2015",
                  color: "#F5F0E8",
                }}
              />
              {errors.email && (
                <p className="text-xs mt-1" style={{ color: "#8B1A1A" }}>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Fecha y hora */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  className="text-xs uppercase tracking-widest block mb-2"
                  style={{ color: "#6B5D50" }}
                >
                  Fecha
                </label>
                <input
                  type="date"
                  min={today}
                  {...register("fecha", { required: "Requerido" })}
                  className="w-full px-4 py-3 text-sm outline-none"
                  style={{
                    background: "#1A1208",
                    border: errors.fecha
                      ? "1px solid #8B1A1A"
                      : "1px solid #2A2015",
                    color: "#F5F0E8",
                    colorScheme: "dark",
                  }}
                />
                {errors.fecha && (
                  <p className="text-xs mt-1" style={{ color: "#8B1A1A" }}>
                    {errors.fecha.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  className="text-xs uppercase tracking-widest block mb-2"
                  style={{ color: "#6B5D50" }}
                >
                  Hora
                </label>
                <select
                  {...register("hora", { required: "Requerido" })}
                  className="w-full px-4 py-3 text-sm outline-none"
                  style={{
                    background: "#1A1208",
                    border: errors.hora
                      ? "1px solid #8B1A1A"
                      : "1px solid #2A2015",
                    color: "#F5F0E8",
                  }}
                >
                  <option value="">Elegir</option>
                  {[
                    "12:00",
                    "12:30",
                    "13:00",
                    "13:30",
                    "14:00",
                    "14:30",
                    "15:00",
                    "20:00",
                    "20:30",
                    "21:00",
                    "21:30",
                    "22:00",
                    "22:30",
                    "23:00",
                  ].map((h) => (
                    <option key={h} value={h}>
                      {h}hs
                    </option>
                  ))}
                </select>
                {errors.hora && (
                  <p className="text-xs mt-1" style={{ color: "#8B1A1A" }}>
                    {errors.hora.message}
                  </p>
                )}
              </div>
            </div>

            {/* Personas */}
            <div>
              <label
                className="text-xs uppercase tracking-widest block mb-2"
                style={{ color: "#6B5D50" }}
              >
                Cantidad de personas
              </label>
              <select
                {...register("personas", { required: "Requerido" })}
                className="w-full px-4 py-3 text-sm outline-none"
                style={{
                  background: "#1A1208",
                  border: errors.personas
                    ? "1px solid #8B1A1A"
                    : "1px solid #2A2015",
                  color: "#F5F0E8",
                }}
              >
                <option value="">Seleccioná</option>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "persona" : "personas"}
                  </option>
                ))}
                <option value="más de 10">Más de 10 personas</option>
              </select>
              {errors.personas && (
                <p className="text-xs mt-1" style={{ color: "#8B1A1A" }}>
                  {errors.personas.message}
                </p>
              )}
            </div>

            {/* Mensaje */}
            <div>
              <label
                className="text-xs uppercase tracking-widest block mb-2"
                style={{ color: "#6B5D50" }}
              >
                Mensaje opcional
              </label>
              <textarea
                {...register("mensaje")}
                placeholder="Alguna preferencia especial, alergias o celebración..."
                rows={3}
                className="w-full px-4 py-3 text-sm outline-none resize-none"
                style={{
                  background: "#1A1208",
                  border: "1px solid #2A2015",
                  color: "#F5F0E8",
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 text-xs tracking-widest uppercase mt-2 transition-colors"
              style={{ background: "#C9A84C", color: "#0A0A0A" }}
              onMouseEnter={(e) => (e.target.style.background = "#B8973B")}
              onMouseLeave={(e) => (e.target.style.background = "#C9A84C")}
            >
              Confirmar reserva
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Reservas;
