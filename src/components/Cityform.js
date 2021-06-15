import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class Cityform extends Component {
  render() {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <Form.Group controlId="nameOfCity" >
          <Form.Label>City Name: </Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
          <br></br>
          <Button variant="light" type="submit">
            Explore!
          </Button>
        </Form.Group>
      </Form>
    )
  }
}

export default Cityform

