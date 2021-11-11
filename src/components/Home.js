import React from "react";

import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <article>
      <Container className="mt-5">
        <Row>
          <Col>
            <img
              src="https://image.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg"
              alt="Home Image"
              height="80%"
              width="35%"
            />
          </Col>
        </Row>
      </Container>
    </article>
  );
};

export default Home;
