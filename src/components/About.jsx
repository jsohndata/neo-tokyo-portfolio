import { Container, Row, Col } from "react-bootstrap";

export default function About() {

  return (
    <section>
      <Container className="bg-danger">
        <Row>
          <Col>
            <img src="https://picsum.photos/300/300" 
              alt="profile pict" />
          </Col>

          <Col>
            <h1>Hi I am Jiho</h1>
            <p>I am a software engineer located in south Florida. I love JavaScript, CSS, Python, and MongoDb. On the side I love gardening, training my Belgium Malinois, riding my Ductai, and sleeping.</p>
            <p>Contact me: email@meail.com</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}