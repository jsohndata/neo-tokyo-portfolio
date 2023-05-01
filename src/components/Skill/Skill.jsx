import { Container, Row, Col, Image } from "../../utilis/Bootstrap.jsx";
import devSkill from "../../data/dev-skill.json";
import creativeSkill from "../../data/creative-skill.json";
import Panel from "./Panel.jsx";
import EasterEgg from "./EasterEgg.jsx";


export default function Skill() {

  return (
    <section>
      <Container id="skills">
        
        <Row>
          <Col className="text-center">
            <h2 className="text-white">Dev Skills</h2>
          </Col>
        </Row>
        
        <Row className="text-center g-5">
          <Col>
            {devSkill.map(
              (element) => (
                <Panel iconName={element.name} />
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
              (element) => 
                (element.name === "figma") 
                  ? <EasterEgg iconName={element.name} />
                  : <Panel iconName={element.name} />
            )}
          </Col>
        </Row>
      </Container>
    </section>
  )
}