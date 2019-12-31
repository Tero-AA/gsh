import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from "react-bootstrap/Container";
import JumboImage from "../assets/home-real-estate-106399.jpg";
import FormE from "../components/SearchBar";

function JumbotronE() {
  const jumboStyle = {
    backgroundImage: `url(${JumboImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '250px 0'
  }

  const containerStyle = {
    background: 'rgba( 0, 0, 0, 0.4 )',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    marginTop: '200px',
    width: '100%',
    padding: '10px 0 25px 0'
  }
  return (
    <>
      <Jumbotron fluid style={jumboStyle}>
        <Jumbotron fluid style={containerStyle}>
          <Container>
            <FormE></FormE>
          </Container>
        </Jumbotron>
      </Jumbotron>
    </>
  )
}

export default JumbotronE;