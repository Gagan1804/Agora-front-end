import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import person from "../assets/person.png";
import wallet from "../assets/wallet.png";

class Products extends Component {
  state = {
    product: "",
    totalQuantity: "",
    batch: "",
    weight: "",
    price_batch: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const {
      product,
      totalQuantity,
      batch,
      weight,
      price_batch,
      documents,
      orders
    } = this.state;
    // const {
    // return user: { token }
    // } = this.props;
    // token ? (
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

          <div class="flex-container1">
            <label>
              <p className="label3">
                <span style={{ width: "142px", display: "inline-block" }}>
                  Product:
                </span>
                <input
                  type="text"
                  className="field3"
                  name="product"
                  onChange={this.handleInput}
                  value={product}
                  placeholder="Apples"
                />
              </p>
            </label>

            <label>
              <p className="label2">
                <span style={{ width: "142px", display: "inline-block" }}>
                  Total Quantity:
                </span>
                <input
                  type="text"
                  className="field2"
                  name="totalQuantity"
                  onChange={this.handleInput}
                  value={totalQuantity}
                  placeholder="100"
                />
              </p>
            </label>

            <div className="flex-container2">
              <label>
                <p className="label2">
                  <span style={{ width: "142px", display: "inline-block" }}>
                    Batch:
                  </span>
                  <input
                    type="text"
                    className="field2"
                    name="batch"
                    onChange={this.handleInput}
                    value={batch}
                    placeholder="10"
                  />
                </p>
              </label>

              <label>
                <p className="label2">
                  Weight:
                  <input
                    type="text"
                    className="field2"
                    name="weight"
                    onChange={this.handleInput}
                    value={weight}
                    placeholder="3Kg"
                  />
                </p>
              </label>
            </div>

            <div className="flex-container1">
              <label>
                <p className="label2">
                  <span style={{ width: "142px", display: "inline-block" }}>
                    Price/ Batch:
                  </span>
                  <input
                    type="text"
                    className="field2"
                    name="price_batch"
                    onChange={this.handleInput}
                    value={price_batch}
                    placeholder="i$250"
                  />
                </p>
              </label>

              <label>
                <p className="label2">
                  <span style={{ width: "142px", display: "inline-block" }}>
                    Documents:
                  </span>
                  <input
                    type="text"
                    className="field2"
                    name="documents"
                    onChange={this.handleInput}
                    value={documents}
                    placeholder=""
                  />
                </p>
              </label>
            </div>
            <button className="submitProd">Submit</button>
          </div>
        </div>
      </div>
     ); //: (
    //   <Redirect to="/" />
    //);
  }
}

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Products);
