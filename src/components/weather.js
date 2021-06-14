import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

export class Weather extends Component {
  constructor (props){
    super(props);
    this.state={
      data:this.props.weather,
    }
  }
  render() {
    return (
      <div>
        <ListGroup>
        <ListGroup.Item action href="#0">this Data from My server</ListGroup.Item>
          <ListGroup.Item variant="dark">{this.state.data.city_name} </ListGroup.Item>
          <ListGroup.Item variant="dark">{this.state.data.lat}</ListGroup.Item>
          <ListGroup.Item variant="dark">{this.state.data.lon}</ListGroup.Item>
          <ListGroup.Item variant="dark">{this.state.data.timezone}</ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default Weather;
