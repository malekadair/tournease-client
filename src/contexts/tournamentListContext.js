import React, { Component } from "react";

const TournamentsContext = React.createContext({
  tournaments: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setTournaments: () => {}
});
export default TournamentsContext;

export class TournamentsProvider extends Component {
  state = {
    tournaments: [],
    error: null
  };

  setTournaments = tournaments => {
    this.setState({ tournaments });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  // setTournament = tournament => {
  //   this.setState({ ...this.state.tournaments, tournament });
  // };

  render() {
    const value = {
      tournaments: this.state.tournaments,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTournaments: this.setTournaments
    };
    return (
      <TournamentsContext.Provider value={value}>
        {this.props.children}
      </TournamentsContext.Provider>
    );
  }
}
