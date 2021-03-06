import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

export class WeatherDay extends Component {
  render() {
    return (
      <ListGroup.Item variant="dark">
        ð {this.props.singleday.date} -
        <small className="text-muted">{this.props.singleday.description}</small>
        <br></br> ðDay: {this.props.singleday.maxTemp} C ð Night:{" "}
        {this.props.singleday.minTemp} C
      </ListGroup.Item>
    );
  }
}

export default WeatherDay;
