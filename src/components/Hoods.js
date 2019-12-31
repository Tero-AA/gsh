import React from 'react';
import Container from "react-bootstrap/Container";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";

function Hoods() {

  const divStyle = {
    width: '100%',
    padding: '50px 0',
    background: 'whitesmoke'
  }
  return (
    <div style={divStyle}>
      <Container className='text-center'>
        <h2>FEATURED NEIGHBORHOODS</h2>
        <CardColumns className='p-3'>
          <Card text="white">
            <Card.Img variant="top" src={require('../assets/apartment-architecture-art-books-276724.jpg')} />
            <Card.ImgOverlay>
              <Card.Title>Lorem</Card.Title>
            </Card.ImgOverlay>
          </Card>
          <Card text="white">
            <Card.Img variant="top" src={require('../assets/architecture-beautiful-home-building-class-280229.jpg')} />
            <Card.ImgOverlay>
              <Card.Title>Lorem</Card.Title>
            </Card.ImgOverlay>
          </Card>
          <Card text="white">
            <Card.Img variant="top" src={require('../assets/brown-and-gray-painted-house-in-front-of-road-1396122.jpg')} />
            <Card.ImgOverlay>
              <Card.Title>Lorem</Card.Title>
            </Card.ImgOverlay>
          </Card>
          <Card text="white">
            <Card.Img variant="top" src={require('../assets/home-real-estate-106399.jpg')} />
            <Card.ImgOverlay>
              <Card.Title>Lorem</Card.Title>
            </Card.ImgOverlay>
          </Card>
          <Card text="white">
            <Card.Img variant="top" src={require('../assets/white-and-brown-concrete-building-2287310.jpg')} />
            <Card.ImgOverlay>
              <Card.Title>Lorem</Card.Title>
            </Card.ImgOverlay>
          </Card>
          <Card text="white">
            <Card.Img variant="top" src={require('../assets/white-and-red-wooden-house-with-fence-1029599.jpg')} />
            <Card.ImgOverlay>
              <Card.Title>Lorem</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </CardColumns>
      </Container>
    </div>
  )
}

export default Hoods;