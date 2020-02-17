import React, { Component } from "react";
import "./App.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import CreateTournament from "../CreateTournament/CreateTournament";
import TournamentList from "../TournamentList/TournamentList";
import TournamentDetails from "../TournamentDetails/TournamentDetails";
import dummyStore from "./dummyStore";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    const { tourneys } = dummyStore;
    super();
    this.state = {
      tournaments: tourneys
    };
  }

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
                const { tournaments } = this.state;
                return <Home {...routeProps} tournaments={tournaments} />;
              }}
            />
            <Route exact path="/create" component={CreateTournament} />
            <Route
              path="/:tournid"
              render={routeProps => {
                const { tournaments } = this.state;
                const { tournid } = routeProps.match.params;
                const foundTournament = tournaments.find(
                  ({ id }) => id == tournid
                );

                return (
                  <TournamentDetails
                    {...routeProps}
                    tournament={foundTournament}
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
