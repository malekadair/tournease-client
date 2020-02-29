import React, { Component } from "react";
import Tournament from "../Tournament/Tournament";
// import Loading from "../Loading/Loading";
import TournamentApiService from "../../services/tournament-api-service";
// import TokenService from "../../services/TokenService";
import TournamentsContext from "../../contexts/tournamentListContext";

class TournamentList extends Component {
  static contextType = TournamentsContext;
  componentDidMount() {
    // fetch(`http://localhost:8000/api/`, {
    //   method: "GET",
    //   headers: {
    //     "content-type": "application/json",
    //     authorization: `bearer ${TokenService.getAuthToken()}`
    //   }
    // })
    //   .then(res => {
    //     if (!res.ok) {
    //       return res.json().then(error => Promise.reject(error));
    //     }
    //     return res.json();
    //   })
    //   // .then(this.setTournaments)
    //   .then(this.context.setTournaments)
    //   .catch(this.context.setError);

    this.context.clearError();
    TournamentApiService.getTournaments()
      .then(this.context.setTournaments)
      .catch(this.context.setError);
  }
  renderTournaments() {
    const { tournaments = [] } = this.context;
    return tournaments.map(tournament => (
      <Tournament key={tournament.id} tournament={tournament} />
    ));
  }

  render() {
    const { error } = this.context;
    return (
      <section list className="TournamentPage">
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          this.renderTournaments()
        )}
      </section>
    );
  }
  // render() {
  //   const { tournaments, isLoading } = this.props;
  //   const tourneyList = tournaments.map(tourney => {
  //     return <Tournament key={tourney.id} tourney={tourney} />;
  //   });
  //   return (
  //     <div>
  //       <h1>Tournaments</h1>
  //       {isLoading ? <Loading /> : <section>{tourneyList}</section>}
  //     </div>
  //   );
  // }
}

export default TournamentList;
