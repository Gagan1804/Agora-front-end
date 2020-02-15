import React, { Component } from "react";
import plmp from "../assets/plmp.png";
import person from "../assets/person.png";
import dot from "../assets/three-dots.png";

class Nodes extends Component {
  state = {
    nodeName: "",
    mspId: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const headings = ["Name", "Route", "Type", "MSP ID", "Status"];
    const rows = [
      {
        name: "console",
        route: <a href="">link</a>,
        type: "console",
        msp_id: "px1234",
        status: "up"
      },
      {
        name: "peer0",
        route: <a href="">link</a>,
        type: "peer(m)",
        msp_id: "px1234",
        status: "up"
      },
      {
        name: "peer1",
        route: <a href="">link</a>,
        type: "peer(m)",
        msp_id: "px1234",
        status: "up"
      }
    ];
    const { nodeName, mspId } = this.state;

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
            <div className="networkDiv2">Nodes Summary</div>
            <div className="networkDiv3" />
          </div>

          <div className="flex-container6">
            <div className="flex-container7">
              <div className="nDiv1">09</div>
              <div className="nDiv2">Nodes</div>
            </div>

            <div className="flex-container7">
              <div className="nDiv1">01</div>
              <div className="nDiv2">Orders</div>
            </div>

            <div className="flex-container7">
              <div className="nDiv1">01</div>
              <div className="nDiv2">CA</div>
            </div>

            <div className="flex-container7">
              <div className="nDiv1">04</div>
              <div className="nDiv2">Rest proxies</div>
            </div>

            <div className="flex-container7">
              <div className="nDiv1">00</div>
              <div className="nDiv2">Remote Peer</div>
            </div>
          </div>
        </div>

        <div className="flex-container2">
          <label>
            <input
              type="text"
              className="field2"
              name="nodeName"
              onChange={this.handleInput}
              value={nodeName}
              placeholder="Filter by node name..."
            />
          </label>

          <label>
            <input
              type="text"
              className="field2"
              name="mspId"
              onChange={this.handleInput}
              value={mspId}
              placeholder="Filter by MSP ID..."
            />
          </label>

          <div className="select">
            <select>
              <option value="select">-Select-</option>
              <option value="select_all">Status: All</option>
            </select>
          </div>

          <div className="select">
            <select>
              <option value="select">-Select-</option>
              <option value="type_all">Type: All</option>
            </select>
          </div>
        </div>
        <div className="flex-container8">
          <button className="buttonsInNodes">Add Node</button>
          <button className="buttonsInNodes">Export/Import Peers</button>
        </div>

        <div>
          <table style={{ padding: "2rem" }} cellspacing="50">
            <tr
              style={{
                alignContent: "left",
                justifyContent: "left",
                textAlign: "left",
                alignItems: "left",
                fontSize: "2rem",
                fontFamily: "calibri"
              }}
            >
              <th>{headings[0]}</th>
              <th>{headings[1]}</th>
              <th>{headings[2]}</th>
              <th>{headings[3]}</th>
              <th>{headings[4]}</th>
              <th />
            </tr>
            {rows.map(({ name, route, type, msp_id, status }) => {
              return (
                <tr
                  style={{
                    fontSize: "1.5rem",
                    fontFamily: "calibri",
                    color: "#265d67"
                  }}
                >
                  <td>{name}</td>
                  <td>{route}</td>
                  <td>{type}</td>
                  <td>{msp_id}</td>
                  <td>{status}</td>
                  <td>
                    <button
                      style={{
                        width: "2rem",
                        height: "3rem",
                        backgroundColor: "transparent",
                        border: "none"
                      }}
                    >
                      <img
                        src={dot}
                        style={{ width: "1rem", height: "1rem" }}
                      />
                    </button>
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

export default Nodes;
