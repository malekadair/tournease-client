import config from "../config";
import TokenService from "./TokenService";

const TournamentApiService = {
  getTournaments() {
    return fetch(`${config.API_BASE_URL}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getTournament(tournamentId) {
    return fetch(`${config.API_BASE_URL}/${tournamentId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postTournament(data) {
    const { title, date, time, game, fee, address, moredetails } = data;

    return fetch(`${config.API_BASE_URL}`, {
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
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};
export default TournamentApiService;
