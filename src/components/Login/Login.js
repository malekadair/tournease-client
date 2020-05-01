import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";
import TokenService from "../../services/TokenService";

class Login extends Component {
  state = { error: null };

  handleLoginSuccess = () => {
    // routes back to previous page
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    history.push(destination);
  };
  // submits jwt auth and posts login if no error
  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        // resets fields of inputs
        user_name.value = "";
        password.value = "";
        // saves auth token to local storage
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
        <h2>Login</h2>
        <div className="loginText">
          <p>To demo the platform use:</p>
          <p>User Name: admin</p>
          <p>Password: admin</p>
        </div>
        <form className="loginForm" onSubmit={this.handleSubmitJwtAuth}>
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <div className="formItem">
            <label htmlFor="user_name">User Name:</label>
            <input
              type="text"
              name="user_name"
              value={this.state.user_name}
              required
            />
          </div>
          <br />
          <div className="formItem">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              required
            />
          </div>
          <br />
          <button type="submit">Login</button>
        </form>
      </section>
    );
  }
}

export default Login;
