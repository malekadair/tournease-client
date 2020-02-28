import React, { Component } from "react";
import TournamentList from "../TournamentList/TournamentList";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>home</h1>
        <TournamentList />
      </div>
    );
  }
}

export default Home;
