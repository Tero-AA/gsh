import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";


function NavbarE() {
  const logoStyle = {
    position: 'absolute',
    top: '0px',
    width: '150px',
    height: '150px'
  }

  const barStyle = {
    background: 'rgba( 0, 0, 0, 0.4 )',
  }

  const navStyle = {
    color: 'white'
  }

  const phoneStyle = {
    color: 'rgb(249, 241, 46)',
    display: 'block',
  }

  const onMouseOver = event => {
    const el = event.target;
    el.style.color = 'rgb(249, 241, 46)'
  }

  const onMouseOut = event => {
    const el = event.target;
    el.style.color = 'white'
  };

  return (
    <>
      <Navbar collapseOnSelect style={barStyle} expand="lg" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="weichert-realtors-inFocus"
              src={require('../assets/logo.png')}
              style={logoStyle}
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link style={phoneStyle} className="ml-auto">936.760.7800</Nav.Link>
              <Nav.Link onMouseEnter={event => onMouseOver(event)} onMouseOut={event => onMouseOut(event)} style={navStyle} className="ml-auto">HOME</Nav.Link>
              <Nav.Link onMouseEnter={event => onMouseOver(event)} onMouseOut={event => onMouseOut(event)} style={navStyle} className="ml-auto">BLOG</Nav.Link>
              <Nav.Link onMouseEnter={event => onMouseOver(event)} onMouseOut={event => onMouseOut(event)} style={navStyle} className="ml-auto">AGENTS</Nav.Link>
              <Nav.Link onMouseEnter={event => onMouseOver(event)} onMouseOut={event => onMouseOut(event)} style={navStyle} className="ml-auto">OUR LISTINGS</Nav.Link>
              <Nav.Link onMouseEnter={event => onMouseOver(event)} onMouseOut={event => onMouseOut(event)} style={navStyle} className="ml-auto">BUY</Nav.Link>
              <Nav.Link onMouseEnter={event => onMouseOver(event)} onMouseOut={event => onMouseOut(event)} style={navStyle} className="ml-auto">SELL</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarE;