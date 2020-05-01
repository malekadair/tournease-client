import React, { Component } from "react";
import TournamentContext from "../../contexts/tournamentItemContext";
import TournamentApiService from "../../services/tournament-api-service";

class TournamentDetails extends Component {
  static defaultProps = {
    match: { params: {} }
  };
  static contextType = TournamentContext;

  componentDidMount() {
    // gets tournament info by tournament Id
    const { tournid } = this.props.match.params;
    this.context.clearError();
    TournamentApiService.getTournament(tournid)
      // sets returned tournament to context
      .then(this.context.setTournament)
      .catch(this.context.setError);
  }

  componentWillUnmount() {
    // cleans up
    this.context.clearTournament();
  }

  render() {
    // pulls and sets variables from context
    const {
      title,
      date,
      time,
      game,
      fee,
      address,
      moredetails
    } = this.context.tournament;

    // makes date more readable
    const prettyDate = new Date(date).toLocaleString("en-US")
    return (
      // displays tournament details
      <div className="details">
        <h2 className="tourneyTitle">{title}</h2>
        <p className="tourneyText">Date: {prettyDate}</p>
        <p className="tourneyText">Start Time: {time}</p>
        <p className="tourneyText">Game Type: {game}</p>
        <p className="tourneyText">Entry Fee: ${fee}</p>
        <p className="tourneyText">Address of Venue: {address}</p>
        <p className="tourneyText">Things to note: {moredetails}</p>
      </div>
    );
  }
}

export default TournamentDetails;
