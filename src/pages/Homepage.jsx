import NavMenu from "../components/NavMenu"
import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio"
import Skill from "../components/Skill";
import ThreeThings from "../components/ThreeThings";
import About from "../components/About";
import Social from "../components/Social";
import Footer from "../components/Footer";


export default function Main () {

  return (
    <>  
      <NavMenu />
      <Intro />
      <ThreeThings />
      {/* <div className="top-scene-container"> */}            
      <Portfolio />
      <Skill />
      <About />
      <div className="bottom-scene-container">
        <Social />
        <Footer />
      </div>
    </>
  )
}