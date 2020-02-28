import config from "../config";
import TokenService from "./TokenService";

const TournamentApiService = {
  getTournaments() {
    console.log("call made");
    return fetch(`${config.API_ENDPOINT}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getTournament(tournamentId) {
    return fetch(`${config.API_ENDPOINT}/${tournamentId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};
export default TournamentApiService;
