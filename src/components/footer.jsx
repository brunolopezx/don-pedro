function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#0A0A0A", borderTop: "1px solid #2A2015" }}>
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-3 gap-12">
        {/* Marca */}
        <div>
          <p
            className="font-serif text-2xl font-bold mb-4"
            style={{ color: "#C9A84C" }}
          >
            Don Pedro
          </p>
          <p
            className="text-xs italic font-serif mb-6"
            style={{ color: "#6B5D50" }}
          >
            Bodegón Porteño desde 1987
          </p>
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: "#C9A84C", fontSize: 12 }}>
                ★
              </span>
            ))}
          </div>
          <p className="text-xs leading-relaxed" style={{ color: "#3A3028" }}>
            Thames 1234, Palermo
            <br />
            Buenos Aires, Argentina
          </p>
        </div>

        {/* Links */}
        <div>
          <p
            className="text-xs uppercase tracking-widest mb-6"
            style={{ color: "#3A3028" }}
          >
            Navegación
          </p>
          <div className="flex flex-col gap-3">
            {[
              { label: "Nuestra historia", href: "#historia" },
              { label: "La Carta", href: "#menu" },
              { label: "Galería", href: "#galeria" },
              { label: "Reservas", href: "#reservas" },
              { label: "Ubicación", href: "#ubicacion" },
            ].map(({ label, href }) => (
              <button
                key={label}
                onClick={() => scrollTo(href)}
                className="text-xs text-left transition-colors"
                style={{ color: "#6B5D50" }}
                onMouseEnter={(e) => (e.target.style.color = "#C9A84C")}
                onMouseLeave={(e) => (e.target.style.color = "#6B5D50")}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Contacto */}
        <div>
          <p
            className="text-xs uppercase tracking-widest mb-6"
            style={{ color: "#3A3028" }}
          >
            Contacto
          </p>
          <div className="flex flex-col gap-3 mb-8">
            {[
              { icon: "✆", text: "+54 11 4832-5678" },
              { icon: "✉", text: "reservas@donpedro.com.ar" },
              { icon: "◎", text: "Thames 1234, Palermo, CABA" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex gap-3 items-center">
                <span className="text-xs" style={{ color: "#C9A84C" }}>
                  {icon}
                </span>
                <p className="text-xs" style={{ color: "#6B5D50" }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: "#3A3028" }}
          >
            Redes
          </p>
          <div className="flex gap-4">
            {["Instagram", "Facebook", "TripAdvisor"].map((red) => (
              <button
                key={red}
                className="text-xs transition-colors"
                style={{ color: "#6B5D50" }}
                onMouseEnter={(e) => (e.target.style.color = "#C9A84C")}
                onMouseLeave={(e) => (e.target.style.color = "#6B5D50")}
              >
                {red}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{ borderTop: "1px solid #2A2015" }}
        className="py-6 text-center"
      >
        <p className="text-xs" style={{ color: "#3A3028" }}>
          © 2025 Don Pedro Bodegón Porteño · Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}

export default Footer;
