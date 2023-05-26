import { Button } from "../../utilis/Bootstrap.jsx";

export default function ButtonOutline ({text}) {

  return (
    <Button 
      size="lg" 
      variant="danger" 
      className="d-block d-lg-inline m-auto button-style button-effect">{text}</Button>
  )
}