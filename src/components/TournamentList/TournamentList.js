import React, { Component } from "react";
import Tournament from "../Tournament/Tournament";
class TournamentList extends Component {
  render() {
    console.log("route props:", this.props);
    const { tournaments } = this.props;
    const tourneyList = tournaments.map(tourney => {
      return <Tournament key={tourney.id} tourney={tourney} />;
    });
    return (
      <div>
        <h1>Tournament</h1>
        <section>{tourneyList}</section>
        {/* <Tournament name={name} game={game} details={details} /> */}
      </div>
    );
  }
}

export default TournamentList;
