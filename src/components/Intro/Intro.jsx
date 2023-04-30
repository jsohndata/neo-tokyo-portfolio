import { HashLink } from "react-router-hash-link";
import { Container, Row, Col, Button } from "../../utilis/Bootstrap.jsx";

export default function Intro() {

  return (
    <main>
      <Container fluid className="main-container p-5">
        <Row className="d-flex align-items-center justify-content-center">
          <Col 
            md={{ span: 7, offset: 5 }} 
            lg={{ span: 6, offset: 4 }} 
            xl={5} 
            className="about-col">
              <h1><span>Hello, I am</span> Jiho Sohn</h1>
              <p>I am a software engineer residing in south Florida. I love JavaScript, React.js, CSS, Python, MongoDB and more. Besides that gardening, training my Belgium Malinois, riding my Ductai, are things I enjoy.</p>
              <HashLink to="/#portfolio"><Button>See Portfolio</Button></HashLink>
          </Col>
        </Row>
      </Container>
    </main>
  )
}