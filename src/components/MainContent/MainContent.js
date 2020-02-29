import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../App/App.css";

class MainContent extends Component {
  render() {
    return (
      <section className="mainContent">
        <h2>What is TournEase?</h2>
        <p>
          Whether you're a pool player or a tournament director, TournEase makes
          <br />
          tournaments easier. Once logged in, you'll be able to find nearby
          <br />
          tournaments, and even create your own. Click the link below to get
          <br />
          logged in so you, too, can take part in this great community!
          <br />
        </p>
        <Link to="/login" className="aButton">
          Get Logged In!
        </Link>
      </section>
    );
  }
}

export default MainContent;
