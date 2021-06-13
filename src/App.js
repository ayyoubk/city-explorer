import React, { Component } from 'react'
import Cityform from './components/Cityform'
import axios from 'axios'
import RenderCity from './components/RenderCity'
import 'bootstrap/dist/css/bootstrap.min.css'

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      cityData: {},
    }
  };

  handelSubmit = async (e) => {
    e.preventDefault();
    const city = e.target.nameOfCity.value;
    const axiosResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.65682c34878313a764272bb30d845031&q=${city} &format=json`);

    this.setState({
      cityName: city,
      cityData: axiosResponse.data[0],
    })
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>City Explorer</h1>
        <Cityform onSubmit={this.handelSubmit} />
        <RenderCity data ={this.state.cityData}/>
      </div>
    )
  }
}

export default App
