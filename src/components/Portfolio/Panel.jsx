import { Col, Card } from "react-bootstrap";

export default function Panel ({ data:{id, name, about, website, cover, tech} }) {

  // const handleSiteLaunch = websiteUrl => {
  //   console.log(websiteUrl);
  //   window.open(websiteUrl, "_blank");
  // }
  
  return (
    <Col key={id} md={10} lg={6} xl={4}>
      <Card className="portfolio-panel button-effect ">
        <figure>
          <a href={website} 
             target="_blank"
             rel="noreferrer"><Card.Img
            src={`${process.env.PUBLIC_URL}/images/${cover}`} /></a>
        </figure>

        <div className="content">
          <h3>{name}</h3>
          <p>{about}</p>
          <hr />
          <p className="tech">{tech}</p>
        </div>
      </Card>
    </Col>
  );
}
