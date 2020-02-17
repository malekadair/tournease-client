import React, { Component } from "react";
import "../App/App.css";
import { Link } from "react-router-dom";
class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <h2>TournEase</h2>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Find Tournaments</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/">Log Out</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
