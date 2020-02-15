import React, { Component } from "react";
import plmp from "../assets/plmp.png";
import person from "../assets/person.png";
import dot from "../assets/three-dots.png";

class Network extends Component {
  state = {
    entityId: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

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
    const headings = ["Entity ID", "Role", "MSP ID"];
    const rows = [
      {
        ent_id: "asdlkfjalskf",
        role: "adsfasf",
        msid: "asdfasdfa",
        object: {
          key: "asdfasdf"
        }
      },
      {
        ent_id: "asdlkfjalskf",
        role: "adsfasf",
        msid: "asdfasdfa",
        object: {
          key: "asdf"
        }
      },
      {
        ent_id: "asdlkfjalskf",
        role: "adsfasf",
        msid: "asdfasdfa",
        object: {
          key: "adsf"
        }
      }
    ];

    const { entityId } = this.state;
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
            <div className="networkDiv2">Network</div>
            <div className="networkDiv3">update:{this.myFunction()} </div>
          </div>

          <div className="nDiv1">04</div>

          <div className="nDiv2">Participating Organisations</div>
        </div>

        <div className="flex-container2">
          <label>
            <input
              type="text"
              className="fieldID"
              name="entityID"
              onChange={this.handleInput}
              value={entityId}
              placeholder="Filter by entity ID..."
            />
          </label>

          <div className="select">
            <select>
              <option value="select">-Select-</option>
              <option value="role_all">Role: All</option>
            </select>
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
            <th>Entity ID</th>
            <th>Role</th>
            <th>MSP ID</th>
            <th />
          </tr>
          {rows.map(({ ent_id: id, role, msid, object: { key } }) => {
            return (
              <tr style={{ fontSize: "1rem", fontFamily: "calibri" }}>
                <td>{id}</td>
                <td>{role}</td>
                <td>{key}</td>
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
        <div />
      </div>
    );
  }
}

export default Network;
