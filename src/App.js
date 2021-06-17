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
      lat: "",
      lon: "",
      displayData: false,
      displayError: false,
      errorMsg: "",
      weather: {},
      movies: {},
      start: 0,
      duration:0
    };
  }

  handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const city = e.target.nameOfCity.value;
      this.setState({start:Date.now()})
      await axios.get(
        `https://us1.locationiq.com/v1/search.php?key=${this.state.locatKey}&q=${city}&format=json`
        ).then(axiosResponse => {

        this.setState({
          cityName: city,
        cityData: axiosResponse.data[0],
        lat: axiosResponse.data[0].lat,
        lon: axiosResponse.data[0].lon,
        });  
        axios.get(`${process.env.REACT_APP_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}`).then(weatherResponse => {
          this.setState({
            weather: weatherResponse.data,
            displayData: true,
            duration:(Date.now()-this.state.start)
            
          })
  
        });
        axios.get(`${process.env.REACT_APP_URL}/movies?cityname=${this.state.cityName}&include_adult=false`).then(moviesResponse => {
          this.setState({
            movies: moviesResponse.data,
          })
          
        });
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
      <div id='main-cont'>
        <h1 id='header-text'>City Explorer</h1>
        <Cityform onSubmit={this.handelSubmit} />
        <RenderCity
          mykey={this.state.locatKey}
          check={this.state.displayError}
          show={this.state.displayData}
          data={this.state.cityData}
          msg={this.state.errorMsg}
          weather={this.state.weather}
          city={this.state.cityName}
          moviesData={this.state.movies}
          duration={this.state.duration}

        />
      </div>
    );
  }
}

export default App;
