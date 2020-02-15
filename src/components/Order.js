import React, { Component } from "react";
import person from "../assets/person.png";
import wallet from "../assets/wallet.png";
import LinearProgress from "@material/react-linear-progress";

class Order extends Component {
  state = {
    expand: false,
    count: 0
  };
  render() {
    const { expand, count } = this.state;
    const headings = [
      "Buyer",
      "Logistics",
      "Payment(%)",
      "Delivery",
      "Progress"
    ];
    const rows = [
      {
        buyer: "XRW345",
        payment: "65",
        logistics: "fsfsfs",
        delivery: "sffsfsf"
      },
      {
        buyer: "XRW345",
        payment: "55",
        logistics: "Lo535",
        delivery: "12/10/19"
      },
      {
        buyer: "fsfsf",
        payment: "100",
        logistics: "vewevve",
        delivery: "vvgrvfx"
      },
      {
        buyer: "zqwwdxz",
        payment: "80",
        logistics: "qewqrqr",
        delivery: "wrrert"
      },
      {
        buyer: "Xwewec",
        payment: "70",
        logistics: "vmmnvb",
        delivery: "jmunh"
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

          <div className="flex-container1">
            <div
              style={{
                border: "0.5px solid #a09b9b",
                borderRadius: "1.5rem",
                margin: "2rem 2rem 2rem 10rem"
              }}
            >
              <p
                style={{
                  fontSize: "2rem",
                  marginLeft: "1rem",
                  fontFamily: "calibri",
                  color: "rgb(218, 33, 33)"
                }}
              >
                In progress
              </p>
              <table
                cellSpacing="60"
                style={{
                  margin: "0 1rem 0 1rem"
                }}
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
                  <th>{headings[4]}</th>
                </tr>
                {rows
                  .slice(0, expand ? rows.length : 3)
                  .map(({ buyer, logistics, payment, delivery }) => {
                    return (
                      <tr style={{ fontSize: "1.2rem", fontFamily: "calibri" }}>
                        <td>{buyer}</td>
                        <td>{logistics}</td>
                        <td>{payment}</td>
                        <td>{delivery}</td>
                        <td>
                          <LinearProgress
                            buffer={1}
                            progress={payment / 100}
                            height={2}
                            className="progBar"
                          />
                        </td>
                      </tr>
                    );
                  })}
              </table>
              <button
                style={{
                  backgroundColor: "#ffffff",
                  fontSize: "1rem",
                  padding: "0.5rem",
                  borderRadius: "1rem"
                }}
                onClick={() =>
                  this.setState({
                    expand: !expand
                  })
                }
              >
                See More
              </button>
            </div>

            <div
              style={{
                border: "0.5px solid #a09b9b",
                borderRadius: "1.5rem",
                margin: "2rem 2rem 2rem 10rem"
              }}
            >
              <p
                style={{
                  fontSize: "2rem",
                  marginLeft: "1rem",
                  fontFamily: "calibri",
                  color: "#1b630d"
                }}
              >
                Completed
              </p>
              <table
                cellSpacing="60"
                style={{
                  margin: "0 1rem 0 1rem"
                }}
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
                  <th>{headings[4]}</th>
                </tr>
                {rows
                  .slice(0, expand ? rows.length : 3)
                  .map(({ buyer, logistics, payment, delivery }) => {
                    return (
                      <tr style={{ fontSize: "1.2rem", fontFamily: "calibri" }}>
                        <td>{buyer}</td>
                        <td>{logistics}</td>
                        <td>{payment}</td>
                        <td>{delivery}</td>
                        <td>
                          <LinearProgress
                            buffer={1}
                            progress={payment / 100}
                            height={2}
                            className="progBar"
                          />
                        </td>
                      </tr>
                    );
                  })}
              </table>
              <button
                style={{
                  backgroundColor: "#ffffff",
                  fontSize: "1rem",
                  padding: "0.5rem",
                  borderRadius: "1rem"
                }}
                onClick={() =>
                  this.setState({
                    expand: !expand
                  })
                }
              >
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
