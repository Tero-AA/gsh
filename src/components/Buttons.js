import React from 'react';
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";


function Buttons() {

  const onMouseOver = event => {
    const el = event.target;
    el.style.background = 'rgb(249, 241, 46)';
  };

  const onMouseOut = event => {
    const el = event.target;
    el.style.background = 'white';
  };

  return (
    <Container>
      <CardDeck>
        <Card onMouseEnter={event => onMouseOver(event)} onMouseOut={event => onMouseOut(event)} className="m-3">
          <Card.Body>
            FINANCE YOUR <br></br>
            Dream Home in The Woodlands
          </Card.Body>
        </Card>
        <Card onMouseEnter={event => onMouseOver(event)} onMouseOut={event => onMouseOut(event)} className="m-3">
          <Card.Body>
            THE SECRET <br></br>
            To Selling Your Home
          </Card.Body>
        </Card>
        <Card onMouseEnter={event => onMouseOver(event)} onMouseOut={event => onMouseOut(event)} className="m-3">
          <Card.Body>
            WHAT IS? <br></br>
            My Home Worth?
          </Card.Body>
        </Card>
        <Card onMouseEnter={event => onMouseOver(event)} onMouseOut={event => onMouseOut(event)} className="m-3">
          <Card.Body>
            NEW <br></br>
            Construction
          </Card.Body>
        </Card>
      </CardDeck>
    </Container >
  )
}

export default Buttons;