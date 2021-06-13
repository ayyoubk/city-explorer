import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'

export class RenderCity extends Component {
  render() {
    return (
      <div>
        <Alert variant='success'>
          {this.props.data.display_name}, {this.props.data.lat}, {this.props.data.lon}
        </Alert>
      </div>
    )
  }
}

export default RenderCity
