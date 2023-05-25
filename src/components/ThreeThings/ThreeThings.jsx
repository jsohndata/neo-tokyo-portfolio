import { Container, Row, Col } from "../../utilis/Bootstrap.jsx";
// import useBgRand from "../../hook/useBgRand";

export default function ThreeThings() {
  // const { handleBgImage } = useBgRand();

  /* 
  <p className="icon easter-egg-2" 
              onClick={ handleBgImage}>🥪</p>
  */

  return (
    <section>
      <Container fluid id="three-things" className="p-5">
        <Row>
          <Col><h2 className="text-center">Three Things 
          <span>That bring pride to my mom.</span></h2></Col>
        </Row>
        
        <Row className="justify-content-center g-5">
          <Col sm={8} lg={3}>
            <p className="icon">🤗</p>
            <h3 className="text-center">Collaborative <span className="d-md-block">Catalyst</span></h3>
            <p className="text-center text-md-start">I am a team oriented player who brings professional expertise, positive attitude, and humor to keep our team energized, motivated, while delivering results.</p>
          </Col>

          <Col sm={8} lg={3}>
            <p className="icon"><a href="https://github.com/stars/jsohndata/lists/launch" 
              target="_blank" 
              rel="noreferrer" 
              className="easter-egg">🚀</a></p>
            <h3 className="text-center">Rocket to<span className="d-md-block">The Moon</span></h3>
            <p className="text-center text-md-start">With 20+ years in tech, I have found that motivating our team to excel is like launching a rocket ship - challenging, but incredibly rewarding!</p>
          </Col>

          <Col sm={8} lg={3}>  
            <p className="icon">🥪</p>          
            <h3 className="text-center">Functionality <span className="d-md-block">+ Design</span></h3>
            <p className="text-center text-md-start">Combining tech and design is my jam - like PB&J. I strive to create a seamless, irresistible experience for users whilst keeping things toasty and fresh.</p>
          </Col>

        </Row>
      </Container>
    </section>
  )
}