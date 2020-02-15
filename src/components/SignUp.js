import React, { Component } from "react";
import Particles from "react-particles-js";
import axios from "axios";
import plmp from "../assets/plmp.png";

class SignUp extends Component {
  state = {
    username: "",
    password: "",
    name: "",
    email: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async () => {
    const { username, password, email, name } = this.state;
    const res = await axios.post("https://32a450aa.ngrok.io/auth/signup", {
      username,
      password,
      email,
      name
    });
    console.log(res);
  };

  render() {
    const { name, email, password, username, confirmPassword } = this.state;
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
          <h1 className="headline">Sign Up Agora</h1>
        </div>
        <div className="input-section">
          <label>
            <p className="label1">Name</p>
            <input
              type="text"
              className="field"
              name="name"
              value={name}
              placeholder="Enter Name"
              onChange={this.handleInput}
            />
          </label>
          <label>
            <p className="label">Email</p>
            <input
              type="text"
              className="field"
              name="email"
              onChange={this.handleInput}
              value={email}
              placeholder="Enter Email"
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
          <label>
            <p className="label">Username</p>
            <input
              type="text"
              className="field"
              name="username"
              onChange={this.handleInput}
              value={username}
              placeholder="Enter Username"
            />
          </label>

          <button className="button" onClick={this.handleSubmit}>
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}
export default SignUp;
