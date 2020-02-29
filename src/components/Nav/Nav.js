import React, { Component } from "react";
import "../App/App.css";
import { Link } from "react-router-dom";
import TokenService from "../../services/TokenService";

class Nav extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  renderLogout() {
    return (
      <div className="Header__logged-in">
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }
  renderLogin() {
    return (
      <div className="Header__not-logged-in">
        <Link to="/login">Log in</Link>
      </div>
    );
  }

  render() {
    return (
      <nav>
        <Link to="/">
          <h1>TournEase</h1>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>|</li>
          <li>
            {TokenService.hasAuthToken()
              ? this.renderLogout()
              : this.renderLogin()}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
