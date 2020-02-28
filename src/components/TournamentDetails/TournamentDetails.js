import React, { Component } from "react";
import TournamentContext from "../../contexts/tournamentItemContext";
import TournamentApiService from "../../services/tournament-api-service";

class TournamentDetails extends Component {
  static defaultProps = {
    match: { params: {} }
  };
  static contextType = TournamentContext;

  componentDidMount() {
    const { tournid } = this.props.match.params;
    this.context.clearError();
    TournamentApiService.getTournament(tournid)
      .then(this.context.setTournament)
      .catch(this.context.setError);
  }

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
    } = this.context.tournament;
    console.log("tournament", this.context.tournament);
    return (
      <div>
        <h1>Tournament Name: {title}</h1>
        <h2>Date: {date}</h2>
        <h2>Start Time: {time}</h2>
        <h2>Game Type: {game}</h2>
        <h2>Entry Fee: ${fee}</h2>
        <h2>Address of Venue: {address}</h2>
        <p>Tournaments to note: {moreDetails}</p>
      </div>
    );
  }
}

export default TournamentDetails;
