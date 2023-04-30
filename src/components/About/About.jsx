import { useState, useContext } from "react";
import { SiteDir } from "../App.js";
import { Container, Row, Col, Image } from "../../utilis/Bootstrap.jsx";

export default function About() {
  const[imageIndex, setImageIndex] = useState(0);

  const imageArray = [
    "profile-1.webp",
    "profile-2.webp",
    "profile-3.webp",
    "profile-4.webp",
    "profile-5.webp",
    "profile-6.webp"
  ];

  if (imageIndex >= imageArray.length) 
    setImageIndex(0);

  const siteDirName = useContext(SiteDir);

  return (
    <main>
      <Container>
        <Row className="justify-content-center">
          <Col sm={10} md={5} lg={4} className="d-flex align-items-center">
            <Image src={`${siteDirName}images/${imageArray[imageIndex]}`}
              alt="René Descartes"            
              className="rounded-circle button-effect"
              fluid
              onClick={() => setImageIndex(imageIndex+1)} />
          </Col>

          <Col md={8} lg={6}>
            <h1 className="mt-3 text-sm-center text-lg-start">Cogito Ergo Sum</h1>
            <p><em>"I think, therefore I am."</em> It was introduced by French philosopher <span onClick={() => setImageIndex(imageIndex+1)} >René Descartes</span> in 1637. The statement argues that the act of doubting one's own existence serves as proof of one's existence, making it a fundamental principle of Western philosophy and influential in the development of modern philosophy and science.</p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
