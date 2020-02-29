import React, { Component } from "react";
import TournamentList from "../TournamentList/TournamentList";
import MainContent from "../MainContent/MainContent";
import TokenService from "../../services/TokenService";

class Home extends Component {
  renderTournamentList = () => {
    return <TournamentList />;
  };
  renderLogin = () => {
    return <MainContent />;
  };
  render() {
    return (
      <div>
        <h1>home</h1>
        {TokenService.hasAuthToken()
          ? this.renderTournamentList()
          : this.renderLogin()}
        {/* <TournamentList /> */}
      </div>
    );
  }
}

export default Home;
