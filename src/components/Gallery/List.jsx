import { Container, Row, Col } from "react-bootstrap";
import GalleryCard from "./GalleryCard.jsx";
import data from "../../data/data.json";

export default function List () {

  return (
    <Container className="gallery-container">
      <Row>
        <Col>
          <h2 className="text-center">Portfolio</h2>
        </Col>
      </Row>

      <Row className="g-3">
        {
          data.map( 
            (element) => {
              return element
                ? <GalleryCard data={element} />
                : <p>Loading</p>
            }
          )
        }
      </Row>
    </Container>
  )
}