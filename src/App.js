import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Gallery from "./components/Gallery"
import Skill from "./components/Skill.jsx";
import Footer from "./components/Footer.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


function App() {
  return (
    <>
      <Header />
      <About />
      <Gallery />
      <Skill />
      <Footer />
    </>
  );
}

export default App;
