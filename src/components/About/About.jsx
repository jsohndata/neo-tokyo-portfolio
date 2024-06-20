import { useState } from "react";
import { Container, Row, Col, Image } from "../../utlis/Bootstrap.jsx";
import ButtonOutline from "../common/ButtonOutline.jsx";

export default function About() {
  const[imageIndex, setImageIndex] = useState(0);

  const imageArray = [
    "profile-1.jpg",
    "profile-2.webp",
    "profile-3.webp",
    "profile-4.webp"
  ];

  if (imageIndex >= imageArray.length) 
    setImageIndex(0);

  return (
    <Container id="about" className="p-5">
      <Row>
        <Col>
          <h2 className="text-center">About <span>A Contrarian's Perspective on Life.</span></h2>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={8} md={6} lg={4} xl={3}>
          <Image src={`${process.env.PUBLIC_URL}/images/${imageArray[imageIndex]}`}
            alt="Jiho Sohn"            
            className="button-effect border-style mb-4"
            fluid
            style={{"cursor":"zoom-in"}}
            onClick={() => setImageIndex(imageIndex+1)} />
        </Col>

        <Col  lg={8}  className="text-white">
          <p>My upbringing has had a significant impact on my worldview. I was born in Korea and later moved to Hawaii for high school, where I experienced a challenging transition from East to West society. After that, I pursued a ceramics degree at an art school in Rhode Island and started my career as a web developer in Boston in 2001 before moving to Baltimore, Maryland. Life has been unpredictable, but I have come to embrace the unexpected.</p>
          <p>In 2023, I had the privilege of being a senior instructor at Boca Code, where I worked with the next generation of software engineers. I took a contrarian approach to teaching, encouraging my students to think critically both as individuals and as part of a team. I am grateful that I learned so much from them, as "noCAP" had a whole different meaning.</p>        
          <p>Looking to the future, I am fascinated by the potential of new technologies such as artificial intelligence and machine learning (AI/ML). As a contrarian, I am eager to explore these fields from a unique perspective and contribute to their growth in ways that challenge conventional thinking. The possibilities are endless, and who knows what unexpected discoveries we might make – perhaps even having PB&J sandwiches on the moon!</p>
        </Col>
      </Row>

      <Row>        
        <Col className="text-center">
          <a href="https://www.linkedin.com/in/jsohndata/"
          target="_blank"
          rel="noreferrer"
          className="button-effect">
            <ButtonOutline text={"Connect on Linkedin"} />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
