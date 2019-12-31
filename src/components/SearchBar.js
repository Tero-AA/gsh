import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function FormE() {

  const labelStyle = {
    color: 'rgb(249, 241, 46)',
    padding: '10px 0'
  }

  const formStyle = {
    color: 'white',
    background: 'rgba( 0, 0, 0, 0.4 )',
  }

  const onMouseOver = event => {
    const el = event.target;
    el.style.background = 'rgb(249, 241, 46)';
    el.style.color = 'black'
  }

  const onMouseOut = event => {
    const el = event.target;
    el.style.background = 'rgba( 0, 0, 0, 0.4 )';
    el.style.color = 'white'
  };

  return (
    <>
      <Form className='text-center'>
        <Form.Label style={labelStyle} >PROPERTY SEARCH</Form.Label>
        <Form.Row>
          <Col>
            <Form.Control style={formStyle} placeholder="Property Type" />
          </Col>
          <Col>
            <Form.Control style={formStyle} placeholder="City" />
          </Col>
          <Col>
            <Form.Control style={formStyle} placeholder="Random Form" />
          </Col>
          <Button style={formStyle} onMouseEnter={event => onMouseOver(event)} onMouseOut={event => onMouseOut(event)} variant="warning" type="submit">
            Submit
          </Button>
          <Button style={formStyle} onMouseEnter={event => onMouseOver(event)} onMouseOut={event => onMouseOut(event)} className='ml-2' variant="warning" type="submit">
            Advanced
          </Button>
        </Form.Row>
      </Form>
    </>
  )
}

export default FormE;