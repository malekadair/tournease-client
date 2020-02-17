import React, { Component } from "react";
import TournamentList from "../TournamentList/TournamentList";

class Home extends Component {
  render() {
    const { tournaments, isLoading } = this.props;
    return (
      <div>
        <TournamentList tournaments={tournaments} isLoading={isLoading} />
      </div>
    );
  }
}

export default Home;
