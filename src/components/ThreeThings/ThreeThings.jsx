import { Container, Row, Col } from "../../utilis/Bootstrap.jsx";

export default function ThreeThings() {

  return (
    <main>
      <Container fluid className="three-things-container" id="three-things">
        <Row>
          <Col><h2 className="text-center">Three Skills <span className="d-block d-md-inline">I'm Grateful For</span></h2></Col>
        </Row>
        
        <Row className="justify-content-center g-5">
          <Col sm={8} md={3}>
            <p className="icon">🤗</p>
            <h3 className="text-center">Collaborative Catalyst</h3>
            <p className="text-center text-md-start">I am a team player who brings professional expertise, a positive attitude, and humor to keep the team energized, motivated, while delivering results.</p>
          </Col>

          <Col sm={8} md={3}>
            <p className="icon">🚀</p>
            <h3 className="text-center">Rocketing to Success</h3>
            <p className="text-center text-md-start">With 20+ years in tech, I have found that motivating my team to excel is like launching a rocket ship - challenging, but incredibly rewarding!</p>
          </Col>

          <Col sm={8} md={3}>
            <p className="icon">🥪</p>
            <h3 className="text-center">Functionality + Design</h3>
            <p className="text-center text-md-start">Combining tech and design is my jam - like PB&J. I strive to create a seamless, irresistible experience for users whilst keeping things crisp and fresh.</p>
          </Col>

      


        </Row>
      </Container>
    </main>
  )
}