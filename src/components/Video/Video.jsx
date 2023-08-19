import { Container, Row, Col } from "../../utlis/Bootstrap.jsx";

export default function Video ( ) {

  return (
    <secion>
      <Container fluid id="videos">
        <Row>
          <Col>
            <h2 className="text-center">Generative AI Videos</h2>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          <Col sm={12}>
            <div className="ratio ratio-16x9 ">
              <iframe src='https://widgets.sociablekit.com/youtube-playlist-videos/iframe/182278' 
              frameborder='0' width='100%' height='1000'
              title="Generative AI Videos"></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </secion>
  );
}