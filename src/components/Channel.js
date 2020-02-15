import React, { Component } from "react";
import plmp from "../assets/plmp.png";
import person from "../assets/person.png";
import dot from "../assets/three-dots.png";

class Channel extends Component {
  render() {
    const headings = ["Time", "Block Number", "Instantations", "Innvocation"];
    const rows = [
      {
        time: "01/08/19 8:50 IST",
        blk_no: "165",
        instantations: "0",
        innvocation: "1"
      },
      {
        time: "30/07/19 16:25 IST",
        blk_no: "164",
        instantations: "0",
        innvocation: "1"
      },
      {
        time: "30/07/19 14:10 IST",
        blk_no: "163",
        instantations: "0",
        innvocation: "1"
      }
    ];
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
            <div className="networkDiv2">Channels</div>
            <div className="networkDiv3" />
          </div>

          <div className="flex-container6">
            <div className="flex-container1">
              <div className="nDiv1">165</div>
              <div className="nDiv2">Total Blocks</div>
            </div>

            <div className="flex-container1">
              <div className="nDiv1">1 hrs</div>
              <div className="nDiv2">Time since last transaction</div>
            </div>

            <div className="flex-container1">
              <div className="nDiv1">0</div>
              <div className="nDiv2">Recent Instantations</div>
            </div>

            <div className="flex-container1">
              <div className="nDiv1">10</div>
              <div className="nDiv2">Recent Innvocations</div>
            </div>
          </div>
        </div>

        <table style={{ padding: "1rem" }}>
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
            <th />
          </tr>
          {rows.map(({ time, blk_no, instantations, innvocation }) => {
            return (
              <tr style={{ fontSize: "1rem", fontFamily: "calibri" }}>
                <td>{time}</td>
                <td>{blk_no}</td>
                <td>{instantations}</td>
                <td>{innvocation}</td>
                <td>
                  <button
                    style={{
                      width: "2rem",
                      height: "3rem",
                      backgroundColor: "transparent",
                      border: "none"
                    }}
                  >
                    <img src={dot} style={{ width: "1rem", height: "1rem" }} />
                  </button>
                </td>
              </tr>
            );
          })}{" "}
        </table>
      </div>
    );
  }
}

export default Channel;
