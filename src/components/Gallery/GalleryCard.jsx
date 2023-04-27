import { Col, Card, Button, Image } from "react-bootstrap";

export default function GalleryCard ({ data:{id, name, about, website, cover} }) {
  
  return (
    <Col key={id} md={4}>
      <Card className="gallery-card button-effect">
        <figure>
          <a href={website} 
             target="_blank"
             rel="noreferrer"><Card.Img
            src={cover} /></a>
        </figure>

        <div className="content">
          <h3>{name}</h3>
          <p>{about}</p>

          <div className="icon text-center">
            <Image src="/portfolio-c10/icon/nav/react.svg" fluid />
            <Image src="/portfolio-c10/icon/nav/javascript.svg" fluid />
            <Image src="/portfolio-c10/icon/nav/css.svg" fluid />            
          </div>
        </div>
      </Card>
    </Col>
  )
}