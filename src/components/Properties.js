import React from 'react';
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

function Properties() {

  return (
    <Container className='text-center pt-4'>
      <h2>FEATURED PROPERTIES</h2>
      <CardDeck className='p-3'>
        <Card>
          <Card.Img variant="top" src={require('../assets/brown-and-gray-painted-house-in-front-of-road-1396122.jpg')} />
          <Card.Body>
            <Card.Title>$1,340.230</Card.Title>
            <Card.Text>
              1700 East Walnut Ave. <br></br>
              Segunda, CA
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={require('../assets/architecture-beautiful-home-building-class-280229.jpg')} />
          <Card.Body>
            <Card.Title>$1,400.230</Card.Title>
            <Card.Text>
              1800 East Walnut Ave. <br></br>
              Tercera, CA
          </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  )
}

export default Properties;