import React, { Component } from "react";
import TournamentList from "../TournamentList/TournamentList";
import MainContent from "../MainContent/MainContent";
import TokenService from "../../services/TokenService";

class Home extends Component {
  renderTournamentList = () => {
    return (
      <div>
        <h2 id="upcoming">Upcoming Tournaments:</h2>
        <TournamentList />
      </div>
    );
  };
  renderLogin = () => {
    return <MainContent />;
  };
  render() {
    return (
      <div className="home">
        {TokenService.hasAuthToken()
          ? this.renderTournamentList()
          : this.renderLogin()}
      </div>
    );
  }
}

export default Home;
