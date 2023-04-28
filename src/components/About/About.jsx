import { Container, Row, Col, Button } from "../../utilis/Bootstrap.jsx";

export default function About() {

  return (
    <main>
      <Container fluid className="main-container p-5">
        <Row className="d-flex align-items-center justify-content-center">
          <Col md={{ span: 7, offset: 5 }} lg={{ span: 6, offset: 4 }} xl={5} className="about-col">
            <h1>Hi I am <span>Jiho Sohn</span></h1>
            <p>I am a software engineer located in south Florida. I love JavaScript, CSS, Python, and MongoDb. On the side I love gardening, training my Belgium Malinois, riding my Ductai, and sleeping.</p>
            <Button>See Portfolio</Button>
          </Col>
        </Row>
      </Container>
    </main>
  )
}