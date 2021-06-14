import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
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
              City Name : {this.props.data.display_name} || Location :{" "}
              {this.props.data.lat}, {this.props.data.lon}
            </Alert>

            <Image
              src={`https://maps.locationiq.com/v3/staticmap?key=${this.state.key}&center=${this.props.data.lat},${this.props.data.lon}&zoom=13&size=1000x250`}
              fluid
            />
            <Weather weather={this.props.weather}/>
          </div>
        )}
        {this.props.check && (
          <Alert variant="danger">
            {this.props.msg} .. Please Try Again !!
          </Alert>
        )}
      </div>
    );
  }
}
export default RenderCity;
