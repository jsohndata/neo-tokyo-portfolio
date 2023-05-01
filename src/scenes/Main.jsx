import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio"
import Skill from "../components/Skill";
import ThreeThings from "../components/ThreeThings";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Main () {

  return (
    <>
      <Intro />
      <ThreeThings />
      <Portfolio />
      <Skill />
      <About />
      <Footer />
    </>
  )
}