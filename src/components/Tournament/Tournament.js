import React, { Component } from "react";

class Tournament extends Component {
  render() {
    const { name, game, details } = this.props.tourney;
    console.log(this.props);
    return (
      <div>
        <h1>{name}</h1>
        <h2>{game}</h2>
        <p>{details}</p>
      </div>
    );
  }
}

export default Tournament;
