import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'
import Image from 'react-bootstrap/Image'

export class RenderCity extends Component {
  render() {
    return (
      <div>
        {
          this.props.show &&
          <div>
            <Alert variant='success'>
              {this.props.data.display_name}, {this.props.data.lat}, {this.props.data.lon}
            </Alert>

            <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.65682c34878313a764272bb30d845031&center=${this.props.data.lat},${this.props.data.lon}&zoom=13&size=1000x300`} fluid center />
          </div>
        }
        {
          this.props.check &&

          <Alert variant='danger'>
            Error 404 !! .. Please Try again
          </Alert>
        }

      </div>
    )
  }
}
export default RenderCity
