import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from "react-bootstrap/Container";
import footerImage from "../assets/apartment-architecture-art-books-276724.jpg";
import { Row, Col, Card } from 'react-bootstrap';

function Footer() {

  const footerStyle = {
    backgroundImage: `url(${footerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '0',
    margin: '0',
  }

  const cardStyle = {
    background: 'rgba( 0, 0, 0, 0 )',
  }

  const container2Style = {
    background: 'rgba( 0, 0, 0, 0.7 )',
    backgroundSize: 'cover',
    color: 'white',
    width: '100%',
    margin: '0',
  }

  const container3Style = {
    background: 'rgba(186, 178, 40, 0.7)',
    backgroundSize: 'cover',
    color: 'black',
    width: '100%',
    margin: '0',
    padding: '0'
  }

  const textStyle = {
    color: 'rgb(249, 241, 46)'
  }

  const onMouseOver = event => {
    const el = event.target;
    el.style.color = 'rgb(249, 241, 46)'
  }

  const onMouseOut = event => {
    const el = event.target;
    el.style.color = 'white'
  }

  const textMini = {
    fontSize: '10px'
  }

  const logoStyle = {
    width: '80px',
  }

  return (
    <Jumbotron fluid style={footerStyle}>
      <Jumbotron fluid style={container2Style}>
        <Container>
          <Row>
            <Col>
              <h3 style={textStyle}>
                LATEST BLOG POST
              </h3>
              <br></br>
              <h4 onMouseEnter={event => onMouseOver(event)} onMouseOut={event => onMouseOut(event)}>
                Lorem ipsum dolor sit amet consectetur.
              </h4>
              <p>November 24, 2019 | By Andrés Ayala</p>
              <br></br>
              <h4 onMouseEnter={event => onMouseOver(event)} onMouseOut={event => onMouseOut(event)}>
                Lorem ipsum dolor sit amet consectetur.
              </h4>
              <p>November 24, 2019 | By Andrés Ayala</p>
              <br></br>
              <h4 onMouseEnter={event => onMouseOver(event)} onMouseOut={event => onMouseOut(event)}>
                Lorem ipsum dolor sit amet consectetur.
              </h4>
              <p>November 24, 2019 | By Andrés Ayala</p>
            </Col>
            <Col>
              <Card style={cardStyle}>
                <Card.Body>
                  <Card.Title>WEINCHERT, REALTORS©</Card.Title>
                  <Card.Text>
                    InFocus The Woodlands most innovative real state team.
                    <Row className="mt-3">
                      <Col>
                        <p>Phone</p>
                        <h3 style={textStyle}>(281) 809-0089</h3>
                      </Col>
                      <Col>
                        <p>Address</p>
                        <h5 style={textStyle}>3456 West Davis St. suite S10<br></br>Conroe, TX 77304</h5>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-right"><h2>Weichert<br></br>Realtors©</h2></Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Jumbotron fluid style={container3Style}>
        <Container>
          <Row className="pt-3">
            <Col md="auto">
              <p>HOME | BLOG | AGENTS | OUR LISTINGS | BUY | SELL | FINANCE | NEIGHBOURHOODS | CONTACT </p>
              <p style={textMini}>© 2019 All rights reserved</p>
            </Col>
            <Col className="p-2 text-right">
              <img
                alt="weichert-realtors-inFocus"
                src={require('../assets/logo-footer.png')}
                style={logoStyle}
              />{' '}
            </Col>
          </Row>
        </Container>
      </Jumbotron>

    </Jumbotron>
  )
}

export default Footer;

