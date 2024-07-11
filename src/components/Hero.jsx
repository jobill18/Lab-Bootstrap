import { Container, Row, Col } from "react-bootstrap";

export default function Hero({ title, lead }) {
  return (
    <Container fluid className="text-center">
      <Row>
        <Col xs="12" md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
          <h1>{title}</h1>
          <p>{lead}</p>
        </Col>
      </Row>
    </Container>

    // <section>
    //   <h1>{title}</h1>
    //   <p>{lead}</p>
    // </section>
  );
}
