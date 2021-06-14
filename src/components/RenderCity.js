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
            <Alert variant='success'  id='dataAlert'>
              City Name : {this.props.data.display_name} || Location : {this.props.data.lat}, {this.props.data.lon}
            </Alert>

            <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.65682c34878313a764272bb30d845031&center=${this.props.data.lat},${this.props.data.lon}&zoom=13&size=1500x250`} fluid center />
          </div>
        }
        {
          this.props.check &&

          <Alert variant='danger'>
            {this.props.msg} .. Please Try Again !!
          </Alert>
        }

      </div>
    )
  }
}
export default RenderCity
