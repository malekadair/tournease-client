import React, { Component } from "react";
import "./App.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import CreateTournament from "../CreateTournament/CreateTournament";
import TournamentDetails from "../TournamentDetails/TournamentDetails";
import Login from "../Login/Login";
import dummyStore from "./dummyStore";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    const { tourneys } = dummyStore;
    super();
    this.state = {
      tournaments: tourneys,
      isLoading: false
    };
  }
  handleSubmit = (event, data) => {
    event.preventDefault();
    const newTournaments = [...this.state.tournaments, data];
    console.log("newtournamanets:", newTournaments);
    this.setState({
      tournaments: newTournaments
    });
  };
  render() {
    return (
      <Router>
        <div className="app">
          <Nav />
          <Switch>
            <Route
              exact
              path="/"
              render={routeProps => {
                const { tournaments, isLoading } = this.state;
                return (
                  <Home
                    {...routeProps}
                    tournaments={tournaments}
                    isLoading={isLoading}
                  />
                );
              }}
            />
            <Route
              exact
              path="/create"
              render={routeProps => {
                return (
                  <CreateTournament
                    tournamentsLength={this.state.tournaments.length + 1}
                    handleSubmit={this.handleSubmit}
                    {...routeProps}
                  />
                );
              }}
            />
            <Route
              exact
              path="/login"
              render={routeProps => {
                return (
                  <Login
                    tournamentsLength={this.state.tournaments.length + 1}
                    handleSubmit={this.handleSubmit}
                    {...routeProps}
                  />
                );
              }}
            />
            <Route
              path="/:tournid"
              render={routeProps => {
                const { tournaments, isLoading } = this.state;
                const { tournid } = routeProps.match.params;
                const foundTournament = tournaments.find(
                  ({ id }) => id == tournid
                );

                return (
                  <TournamentDetails
                    {...routeProps}
                    tournament={foundTournament}
                    isLoading={isLoading}
                  />
                );
              }}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
