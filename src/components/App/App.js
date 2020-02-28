import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import CreateTournament from "../CreateTournament/CreateTournament";
import TournamentDetails from "../TournamentDetails/TournamentDetails";
import Login from "../Login/Login";
import TokenService from "../../services/TokenService";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
// import config from "../config";
import dummyStore from "./dummyStore";

class App extends Component {
  constructor() {
    const { tourneys } = dummyStore;
    super();
    this.state = {
      tournaments: [],
      isLoading: false
    };
  }
  setTournaments = tournaments => {
    this.setState({
      tournaments,
      error: null
    });
  };

  componentDidMount() {
    fetch(`http://localhost:8000/api/`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error));
        }
        return res.json();
      })
      .then(this.setTournaments);
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
              path={"/"}
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
            <PrivateRoute
              exact
              path={"/create"}
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
            <PublicOnlyRoute
              exact
              path={"/login"}
              component={Login}
              // render={routeProps => {
              //   return (
              //     <Login
              //       tournamentsLength={this.state.tournaments.length + 1}
              //       handleSubmit={this.handleSubmit}
              //       {...routeProps}
              //     />
              //   );
              // }}
            />
            <PrivateRoute
              path={"/:tournid"}
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
