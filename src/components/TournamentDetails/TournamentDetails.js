import React, { Component } from "react";

class TournamentDetails extends Component {
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
      <div>
        <h1>{title}</h1>
        <h2>{date}</h2>
        <h2>{time}</h2>
        <h2>{game}</h2>
        <h2>{fee}</h2>
        <h2>{address}</h2>
        <p>{moreDetails}</p>
      </div>
    );
  }
}

export default TournamentDetails;
