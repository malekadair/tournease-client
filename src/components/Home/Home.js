import React, { Component } from "react";
import TournamentList from "../TournamentList/TournamentList";

class Home extends Component {
  render() {
    const { tournaments } = this.props;
    console.log(tournaments);
    return (
      <div>
        <TournamentList tournaments={tournaments} />
      </div>
    );
  }
}

export default Home;
