import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuData } from "../data/menu";

const tabs = [
  { key: "entradas", label: "Entradas" },
  { key: "principales", label: "Principales" },
  { key: "postres", label: "Postres" },
  { key: "bebidas", label: "Bebidas" },
];

function MenuCard({ item }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="flex gap-4 p-4"
      style={{ background: "#1A1208", border: "1px solid #2A2015" }}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover flex-shrink-0"
      />
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3
            className="font-serif text-lg font-bold mb-1"
            style={{ color: "#F5F0E8" }}
          >
            {item.name}
          </h3>
          <p className="text-xs leading-relaxed" style={{ color: "#6B5D50" }}>
            {item.description}
          </p>
        </div>
        <p className="font-serif text-lg" style={{ color: "#C9A84C" }}>
          ${item.price.toLocaleString("es-AR")}
        </p>
      </div>
    </motion.div>
  );
}

function Menu() {
  const [active, setActive] = useState("entradas");

  return (
    <section id="menu" className="py-28 px-6" style={{ background: "#0A0A0A" }}>
      <div className="max-w-4xl mx-auto">
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
            Lo mejor de la cocina argentina
          </p>
          <h2
            className="font-serif text-5xl font-bold"
            style={{ color: "#F5F0E8" }}
          >
            Nuestra carta
          </h2>
        </div>

        {/* Tabs */}
        <div
          className="flex justify-center gap-0 mb-12 border-b"
          style={{ borderColor: "#2A2015" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className="relative px-8 py-4 text-xs tracking-widest uppercase transition-colors"
              style={{ color: active === tab.key ? "#C9A84C" : "#6B5D50" }}
            >
              {tab.label}
              {active === tab.key && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0"
                  style={{ height: 1, background: "#C9A84C" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {menuData[active].map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Menu;
