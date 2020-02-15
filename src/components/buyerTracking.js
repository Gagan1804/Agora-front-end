import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
//import { connect } from "react-redux";
//import { Redirect } from "react-router-dom";
import buyer from "../assets/buyer.png";
import wallet from "../assets/wallet.png";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class buyerTracking extends Component {
  state = {
    sellerId: "",
    logisticId: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { sellerId, logisticId } = this.state;
    return (
      <div className="container2">
        <div className="flex-container2">
          <div>
            <button className="backArrow" color="transparent">
              <i className="fa fa-arrow-left" />
            </button>
          </div>
          <div>
            <img src={buyer} className="personImg" />
          </div>

          <div className="flex-container2">
            <div className="flex-container1">
              <div>
                <h1 className="header" style={{ marginBottom: "2rem" }}>
                  Good Evening, Bruce
                </h1>
              </div>
            </div>

            <div className="id">
              <label>
                <input
                  type="text"
                  name="orders"
                  className="outfield"
                  value="Bo9833"
                />
              </label>
            </div>

            <div>
              <img src={wallet} className="walletImg" />
            </div>
          </div>

          <div>
            <a href="" className="wallet">
              Wallet
            </a>
          </div>
        </div>

        <div class="flex-container3">
          <div class="flex-container1">
            <div>
              <button className="button3">Products</button>
            </div>
            <div>
              <button className="button2">Market</button>
            </div>
            <div>
              <button className="button2">Purchase</button>
            </div>
            <div>
              <button className="button2">Tracking</button>
            </div>
          </div>

          <div className="flex-contaienr1">
            <div className="flex-container2">
              <div>
                <label>
                  <p className="label3">
                    <span style={{ width: "110px", display: "inline-block" }}>
                      Seller ID:
                    </span>
                    <input
                      type="text"
                      className="field3"
                      name="sellerId"
                      onChange={this.handleInput}
                      value={sellerId}
                      placeholder="XRW345"
                    />
                  </p>
                </label>
              </div>
              <div>
                <label>
                  <p className="label3">
                    <span style={{ width: "110px", display: "inline-block" }}>
                      Logistic ID:
                    </span>
                    <input
                      type="text"
                      className="field3"
                      name="logisticId"
                      onChange={this.handleInput}
                      value={logisticId}
                      placeholder="Lo87234"
                    />
                  </p>
                </label>
              </div>
            </div>
            <button className="srch_button">Search</button>
            <div
              className="flex-container9"
              style={{
                height: "100%",
                width: "60rem",
                margin: "1rem 10rem 5rem 10rem"
              }}
            >
              <GoogleMapReact
                defaultCenter={{ lat: 12.9393437, lng: 77.67933 }}
                defaultZoom={15}
                bootstrapURLKeys={{
                  key: "AIzaSyBnjRZAHqrP5Flir8iuhmBmJlOr7qKlSTE",
                  libraries: ["places"]
                }}
              >
                <AnyReactComponent
                  lat={12.9393437}
                  lng={77.67933}
                  text={"Wheres Waldo?"}
                />
              </GoogleMapReact>

              <div className="map_details">
                <p>Logistic ID: </p>
                <p>Track No.: </p>
                <p>ETA: </p>
                <p>Milestones: </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default buyerTracking;
