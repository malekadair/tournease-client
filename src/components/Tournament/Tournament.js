import React, { Component } from "react";
import { Link } from "react-router-dom";

class Tournament extends Component {
  render() {
    const { name, game, details, id } = this.props.tourney;
    console.log("tournament props", this.props);
    return (
      <div>
        <h1>{name}</h1>
        <h2>{game}</h2>
        <p>{details}</p>
        <Link to={`/${id}`}>More details</Link>
      </div>
    );
  }
}

export default Tournament;
