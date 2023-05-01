import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio"
import Skill from "../components/Skill";
import ThreeThings from "../components/ThreeThings";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Main () {

  return (
    <>
      <div className="top-scene-container">
        <Intro />
        <ThreeThings />
      </div>
      <Portfolio />
      <Skill />
      <About />
      <Footer />
    </>
  )
}