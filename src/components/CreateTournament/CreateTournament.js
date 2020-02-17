import React, { Component } from "react";

class Create extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      date: "",
      time: "",
      game: "",
      fee: "",
      address: "",
      moreDetails: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }
  handleSubmit(event) {
    console.log(event);
  }
  render() {
    const { title, date, time, game, fee, address, moreDetails } = this.state;
    return (
      <section className="signup">
        <form onSubmit={this.handleSubmit}>
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
              type="text"
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
              type="text"
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
            {/* <input
              type="text"
              value={game}
              name="game"
              placeholder="Game"
              onChange={this.handleChange}
            /> */}
            <label>Game Type: </label>
            <select
              value={this.state.game}
              onChange={this.handleChange}
              name="game"
              required
            >
              <option value="">Please Select</option>
              <option value="8ball">8-Ball</option>
              <option value="9ball">9-Ball</option>
              <option value="10ball">10-Ball</option>
              <option value="onePocket">One-Pocket</option>
              <option value="straight">Straight Pool</option>
            </select>
            <p>{game}</p>
          </div>
          <br />

          <div>
            <input
              type="text"
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
              value={moreDetails}
              name="moreDetails"
              placeholder="Additional Details"
              onChange={this.handleChange}
              required
            />
            <p>{moreDetails}</p>
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
