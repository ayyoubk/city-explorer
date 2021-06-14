import React, { Component } from "react";
import Cityform from "./components/Cityform";
import axios from "axios";
import RenderCity from "./components/RenderCity";
import "bootstrap/dist/css/bootstrap.min.css";
require("dotenv").config();
// const myKey=process.env.REACT_APP_KEY;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locatKey: process.env.REACT_APP_KEY,
      serverUrl: process.env.REACT_APP_URL,

      cityName: "",
      cityData: {},
      displayData: false,
      displayError: false,
      errorMsg: "",
      weather: {},
    };
  }

  handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const city = e.target.nameOfCity.value;
      const axiosResponse = await axios.get(
        `https://us1.locationiq.com/v1/search.php?key=${this.state.locatKey}&q=${city} &format=json`
      );
      const weatherResponse = await axios.get(
        `${this.state.serverUrl}/weather`
      );
      console.log(weatherResponse.data);

      this.setState({
        cityName: city,
        cityData: axiosResponse.data[0],
        displayData: true,
        weather: weatherResponse.data,
      });
    } catch (err) {
      this.setState({
        displayError: true,
        errorMsg: err.message,
      });
    }
  };

  render() {
    return (
      <div>
        <h1>City Explorer</h1>
        <Cityform onSubmit={this.handelSubmit} />
        <RenderCity
          mykey={this.state.locatKey}
          check={this.state.displayError}
          show={this.state.displayData}
          data={this.state.cityData}
          msg={this.state.errorMsg}
          weather={this.state.weather}
        />
      </div>
    );
  }
}

export default App;
