import React, { Component } from "react";
//import { connect } from "react-redux";
//import { Redirect } from "react-router-dom";
import buyer from "../assets/buyer.png";
import wallet from "../assets/wallet.png";

class buyerMarket extends Component {
  render() {
    const headings = ["Seller ID:", "Rating:", "Sale Quantity:", "Sale price:"];
    const rows = [
      {
        seller_id: "XRW345",
        rating: "4/5",
        sale_quantity: "75 Batches",
        sale_price: "6000i$"
      },
      {
        seller_id: "BA6W49",
        rating: "3.7/5",
        sale_quantity: "100 Batches",
        sale_price: "7500i$"
      },
      {
        seller_id: "IFR781",
        rating: "4.6/5",
        sale_quantity: "60 Batches",
        sale_price: "5400i$"
      }
    ];
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
          <table
            cellSpacing="70"
            style={{ padding: "1.5rem", margin: "2rem", paddingInline: "2rem" }}
          >
            <tr
              style={{
                alignContent: "left",
                justifyContent: "left",
                textAlign: "left",
                alignItems: "left",
                fontSize: "1.5rem",
                fontFamily: "calibri"
              }}
            >
              <th>{headings[0]}</th>
              <th>{headings[1]}</th>
              <th>{headings[2]}</th>
              <th>{headings[3]}</th>
            </tr>
            {rows.map(({ seller_id, rating, sale_quantity, sale_price }) => {
              return (
                <tr style={{ fontSize: "1.5rem", fontFamily: "calibri" }}>
                  <td>{seller_id}</td>
                  <td>{rating}</td>
                  <td>{sale_quantity}</td>
                  <td>{sale_price}</td>
                  <td>
                    <div className="flex-container1">
                      <div>
                        <button className="acc_button">Accept</button>
                      </div>
                      <div>
                        <button className="nego_button">Negotiate</button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}{" "}
          </table>
        </div>
      </div>
    );
  }
}

export default buyerMarket;
