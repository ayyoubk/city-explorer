import React, { Component } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import CardOfMovie from "./CardOfMovie";

export class Movies extends Component {
  render() {
    return (
      <section>
        <CardColumns>
          {this.props.data.map((element) => {
            return (
              <CardOfMovie singleMovie={element}/>
            );
          })}
        </CardColumns>
      </section>
    );
  }
}

export default Movies;
