import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import CreateTournament from "../CreateTournament/CreateTournament";
import TournamentDetails from "../TournamentDetails/TournamentDetails";
import Login from "../Login/Login";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
import { TournamentsProvider } from "../../contexts/tournamentListContext";
import { TournamentProvider } from "../../contexts/tournamentItemContext";

class App extends Component {
// Handles tournament form submission and sets new state
  handleSubmit = (event, data) => {
    event.preventDefault();
    const newTournaments = [...this.state.tournaments, data];
    this.setState({
      tournaments: newTournaments
    });
  };

  render() {
    return (
      <TournamentsProvider>
        <TournamentProvider>
          <Router>
            <div className="app">
              <Nav />
              <Switch>
                {/*  */}
                <Route exact path={"/"} component={Home} />
                <PrivateRoute
                  exact
                  path={"/create"}
                  component={CreateTournament}
                />
                <PublicOnlyRoute exact path={"/login"} component={Login} />
                <PrivateRoute
                  path={"/:tournid"}
                  component={TournamentDetails}
                />
              </Switch>
            </div>
          </Router>
        </TournamentProvider>
      </TournamentsProvider>
    );
  }
}

export default App;
