import { Container, Row, Col, Image } from "../../utilis/Bootstrap.jsx";
import devSkill from "../../data/dev-skill.json";
import creativeSkill from "../../data/creative-skill.json";

export default function Skill() {

  return (
    <section>
      <Container className="skill-container">
        
        <Row>
          <Col className="text-center">
            <h2 className="text-white">Dev Skills</h2>
          </Col>
        </Row>
        
        <Row className="text-center g-5">
          <Col>
          {devSkill.map(
            (element) => (
              <Image src={"/portfolio-c10/icon/"+element.name+".svg"} 
                fluid
                className="button-effect" 
                style={{"display":"inline-block"}} />
            )
          )}
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <h2 className="text-white">Creative Skills</h2>
          </Col>
        </Row>

        <Row className="text-center g-5">
          <Col>
          {creativeSkill.map(
            (element) => (
              <Image src={"/portfolio-c10/icon/"+element.name+".svg"} 
                fluid
                className="button-effect" 
                style={{"display":"inline-block"}} />
            )
          )}
          </Col>
        </Row>
      </Container>
    </section>
  )
}