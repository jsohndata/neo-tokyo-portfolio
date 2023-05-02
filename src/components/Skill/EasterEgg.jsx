import { Image } from "../../utilis/Bootstrap.jsx";

export default function EasterEgg( {name} ) {

  return (
    <a
      href="https://jsohndata.github.io/magic-color-xxl/"
      target="_blank"
      className="easter-egg"
      rel="noreferrer">
        <Image 
          src={`${process.env.PUBLIC_URL}/icons/${name}.svg`}
          fluid
          className="button-effect"
          style={{display: "inline-block", width: "100px"}} />
    </a>
  )

}