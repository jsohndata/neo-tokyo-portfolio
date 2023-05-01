import { Image } from "../../utilis/Bootstrap.jsx";

export default function EasterEgg( {iconName} ) {

  return (
    <a
      href="https://jsohndata.github.io/magic-color-xxl/"
      target="_blank"
      className="easter-egg"
      rel="noreferrer">
        <Image 
          src={`${process.env.PUBLIC_URL}/icons/${iconName}.svg`}
          fluid
          className="button-effect"
          style={{display: "inline-block", width: "100px"}} />
    </a>
  )

}