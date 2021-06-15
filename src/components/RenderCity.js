import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import Movies from "./Movies";
import Weather from "./weather";


export class RenderCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: this.props.mykey,
    };
  }
  render() {
    return (
      <div>
        {this.props.show && (
          <div>
            <Alert variant="success" id="dataAlert">
              City Name : {this.props.data.display_name} <br></br> Location :{" "}
              {this.props.data.lat}, {this.props.data.lon}
            </Alert>

            <Image
              src={`https://maps.locationiq.com/v3/staticmap?key=${this.state.key}&center=${this.props.data.lat},${this.props.data.lon}&zoom=13&size=1000x400`}
              fluid
            />
            <Weather weather={this.props.weather} city={this.props.city}/>
            <Movies data={this.props.moviesData} city={this.props.city}/>

          </div>
        )}
        {this.props.check && (
          <Alert variant="danger" id='error'>
            {this.props.msg} .. Please Try Again !!
          </Alert>
        )}
      </div>
    );
  }
}
export default RenderCity;
