import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import WeatherDay from "./WeatherDay";
export class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.weather,
      cityName:this.props.city
    };
  }
  render() {
    // console.log(this.state.data[0].date);
    return (
      <aside>
        <ListGroup id="weather-list">
          <ListGroup.Item action href="https://www.weatherbit.io/api">
            {this.state.cityName} Weather <br></br>by weatherbit.io
          </ListGroup.Item>
          {this.state.data.map((day) => {
            return (
              <WeatherDay singleday={day}/>
            );
          })}
        </ListGroup>
      </aside>
    );
  }
}

export default Weather;
