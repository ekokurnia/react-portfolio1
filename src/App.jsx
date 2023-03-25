import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { ellipse } from "./assets";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <div className=" container xl mx-auto px-4 md:px-[47px] overflow-hidden">
        <div className="sticky container mx-auto top-0 z-[9999] bg-white/80 backdrop-blur-sm">
          <Header />
        </div>
        <div className="relative ">
          <Hero />
          <About />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
