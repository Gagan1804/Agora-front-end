import React, { Component } from "react";
import person from "../assets/person.png";
import wallet from "../assets/wallet.png";

class Bids extends Component {
  render() {
    const headings = ["Buyer ID:", "Rating:", "Order Request:", "Bid:"];
    const rows = [
      {
        buyer_id: "XRW345",
        rating: "4/5",
        odr_req: "75 Batches",
        bid: "6000i$"
      },
      {
        buyer_id: "BA6W49",
        rating: "3.7/5",
        odr_req: "100 Batches",
        bid: "7500i$"
      },
      {
        buyer_id: "IFR781",
        rating: "4.6/5",
        odr_req: "60 Batches",
        bid: "5400i$"
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

            <div>
              <a href="" className="wallet">
                Wallet
              </a>
            </div>
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
            {rows.map(({ buyer_id, rating, odr_req, bid }) => {
              return (
                <tr style={{ fontSize: "1.5rem", fontFamily: "calibri" }}>
                  <td>{buyer_id}</td>
                  <td>{rating}</td>
                  <td>{odr_req}</td>
                  <td>{bid}</td>
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

export default Bids;
