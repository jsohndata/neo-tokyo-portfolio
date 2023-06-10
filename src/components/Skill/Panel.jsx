import { Image } from "../../utlis/Bootstrap.jsx";

export default function Panel( {name} ) {

  return (
    <Image
      src={`${process.env.PUBLIC_URL}/icons/${name}.svg`}
      className="button-effect"
      style={{display: "inline-block", width: "100px"}} />
  );
}