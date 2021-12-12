import React from "react";
import { ReactComponent as Logo } from "../../assets/instagram.svg";
import "./login.css";
class Login extends React.Component {
  state = {
    email: "admin",
    pwd: "password",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.isLogin(true);
  };
  render() {
    return (
      <div className="div-login">
        <div className="div-login-logo">
          <Logo />
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              ype="text"
              name="name"
              placeholder="username..."
              required
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="pwd"
              placeholder="password..."
              required
              onChange={this.handleChange}
            />
            <button onSubmit={this.handleSubmit}>Log In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
