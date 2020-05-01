import React, { Component } from "react";
import TournamentList from "../TournamentList/TournamentList";
import MainContent from "../MainContent/MainContent";
import TokenService from "../../services/TokenService";

class Home extends Component {
  // list of all upcoming tournaments
  renderTournamentList = () => {
    return (
      <div>
        <h2 id="upcoming">Upcoming Tournaments:</h2>
        <TournamentList />
      </div>
    );
  };
  renderLogin = () => {
    // welcome to the app landing page content
    return <MainContent />;
  };
  render() {
    // conditionally renders homepage content
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
