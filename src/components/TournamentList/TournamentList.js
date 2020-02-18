import React, { Component } from "react";
import Tournament from "../Tournament/Tournament";
import Loading from "../Loading/Loading";

class TournamentList extends Component {
  render() {
    const { tournaments, isLoading } = this.props;
    const tourneyList = tournaments.map(tourney => {
      return <Tournament key={tourney.id} tourney={tourney} />;
    });
    return (
      <div>
        <h1>Tournaments</h1>
        {isLoading ? <Loading /> : <section>{tourneyList}</section>}
      </div>
    );
  }
}

export default TournamentList;
