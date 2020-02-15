import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import Particles from "react-particles-js";
import { connect } from "react-redux";
import axios from "axios";

import { addToken } from "../actions/user";

import plmp from "../assets/plmp.png";

class SignIn extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLogin = async () => {
    const { username, password } = this.state;
    const { history } = this.props;
    // const login = await axios.post(
    //   "https://32a450aa.ngrok.io/auth/login",
    //   {
    //     username,
    //     password
    //   },
    //   {
    //     withCredentials: true
    //   }
    // );
    // this.props.addToken(login.data);
   // history.push("/products");
  };

  render() {
    const { username, password } = this.state;
    console.log(this.props);
    const {
      user: { token }
    } = this.props;
    return token ? (
      <Redirect to="/products" />
    ) : (
      <div className="container">
        <Particles
          width="100vw"
          height="100vh"
          className="pattern"
          params={{
            particles: {
              number: {
                value: 200,
                density: {
                  enable: true,
                  value_area: 800
                }
              }
            }
          }}
        />
        <div>
          <img src={plmp} className="img" />
        </div>
        <div>
          <h1 className="headline">Agora</h1>
        </div>
        <div className="input-section">
          <label>
            <p className="label1">User ID</p>
            <input
              type="text"
              className="field"
              name="username"
              value={username}
              placeholder="ID"
              onChange={this.handleInput}
            />
          </label>
          <label>
            <p className="label">Password</p>
            <input
              type="password"
              className="field"
              name="password"
              onChange={this.handleInput}
              value={password}
              placeholder="Enter Password"
            />
          </label>
          <button className="button" onClick={this.handleLogin}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = {
  addToken
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withRouter(SignIn));
