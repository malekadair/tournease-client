import React, { Component } from "react";
import { Link } from "react-router-dom";
import TournamentsContext from "../../contexts/tournamentListContext";
import TournamentApiService from "../../services/tournament-api-service";

class Create extends Component {
  // sets context
  static contextType = TournamentsContext;
  constructor() {
    super();
    // state will continuously be updated with each change to these input values
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
    // posts tournament with data from inputs
    TournamentApiService.postTournament(data)
      .then()
      .catch(this.context.setError);

    // redirects to previous page
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    history.push(destination);
  };

  handleChange = event => {
    // makes this a controlled form by continuously updating state upon each change to inputs
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
            // sets up data to be passed into the the handleSubmit func
            const data = this.state;
            this.handleSubmit(event, data);
          }}
        >
          <div className="formInputs">
            <div className="createLabels">
              <label htmlFor="title" className="labelLeft">
                Tournament Title:{" "}
              </label>
              <label htmlFor="date" className="labelLeft">
                Date of Tournament:{" "}
              </label>
              <label htmlFor="time" className="labelLeft">
                Start Time:{" "}
              </label>
              <label className="labelLeft">Game Type: </label>
              <label htmlFor="fee" className="labelLeft">
                Buyin Fee: $
              </label>
              <label htmlFor="address" className="labelLeft">
                Address of Venue:{" "}
              </label>
              <label htmlFor="moredetails" className="labelLeft">
                More Details:{" "}
              </label>
            </div>
            <div className="createInputs">
              <input
                type="text"
                value={title}
                name="title"
                placeholder="e.g. Frank's Weekly 10-ball"
                onChange={this.handleChange}
                required
              />

              <input
                type="date"
                value={date}
                name="date"
                placeholder="Tournament Date"
                onChange={this.handleChange}
                required
              />

              <input
                type="number"
                value={time}
                name="time"
                placeholder="e.g. 10"
                onChange={this.handleChange}
                required
              />

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

              <input
                type="number"
                value={fee}
                name="fee"
                placeholder="e.g. 20"
                onChange={this.handleChange}
                required
              />

              <div className="formItem">
                <input
                  type="text"
                  value={address}
                  name="address"
                  placeholder="e.g. 123 Main St."
                  onChange={this.handleChange}
                  required
                />
              </div>

              <textarea
                type="text"
                value={moredetails}
                name="moredetails"
                placeholder="Additional Details"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="formButtons">
            <button>Create Tournament</button>
            <Link to="/" className="aButton">
              Go Back Home
            </Link>
          </div>
        </form>
      </section>
    );
  }
}

export default Create;
