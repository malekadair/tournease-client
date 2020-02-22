import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };

  render() {
    return (
      <section className="login">
        <h1>Login</h1>
        <form className="loginForm">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            required
            onChange={this.handleChange}
          />
          <br />

          <label htmlFor="password">password:</label>
          <input
            type="text"
            name="password"
            value={this.state.password}
            required
            onChange={this.handleChange}
          />
          <br />
          <button>Login</button>
        </form>
      </section>
    );
  }
}

export default Login;
