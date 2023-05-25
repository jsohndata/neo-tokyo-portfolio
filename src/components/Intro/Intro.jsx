import { HashLink } from "react-router-hash-link";
import { Container, Row, Col } from "../../utilis/Bootstrap.jsx";
import ButtonOutline from "../Elements/ButtonOutline.jsx";
import { Pannellum } from "pannellum-react";
import bg from "./background/anime_art_style_cyberpunk_future_city_street_t.webp";

export default function Page4() {

  return (
      <main>      
        <div className="pan360-container">
          <div className="pan360-media">
            <Pannellum
              width="100%"
              height="100%"
              image={bg}
              yaw={180}
              hfov={110}
              autoLoad
              autoRotate={true}
              compass={false}
              showZoomCtrl={false}
              showFullscreenCtrl={false}
              mouseZoom={false} />
          </div>
        
        <Container fluid className="p-5" id="intro">
          <Row className="d-flex 
            justify-content-center
            justify-content-lg-start
            align-items-center">
            <Col xs={11}
              md={{span:6, offset: 6}}
              style={{zIndex: "10"}}>
              
              <div className="pan360-content">
                <h1 className="text-center text-lg-start"><span>Hello, my name is</span> Jiho Sohn</h1>
                <p>I am a software engineer residing in south Florida. I love JavaScript, React.js, CSS, Python, MongoDB and more. When I'm not crafting code, you will find me tending to my garden, keeping my Belgian Malinois on her toes (paws), and revving up my Ducati like it's an API.</p>
                
                <HashLink to="/#portfolio">
                  <ButtonOutline text={"getPortfolio"} />
              </HashLink>
              </div>        
            </Col>          
          </Row>
        </Container>      
      </div>
    </main>
  );
}
