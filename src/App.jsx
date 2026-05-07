import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Galeria from "./sections/galeria";
import Hero from "./sections/hero";
import Historia from "./sections/historia";
import Menu from "./sections/menu";
import Reservas from "./sections/reservas";
import Resenas from "./sections/reseñas";
import Ubicacion from "./sections/ubicacion";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Historia />
      <Menu />
      <Reservas />
      <Galeria />
      <Resenas />
      <Ubicacion />
      <Footer />
    </div>
  );
}

export default App;
