import React, { Component } from "react";
import { Link } from "react-router-dom";
import TournamentsContext from "../../contexts/tournamentListContext";
import TournamentApiService from "../../services/tournament-api-service";

class Create extends Component {
  static contextType = TournamentsContext;
  constructor() {
    super();
    this.state = {
      title: "",
      date: "",
      time: "",
      game: "",
      fee: "",
      address: "",
      moredetails: ""
    };
  }

  handleSubmit = (ev, data) => {
    ev.preventDefault();

    TournamentApiService.postTournament(data)
      .then()
      .catch(this.context.setError);
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    history.push(destination);
  };

  handleChange = event => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };

  render() {
    const { title, date, time, fee, address, moredetails } = this.state;
    return (
      <section className="create">
        <form
          onSubmit={event => {
            const data = this.state;
            this.handleSubmit(event, data);
          }}
        >
          <div className="formItem">
            <label htmlFor="title">Tournament Title: </label>
            <input
              type="text"
              value={title}
              name="title"
              placeholder="e.g. Frank's Weekly 10-ball"
              onChange={this.handleChange}
              required
            />
          </div>
          <br />

          <div className="formItem">
            <label htmlFor="date">Date of Tournament: </label>
            <input
              type="date"
              value={date}
              name="date"
              placeholder="Tournament Date"
              onChange={this.handleChange}
              required
            />
          </div>
          <br />

          <div className="formItem">
            <label htmlFor="time">Start Time: </label>
            <input
              type="number"
              value={time}
              name="time"
              placeholder="e.g. 10"
              onChange={this.handleChange}
              required
            />
          </div>
          <br />

          <div className="formItem">
            <label>Game Type: </label>
            <select
              value={this.state.game}
              onChange={this.handleChange}
              name="game"
              required
            >
              <option value="">Please Select</option>
              <option value="8-Ball">8-Ball</option>
              <option value="9-Ball">9-Ball</option>
              <option value="10-Ball">10-Ball</option>
              <option value="OnePocket">One-Pocket</option>
              <option value="Straight">Straight Pool</option>
            </select>
          </div>
          <br />

          <div className="formItem">
            <label htmlFor="fee">Buyin Fee: $</label>
            <input
              type="number"
              value={fee}
              name="fee"
              placeholder="e.g. 20"
              onChange={this.handleChange}
              required
            />
          </div>
          <br />

          <div className="formItem">
            <label htmlFor="address">Address of Venue: </label>
            <input
              type="text"
              value={address}
              name="address"
              placeholder="e.g. 123 Main St."
              onChange={this.handleChange}
              required
            />
          </div>
          <br />

          <div className="formItem">
            <label htmlFor="moredetails">More Details: </label>
            <textarea
              type="text"
              value={moredetails}
              name="moredetails"
              placeholder="Additional Details"
              onChange={this.handleChange}
              required
            />
          </div>
          <br />

          <button>Create Tournament</button>
          <Link to="/" className="aButton">
            Go Back Home
          </Link>
        </form>
      </section>
    );
  }
}

export default Create;
