import { Image } from "../../utilis/Bootstrap.jsx";

export default function EasterEgg( {name,id} ) {

  return (
    <a
      href="https://notiempo.lol/mozartsghost/7"
      target="_blank"
      className="easter-egg-3"
      rel="noreferrer">
        <Image 
          key={id}
          src={`${process.env.PUBLIC_URL}/icons/${name}.svg`}
          fluid
          className="button-effect"
          style={{display: "inline-block", width: "100px"}} />
    </a>
  )

}