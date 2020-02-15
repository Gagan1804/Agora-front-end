import React, { Component } from "react";
import plmp from "../assets/plmp.png";
import person from "../assets/person.png";
import "react-circular-progressbar/dist/styles.css";
import LinearProgress from "@material/react-linear-progress";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

class Dashboard extends Component {
  myFunction = () => {
    const tempDate = new Date();
    const date =
      tempDate.getFullYear() +
      "-" +
      (tempDate.getMonth() + 1) +
      "-" +
      tempDate.getDate() +
      " " +
      tempDate.getHours() +
      ":" +
      tempDate.getMinutes() +
      ":" +
      tempDate.getSeconds();
    return date;
  };

  render() {
    return (
      <div className="flex-container1">
        <div className="flex-container4">
          <div>
            <img src={plmp} className="logo" />
          </div>

          <div>
            <h1 className="networkHead">Agora</h1>
          </div>
        </div>

        <div className="flex-container4">
          <div>
            <h2 className="networkSubHead">So0967</h2>
          </div>

          <div>
            <img src={person} className="smallPerson" />
          </div>
        </div>

        <div className="flex-container2">
          <div className="buttonBar">
            <button className="navButton">Dashboard</button>
            <button className="navButton">Network</button>
            <button className="navButton">Nodes</button>
            <button className="navButton">Channels</button>
          </div>
        </div>

        <div className="networkDiv">
          <div className="flex-container5">
            <div className="networkDiv2">Summary</div>
            <div className="networkDiv3" />
          </div>

          <div className="flex-container6">
            <div className="flex-container7">
              <div className="nDiv1">11</div>
              <div className="nDiv2">Channels</div>
            </div>

            <div className="flex-container7">
              <div className="nDiv1">02</div>
              <div className="nDiv2">Peers</div>
            </div>

            <div className="flex-container7">
              <div className="nDiv1">01</div>
              <div className="nDiv2">Orders</div>
            </div>

            <div className="flex-container7">
              <div className="nDiv1">11</div>
              <div className="nDiv2">Chaincode</div>
            </div>

            <div className="flex-container7">
              <div className="nDiv1">04</div>
              <div className="nDiv2">Participating Organisation</div>
            </div>
          </div>
        </div>

        <div className="flex-container2">
          <div
            className="flex-container1"
            style={{
              padding: "2rem",
              border: "0.5px solid #a09b9b",
              borderRadius: "1.5rem",
              margin: "1rem 5rem 2rem 3rem",
              width: "20rem"
            }}
          >
            <p style={{ fontSize: "2rem", fontFamily: "calibri" }}>Health</p>
            <div
              flex-container2
              style={{ borderBlockEnd: "0.5px solid #a09b9b" }}
            >
              <CircularProgressbar
                style={{ fontFamily: "calibri", margin: "0 0 0 2rem" }}
                value={70}
                text={`${70}% running`}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "16px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Colors
                  pathColor: `rgb(78, 209, 52)`,
                  textColor: "#265D67",
                  trailColor: "rgb(218, 33, 33)",
                  backgroundColor: "rgb(78, 209, 52)"
                })}
              />
              <p style={{ fontSize: "1.2rem", fontFamily: "calibri" }}>
                <span className="green_dot" /> 7 nodes running
              </p>
              <p style={{ fontSize: "1.2rem", fontFamily: "calibri" }}>
                <span className="red_dot" /> 3 nodes stopped
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  fontFamily: "calibri",
                  fontStyle: "italic"
                }}
              >
                update:{this.myFunction()}
              </p>
            </div>

            <div>
              <p style={{ fontSize: "2rem", fontFamily: "calibri" }}>
                Partition Utilization
              </p>
            </div>

            <div>
              <label className="flex-container2">
                <LinearProgress
                  buffer={1}
                  progress={0.03}
                  height={2}
                  className="progBar"
                />
                <p
                  style={{
                    fontSize: "1rem",
                    fontFamily: "calibri",
                    margin: "0 0 1rem 1rem"
                  }}
                >
                  3% CPU
                </p>
              </label>

              <label className="flex-container2">
                <LinearProgress
                  buffer={1}
                  progress={0.14}
                  height={2}
                  className="progBar"
                />
                <p
                  style={{
                    fontSize: "1rem",
                    fontFamily: "calibri",
                    margin: "0 0 1rem 1rem"
                  }}
                >
                  14% Memory
                </p>
              </label>

              <label className="flex-container2">
                <LinearProgress
                  buffer={1}
                  progress={0.1}
                  height={2}
                  className="progBar"
                />
                <p
                  style={{
                    fontSize: "1rem",
                    fontFamily: "calibri",
                    margin: "0 0 1rem 1rem"
                  }}
                >
                  10% Disk
                </p>
              </label>
            </div>
          </div>

          <div className="flex-container1">
            <select
              style={{
                width: "10rem",
                height: "1.5rem",
                border: "0.5px solid #a09b9b",
                borderRadius: "1.5rem",
                margin: "1rem"
              }}
            >
              <option value="select">-Select-</option>
              <option value="last_day">Last Day</option>
            </select>
            <div
              className="flex-container1"
              style={{
                padding: "2rem",
                border: "0.5px solid #a09b9b",
                borderRadius: "1.5rem",
                margin: "1rem",
                height: "40rem"
              }}
            >
              <div style={{ borderBlockEnd: "0.5px solid #a09b9b" }}>
                <p style={{ fontSize: "2rem", fontFamily: "calibri" }}>
                  Channel Activity
                </p>
                <p
                  style={{
                    fontSize: "1.5rem",
                    fontFamily: "calibri",
                    color: "#265d67"
                  }}
                >
                  Blocks: 165
                </p>
                <p
                  style={{
                    fontSize: "1.5rem",
                    fontFamily: "calibri",
                    color: "#265d67"
                  }}
                >
                  User Transactions: 157
                </p>
              </div>

              <div>
                <p
                  style={{
                    fontSize: "2rem",
                    fontFamily: "calibri"
                  }}
                >
                  Top Channel by User Interactions
                </p>

                <label className="flex-container2">
                  <p
                    style={{
                      fontSize: "1.7rem",
                      fontFamily: "calibri",
                      margin: "0 1rem 1rem 0",
                      color: "#265d67"
                    }}
                  >
                    So1931
                  </p>
                  <LinearProgress
                    buffer={1}
                    progress={1.15}
                    height={2}
                    className="progBar"
                  />
                  <p
                    style={{
                      fontSize: "1.2rem",
                      fontFamily: "calibri",
                      margin: "0 0 1rem 1rem",
                      color: "#265d67"
                    }}
                  >
                    115
                  </p>
                </label>

                <label className="flex-container2">
                  <p
                    style={{
                      fontSize: "1.7rem",
                      fontFamily: "calibri",
                      margin: "0 1rem 1rem 0",
                      color: "#265d67"
                    }}
                  >
                    XPO103
                  </p>
                  <LinearProgress
                    buffer={1}
                    progress={0.78}
                    height={2}
                    className="progBar"
                  />
                  <p
                    style={{
                      fontSize: "1.2rem",
                      fontFamily: "calibri",
                      margin: "0 0 1rem 1rem",
                      color: "#265d67"
                    }}
                  >
                    78
                  </p>
                </label>

                <label className="flex-container2">
                  <p
                    style={{
                      fontSize: "1.7rem",
                      fontFamily: "calibri",
                      margin: "0 1rem 1rem 0",
                      color: "#265d67"
                    }}
                  >
                    PYB021
                  </p>
                  <LinearProgress
                    buffer={1}
                    progress={0.61}
                    height={2}
                    className="progBar"
                  />
                  <p
                    style={{
                      fontSize: "1.2rem",
                      fontFamily: "calibri",
                      margin: "0 0 1rem 1rem",
                      color: "#265d67"
                    }}
                  >
                    61
                  </p>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
