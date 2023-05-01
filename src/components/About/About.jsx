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
      <Row className="justify-content-center">
        <Col sm={10} md={5} lg={3}>
          <Image src={`${process.env.PUBLIC_URL}/images/${imageArray[imageIndex]}`}
            alt="Jiho Sohn"            
            className="button-effect"
            fluid
            onClick={() => setImageIndex(imageIndex+1)} />
        </Col>

        <Col md={8} lg={6}>
          <h2>About Me</h2>
          <p className="text-white"><span>Past</span>: Born and raise in Korea until the age of age 17, finished high school Hawai'i, then get my BFA in Ceramics at Rhode Island School of Design.Started to code during the early 2000 to get out of a finacial pinch to help myself and my family. Started HTML with table, blink tag, frames, then fell headover heals with PHP/MySQL, accompained by JavaScript and CSS (thanks to <a href="https://www.csszengarden.com/" target="_blank" rel="noreferrer">CSS Zen Garden</a>).</p>
         
          <p className="text-white"><span>Present:</span>I have worked my as a Designer, Back-End Developer, Project Manager, Now </p>
        </Col>
      </Row>
    </Container>
  );
}
