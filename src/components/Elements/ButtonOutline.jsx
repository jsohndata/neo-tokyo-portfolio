import { Button } from "../../utilis/Bootstrap.jsx";

export default function ButtonOutline ({text}) {

  return (
    <Button 
      size="lg" 
      variant="outline-danger" 
      className="button-style button-effect">{text}</Button>
  )
}