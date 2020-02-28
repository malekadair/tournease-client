import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";
import TokenService from "../../services/TokenService";

class Login extends Component {
  constructor(props) {
    super(props);
  }
  state = { error: null };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    history.push(destination);
  };
  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.handleLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <section className="login">
        <h1>Login</h1>
        <form className="loginForm" onSubmit={this.handleSubmitJwtAuth}>
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <label htmlFor="user_name">user_name:</label>
          <input
            type="text"
            name="user_name"
            value={this.state.user_name}
            required
          />
          <br />

          <label htmlFor="password">password:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            required
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </section>
    );
  }
}

export default Login;
