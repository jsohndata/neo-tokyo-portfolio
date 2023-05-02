import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio"
import Skill from "../components/Skill";
import ThreeThings from "../components/ThreeThings";
import About from "../components/About";
import Social from "../components/Social";
import Footer from "../components/Footer";
import useBgRand from "../hook/useBgRand/useBgRand.jsx";


export default function Main () {

  const {bgImage} = useBgRand();

  return (
    <>
      <div className="top-scene-container"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL+"/images/"+bgImage})` }}>
        <Intro />
        <ThreeThings />
      </div>
      <Portfolio />
      <Skill />
      <About />
      <div className="top-scene-container"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL+"/images/"+bgImage})` }}>
        <Social />
        <Footer />
      </div>
    </>
  )
}