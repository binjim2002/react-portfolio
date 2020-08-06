import React from "react";
import bg from "../Assets/macbook-336704_1920.jpg";
import jimmy from '../Assets/IMG_8449.jpg'
import { Container, Row, Col, Card } from "react-bootstrap";
import About from '../components/About'
import Map from '../components/Map'

const Home = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center homeContainer"  style={{ backgroundImage: `url(${bg})` }}>
          <Col md="6">
            
            <Card className=" mt-5 mb-5 w-100">
              <Card.Img variant="top" src={jimmy} />
              <Card.Body>
                <Card.Title>Jimmy B. Kazadi</Card.Title>
                <Card.Text>
                  Full Stack Developer
                </Card.Text>
              </Card.Body>
              
            </Card>
          </Col>
        </Row>
        <About className="mt-3"/>
      </Container>
      <Map/>
    </div>
  );
};

export default Home;
