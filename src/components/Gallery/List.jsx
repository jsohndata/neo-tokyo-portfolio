import { Container, Row } from "react-bootstrap";
import GalleryCard from "./GalleryCard.jsx";
import data from "../../data/data.json";

export default function List () {

  return (
    <>
      <Container>
        <Row>
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
    </>
  )
}