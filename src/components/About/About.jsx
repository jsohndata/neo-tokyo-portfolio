import { useState } from "react";
import { Container, Row, Col, Image } from "../../utilis/Bootstrap.jsx";

export default function About() {
  const[imageIndex, setImageIndex] = useState(0);

  const imageArray = [
    "profile-1.webp",
    "profile-2.webp",
    "profile-3.webp",
    "profile-4.webp"
  ];

  if (imageIndex >= imageArray.length) 
    setImageIndex(0);

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="text-center">About <span>A Contrarian's Perspective on Life.</span></h2>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col sm={10} md={5} lg={3}>
          <Image src={`${process.env.PUBLIC_URL}/images/${imageArray[imageIndex]}`}
            alt="Jiho Sohn"            
            className="button-effect"
            fluid
            style={{"cursor":"zoom-in"}}
            onClick={() => setImageIndex(imageIndex+1)} />
        </Col>

        <Col md={8} lg={6}  className="text-white">
        <p>My upbringing has had a significant impact on my worldview. I was born in Korea and later moved to Hawaii for high school, where I experienced a challenging transition from East to West society. After that, I pursued a ceramics degree at an art school in Rhode Island and started my career as a web developer in Boston in 2001 before moving to Baltimore, Maryland. Life has been unpredictable, but I have come to embrace the unexpected.</p>

        <p>Currently, I am a senior instructor at Boca Code, where I have the privilege of working with the next generation of software engineers. I take a contrarian approach to teaching, encouraging my students to think critically as individuals and as part of a team. Their unique perspectives inspire me to learn from them and continue to grow.</p>
        
        <p>Looking to the future, I am fascinated by the potential of new technologies such as artificial intelligence and machine learning (AI/ML). As a contrarian, I am eager to explore these fields from a unique perspective and contribute to their growth in ways that challenge conventional thinking. The possibilities are endless, and who knows what unexpected discoveries we might make – perhaps even having PB&J sandwiches on the moon!</p>
        </Col>
      </Row>
    </Container>
  );
}
