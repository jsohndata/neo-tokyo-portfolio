import About from "./components/About";
import Gallery from "./components/Gallery"
import Skill from "./components/Skill";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import './styles/App.css';


function App() {
  return (
    <>
      <About />
      <Gallery />
      <Skill />
      <Footer />
    </>
  );
}

export default App;
