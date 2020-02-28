import React, { Component } from "react";
import { Link } from "react-router-dom";

class Tournament extends Component {
  render() {
    const {
      title,
      date,
      time,
      game,
      fee,
      address,
      moreDetails,
      id
    } = this.props.tournament;
    return (
      <div className="tournament">
        <h1>{title}</h1>
        <h2>{date}</h2>
        <h2>{time}</h2>
        <h2>{game}</h2>
        <h2>${fee}</h2>
        <h2>{address}</h2>
        <Link to={`/${id}`}>More details</Link>
      </div>
    );
  }
}

export default Tournament;
