import { Col, Image } from "../../utlis/Bootstrap.jsx";

export default function Panel ({element: {title, name, url}}) {

  return (
    <Col xs={2} className="d-flex justify-content-center" ><a 
      href={url} 
      target="_blank" 
      rel="noreferrer"><Image
        src={`${process.env.PUBLIC_URL}/social/circle/${name}.svg`}
        className="button-effect" /></a></Col>
  );    
}