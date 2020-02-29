import config from "../config";
import TokenService from "./TokenService";

const TournamentApiService = {
  getTournaments() {
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
  },
  postTournament(data) {
    const { title, date, time, game, fee, address, moredetails } = data;

    return fetch(`${config.API_ENDPOINT}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        title,
        date,
        time,
        game,
        fee,
        address,
        moredetails
        // data
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};
export default TournamentApiService;
