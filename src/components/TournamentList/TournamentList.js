import React, { Component } from "react";
import Tournament from "../Tournament/Tournament";
import TournamentApiService from "../../services/tournament-api-service";
import TournamentsContext from "../../contexts/tournamentListContext";

class TournamentList extends Component {
  static contextType = TournamentsContext;
  componentDidMount() {
    this.context.clearError();
    TournamentApiService.getTournaments()
      .then(this.context.setTournaments)
      .catch(this.context.setError);
  }
  renderTournaments() {
    const { tournaments = [] } = this.context;
    return tournaments.reverse().map(tournament => (
      <Tournament key={tournament.id} tournament={tournament} />
    ));
  }

  render() {
    const { error } = this.context;
    return (
      <section className="tournamentList">
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
            this.renderTournaments()
          )}
      </section>
    );
  }
}

export default TournamentList;
