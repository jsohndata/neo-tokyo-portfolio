import { Container, Row, Col } from "../../utlis/Bootstrap.jsx";

export default function Video ( ) {

  return (
    <section>
      <Container fluid id="video" >        
        <Row className="d-flex justify-content-center">
          <Col sm={12}>
            <div className="ratio ratio-16x9 ">
              <iframe src='https://widgets.sociablekit.com/youtube-playlist-videos/iframe/182278' frameborder='0' width='100%' height='1000'></iframe>            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}