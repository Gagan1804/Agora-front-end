import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import person from "../assets/person.png";
import wallet from "../assets/wallet.png";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Tracking extends Component {
  state = {
    buyerId: "",
    logisticId: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { buyerId, logisticId } = this.state;

    return (
      <div className="container2">
        <div className="flex-container2">
          <div>
            <button className="backArrow" color="transparent">
              <i className="fa fa-arrow-left" />
            </button>
          </div>
          <div>
            <img src={person} className="personImg" />
          </div>

          <div className="flex-container2">
            <div className="flex-container1">
              <div>
                <h1 className="header">Good Evening, Stephen</h1>
              </div>

              <div>
                <h2 className="subhead">Blockchain Framework</h2>
              </div>
            </div>

            <div className="order">
              <label>
                <input
                  type="text"
                  name="orders"
                  className="outfield"
                  value="Orders: 08"
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
              <button className="button2">Bids</button>
            </div>
            <div>
              <button className="button2">Orders</button>
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
                      Buyer ID:
                    </span>
                    <input
                      type="text"
                      className="field3"
                      name="buyerId"
                      onChange={this.handleInput}
                      value={buyerId}
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
                <p>Logistic ID: </p>
                <p>Milestones: </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tracking;
