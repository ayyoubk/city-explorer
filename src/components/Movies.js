import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";


export class Movies extends Component {
  render() {
    return (
      <section>
        <CardColumns>
          {this.props.data.map((element) => {
            return (
              <Card bg="dark">
                <Card.Img variant="top" src={element.posterPath} height='250px'/>
                <Card.Body>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Toggle as={Card.Header}  eventKey="1">
                        {element.title}     <br></br> <small className="text-muted">Click for overview</small>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>{element.overview}</Card.Body>
                    </Accordion.Collapse>
                  </Accordion>
                  {/* <Card.Title>{element.title}</Card.Title>
                  <Card.Text>{element.overview}</Card.Text> */}
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Release Date : {element.date}</small>
                </Card.Footer>
              </Card>
            );
          })}
        </CardColumns>
      </section>
    );
  }
}

export default Movies;
