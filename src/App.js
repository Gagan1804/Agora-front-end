import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Products from "./components/Products";
import Network from "./components/Network";
import Bids from "./components/Bids";
import Channel from "./components/Channel";
import Dashboard from "./components/Dashboard";
import Nodes from "./components/Nodes";
import Tracking from "./components/Tracking";
import Order from "./components/Order";
import buyerSignIn from "./components/buyerSignIn";
import buyerProducts from "./components/buyerProducts";
import buyerMarket from "./components/buyerMarket";
import buyerTracking from "./components/buyerTracking";
import buyerPurchase from "./components/buyerPurchase";

import "@material/react-linear-progress/dist/linear-progress.css";
import "./styles/style1.css";

class App extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <Router>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/products" component={Products} />
        <Route path="/network" component={Network} />
        <Route path="/bids" component={Bids} />
        <Route path="/channel" component={Channel} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/nodes" component={Nodes} />
        <Route path="/tracking" component={Tracking} />
        <Route path="/order" component={Order} />
        <Route path="/buyerSignIn" component={buyerSignIn} />
        <Route path="/buyerProducts" component={buyerProducts} />
        <Route path="/buyerMarket" component={buyerMarket} />
        <Route path="/buyerTracking" component={buyerTracking} />
        <Route path="/buyerPurchase" component={buyerPurchase} />
      </Router>
    );
  }
}
export default App;
