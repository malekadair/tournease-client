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
        <h1>Tournament Name: {title}</h1>
        <h2>Date: {date}</h2>
        <h2>Start Time: {time}</h2>
        <h2>Game Type: {game}</h2>
        <h2>Entry Fee: ${fee}</h2>
        <h2>Address of Venue: {address}</h2>
        <p>Things to note: {moreDetails}</p>
      </div>
    );
  }
}

export default TournamentDetails;
