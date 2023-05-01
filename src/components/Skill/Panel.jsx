import { Image } from "../../utilis/Bootstrap.jsx";

export default function Panel( {iconName} ) {

  return (
    <Image
      src={`${process.env.PUBLIC_URL}/icons/${iconName}.svg`}
      className="button-effect"
      style={{display: "inline-block", width: "100px"}} />
  );
}