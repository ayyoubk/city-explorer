import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

export class CardOfMovie extends Component {
  render() {
    return (
      <Card bg="dark">
        <Card.Img
          variant="top"
          src={this.props.singleMovie.posterPath}
          height="250px"
        />
        <Card.Body>
          <Accordion defaultActiveKey="0">
            <Accordion.Toggle as={Card.Header} eventKey="1">
              {this.props.singleMovie.title} <br></br>
              <small className="text-muted">Click for overview</small>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>{this.props.singleMovie.overview}</Card.Body>
            </Accordion.Collapse>
          </Accordion>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Release Date : {this.props.singleMovie.date}
          </small>
        </Card.Footer>
      </Card>
    );
  }
}

export default CardOfMovie;
