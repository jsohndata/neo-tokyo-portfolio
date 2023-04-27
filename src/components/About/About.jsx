import { Container, Row, Col } from "react-bootstrap";

export default function About() {

  return (
    <main>
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          <Col md={{ span: 6, offset: 6 }} className="about-col">
            <h1>Hi I am <span>Jiho Sohn</span></h1>
            <p>I am a software engineer located in south Florida. I love JavaScript, CSS, Python, and MongoDb. On the side I love gardening, training my Belgium Malinois, riding my Ductai, and sleeping.</p>
            <p>Contact me: email@meail.com</p>
          </Col>
        </Row>
      </Container>
    </main>
  )
}