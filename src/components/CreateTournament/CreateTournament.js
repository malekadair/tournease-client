import React, { Component } from "react";
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
    // const { thing } = this.context;
    // const { text, rating } = ev.target;

    TournamentApiService.postTournament(data)
      .then()
      .catch(this.context.setError);
  };

  handleChange = event => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };

  render() {
    const { title, date, time, game, fee, address, moredetails } = this.state;
    return (
      <section className="signup">
        <form
          onSubmit={event => {
            const data = this.state;
            this.handleSubmit(event, data);
          }}
        >
          <div>
            <input
              type="text"
              value={title}
              name="title"
              placeholder="Tournament Name"
              onChange={this.handleChange}
              required
            />
            <p>{title}</p>
          </div>
          <br />

          <div>
            <input
              type="date"
              value={date}
              name="date"
              placeholder="Tournament Date"
              onChange={this.handleChange}
              required
            />
            <p>{date}</p>
          </div>
          <br />

          <div>
            <input
              type="number"
              value={time}
              name="time"
              placeholder="Start Time"
              onChange={this.handleChange}
              required
            />
            <p>{time}</p>
          </div>
          <br />

          <div>
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
            <p>{game}</p>
          </div>
          <br />

          <div>
            <input
              type="number"
              value={fee}
              name="fee"
              placeholder="Buyin Fee"
              onChange={this.handleChange}
              required
            />
            <p>{fee}</p>
          </div>
          <br />

          <div>
            <input
              type="text"
              value={address}
              name="address"
              placeholder="Venue Address"
              onChange={this.handleChange}
              required
            />
            <p>{address}</p>
          </div>
          <br />

          <div>
            <textarea
              type="text"
              value={moredetails}
              name="moredetails"
              placeholder="Additional Details"
              onChange={this.handleChange}
              required
            />
            <p>{moredetails}</p>
          </div>
          <br />

          <button>Create Tournament</button>
          <button type="button">Back</button>
          <br />
          <button type="reset">Reset Form</button>
        </form>
      </section>
    );
  }
}

export default Create;
