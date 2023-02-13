import { Container, Row, Col } from 'react-bootstrap';

const NotFound = () => {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div>
              <h1>404 Not Found</h1>
              <p>Lo siento, la página que estás buscando no existe.</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  };

  export default NotFound;