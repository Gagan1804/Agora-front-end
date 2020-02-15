import React, { Component } from "react";
//import { connect } from "react-redux";
//import { Redirect } from "react-router-dom";
import buyer from "../assets/buyer.png";
import plus from "../assets/plus.png";
import wallet from "../assets/wallet.png";

/*
{items.map((item, index) => )}

Steps to make the add functionality
1) Initialise a state - items = ['Apples']
2) Render the first element with the plus button
3) Onclick plus button change the state - do items.push('Apples')
*/

class buyerProducts extends Component {
  state = {
    fruit: "",
    price_range_batch: "",
    unit: "",
    distance_units: "",
    distance: "",
    items: ["Apples"]
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleAddFruit = () => {
    const items = this.state.items;
    items.push(" Mango");
    this.setState({
      items: items
    });
  };

  render() {
    const {
      price_range_batch,
      unit,
      distance_units,
      distance,
      items
    } = this.state;

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

          <div class="flex-container1">
            <label>
              <p className="label3">
                <span style={{ width: "195px", display: "inline-block" }}>
                  Category:
                </span>
                <select
                  style={{
                    width: "10rem",
                    height: "2.5rem",
                    border: "0.5px solid #a09b9b",
                    borderRadius: "1.5rem",
                    margin: "1rem",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    fontSize: "1.5rem"
                  }}
                >
                  <option>-Select-</option>
                  <option>Fruits</option>
                </select>
              </p>
            </label>

            <label>
              <p className="label3">
                <span style={{ width: "185px", display: "inline-block" }}>
                  Fruit:
                </span>
                <h4>{items}</h4>
                <button
                  onClick={this.handleAddFruit}
                  style={{
                    width: "3.8rem",
                    height: "2.8rem",
                    backgroundColor: "transparent",
                    border: "0.5px solid #a09b9b",
                    borderRadius: "1rem",
                    margin: "0.5rem 0.5rem 0 0.5rem"
                  }}
                >
                  <img
                    src={plus}
                    style={{ width: "1.5rem", height: "1.5rem" }}
                  />
                </button>
              </p>
            </label>

            <label>
              <p className="label3">
                <span style={{ width: "185px", display: "inline-block" }}>
                  Price Range/Batch:
                </span>
                <input
                  type="text"
                  className="field_unit"
                  name="unit"
                  onChange={this.handleInput}
                  value={unit}
                  placeholder="unit.."
                />

                <input
                  type="text"
                  className="field_price"
                  name="price_range_batch"
                  onChange={this.handleInput}
                  value={price_range_batch}
                  placeholder="Price range.."
                />
              </p>
            </label>

            <label>
              <p className="label3">
                <span style={{ width: "185px", display: "inline-block" }}>
                  Distance:
                </span>
                <input
                  type="text"
                  className="field_unit"
                  name="distance_units"
                  onChange={this.handleInput}
                  value={distance_units}
                  placeholder="unit.."
                />

                <input
                  type="text"
                  className="field_price"
                  name="distance"
                  onChange={this.handleInput}
                  value={distance}
                  placeholder="Distance range.."
                />
              </p>
            </label>
            <div>
              <button className="submitProd">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default buyerProducts;

//class PlataOrSilver extends React.Component {
//   state = {
//     gagan: true,
//     youtubeChannels: ["Ashish Chanchalani"]
//   };

//   handleClick = () => {
//     let gagan = this.state;
//     let youtubeChannels = this.state.youtubeChannels;
//     youtubeChannels.push('BB ki Vines')
//     this.setState({
//       youtubeChannels: youtubeChannels
//     })
//   };

// render() {
//   console.log(this);
//   const gagan = this.state.gagan;
//   const youtubeChannels = this.state.youtubeChannels;
//   return (
//     <div>
//       {this.props.plata ? (
//         <p>Plata {this.props.name}</p>
//       ) : (
//         <p>Silver {this.props.name}</p>
//       )}
//       <button onClick={this.handleClick}>
//         {gagan ? "Meraa naa Gagan" : "Amaar naam Ankit"}
//       </button>
//       {youtubeChannels.map(data => (
//         <p>{data}</p>
//       ))}
//     </div>
//   );
// }
