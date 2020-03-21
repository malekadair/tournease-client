import React, { Component } from "react";

const TournamentContext = React.createContext({
  tournament: {},
  error: null,
  setError: () => {},
  clearError: () => {},
  setTournament: () => {},
  clearTournament: () => {},
  setReviews: () => {},
  addReview: () => {}
});

export default TournamentContext;

export class TournamentProvider extends Component {
  state = {
    tournament: {},
    error: null
  };

  setError = error => {
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setTournament = tournament => {
    this.setState({ tournament });
  };

  clearTournament = () => {
    this.setTournament({});
  };

  render() {
    const value = {
      tournament: this.state.tournament,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTournament: this.setTournament,
      clearTournament: this.clearTournament
    };
    return (
      <TournamentContext.Provider value={value}>
        {this.props.children}
      </TournamentContext.Provider>
    );
  }
}
