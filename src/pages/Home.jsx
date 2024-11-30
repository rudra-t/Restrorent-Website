import About from "../Componant/aboutsection/About";
import Food from "../Componant/foodsection/Food";
import Services from "../Componant/servicesection/Services";
import Footer from "../Componant/Footersection/Footer";

const Home = () => {
  return (
    <div className="home">
      <About />
      <Food />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
