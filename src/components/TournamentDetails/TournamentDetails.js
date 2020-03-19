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

  componentWillUnmount() {
    this.context.clearTournament();
  }

  render() {
    const {
      title,
      date,
      time,
      game,
      fee,
      address,
      moredetails
    } = this.context.tournament;
    return (
      <div className="details">
        <h2 className="tourneyTitle">{title}</h2>
        <p className="tourneyText">Date: {date}</p>
        <p className="tourneyText">Start Time: {time}</p>
        <p className="tourneyText">Game Type: {game}</p>
        <p className="tourneyText">Entry Fee: ${fee}</p>
        <p className="tourneyText">Address of Venue: {address}</p>
        <p>Things to note: {moredetails}</p>
      </div>
    );
  }
}

export default TournamentDetails;
