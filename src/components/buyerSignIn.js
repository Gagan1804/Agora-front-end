import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import Particles from "react-particles-js";
import { connect } from "react-redux";
import axios from "axios";

import plmp from "../assets/plmp.png";

class buyerSignIn extends Component {
  state = {
    buyerId: "",
    buyerPassword: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { buyerId, buyerPassword } = this.state;
    console.log(this.props);
    return (
      <div className="container3">
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
            <p className="label1">Buyer ID</p>
            <input
              type="text"
              className="field"
              name="buyerId"
              value={buyerId}
              placeholder="Enter Buyer ID"
              onChange={this.handleInput}
            />
          </label>
          <label>
            <p className="label">Password</p>
            <input
              type="password"
              className="field"
              name="buyerPassword"
              onChange={this.handleInput}
              value={buyerPassword}
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

export default buyerSignIn;
