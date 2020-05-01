import React, { Component } from "react";
import { Link } from "react-router-dom";

class Tournament extends Component {
  render() {
    // deconstructs variables from props
    const { title, date, time, game, fee, address, id } = this.props.tournament;

    return (
      <Link to={`/${id}`}>
        <div className="tournament">
          <h2>{title}</h2>
          <p className="cardText">{date}</p>
          <p className="cardText">Start Time: {time}</p>
          <p className="cardText">{game}</p>
          <p className="cardText">Entry fee: ${fee}</p>
          <p className="cardText">{address}</p>
        </div>
      </Link>
    );
  }
}

export default Tournament;
