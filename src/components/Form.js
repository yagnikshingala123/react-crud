import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      userDetails: {
        fname: "",
        lname: "",
        country: "",
        gender: "",
        hobbies: [],
      },
      userData: [],
      index: "",
    };
  }

  handleChange = (e) => {
    const { hobbies } = this.state.userDetails;
    if (e.target.name === "gender") {
      this.setState({
        userDetails: {
          ...this.state.userDetails,
          [e.target.name]: e.target.value,
        },
      });
    } else if (e.target.name === "check") {
      if (e.target.checked) {
        hobbies.push(e.target.value);
        this.setState({
          userDetails: { ...this.state.userDetails, hobbies: hobbies },
        });
      } else {
        const index = hobbies.indexOf(e.target.value);
        if (index !== -1) {
          hobbies.splice(index, 1);
          this.setState({
            userDetails: { ...this.state.userDetails, hobbies: hobbies },
          });
        }
      }
    } else {
      this.setState({
        userDetails: {
          ...this.state.userDetails,
          [e.target.name]: e.target.value,
        },
      });
    }
  };

  handleClick = () => {
    const { userData, userDetails } = this.state;
    if (this.state.index !== "") {
      userData[this.state.index] = userDetails;
      this.setState({ userData: userData });
    } else {
      userData.push(userDetails);
      this.setState({ userData: userData });
    }
    this.resetForm();
    this.setState({ index: "" });
  };

  resetForm = () => {
    this.setState({
      userDetails: {
        fname: "",
        lname: "",
        country: "",
        gender: "",
        hobbies: [],
      },
    });
  };

  handleEdit = (i) => {
    const { userData } = this.state;
    let details = userData[i];
    this.setState({
      userDetails: details,
      index: i,
    });
  };

  handleDelete = (i) => {
    const { userData } = this.state;
    userData.splice(i, 1);
    this.setState({ userData: [...userData] });
  };

  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center", margin: "50px 0px" }}>Contact Form</h3>
        <div className="container">
          <label>First Name</label>
          <input
            onChange={(e) => this.handleChange(e)}
            value={this.state.userDetails.fname}
            type="text"
            id="fname"
            name="fname"
            placeholder="Your name.."
          />

          <label>Last Name</label>
          <input
            onChange={(e) => this.handleChange(e)}
            value={this.state.userDetails.lname}
            type="text"
            id="lname"
            name="lname"
            placeholder="Your last name.."
          />

          <label>Country</label>
          <select
            id="country"
            name="country"
            onChange={(e) => this.handleChange(e)}
            value={this.state.userDetails.country}
          >
            <option value="">Select your country</option>
            <option value="india">India</option>
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>

          <label>Gender :</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={(e) => this.handleChange(e)}
              checked={this.state.userDetails.gender === "male"}
            />
            <label htmlFor="male">Male</label>

            <input
              type="radio"
              name="gender"
              value="female"
              onChange={(e) => this.handleChange(e)}
              checked={this.state.userDetails.gender === "female"}
            />
            <label htmlFor="female">Female</label>

            <input
              type="radio"
              name="gender"
              value="other"
              onChange={(e) => this.handleChange(e)}
              checked={this.state.userDetails.gender === "other"}
            />
            <label htmlFor="female">Other</label>
            <br />

            <label>Hobbies :</label>
            <br />
            <div class="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="cooking"
                name="check"
                id="flexCheckDefault"
                onChange={(e) => this.handleChange(e)}
                checked={this.state.userDetails.hobbies.includes("cooking")}
              />
              <label classn="form-check-label" htmlForfor="flexCheckDefault">
                cooking
              </label>
            </div>
            <div class="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="traveling"
                name="check"
                onChange={(e) => this.handleChange(e)}
                checked={this.state.userDetails.hobbies.includes("traveling")}
              />
              <label className="form-check-label" htmlForfor="flexCheckChecked">
                traveling
              </label>
            </div>
            <div class="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="reading"
                name="check"
                id="flexCheckChecked"
                onChange={(e) => this.handleChange(e)}
                checked={this.state.userDetails.hobbies.includes("reading")}
              />
              <label className="form-check-label" htmlForfor="flexCheckChecked">
                reading
              </label>
            </div>
          </div>

          <button type="button" onClick={() => this.handleClick()}>
            Submit
          </button>
        </div>

        <h2 style={{ textAlign: "center", margin: "50px 0px" }}>
          User Data Table
        </h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Country</th>
              <th>Gender</th>
              <th>hobbies</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.userData.map((value, i) => {
              return (
                <tr key={i}>
                  <td>{value.fname}</td>
                  <td>{value.lname}</td>
                  <td>{value.country}</td>
                  <td>{value.gender}</td>
                  <td>{value.hobbies}</td>
                  <td>
                    <button type="button" onClick={() => this.handleEdit(i)}>
                      Edit
                    </button>
                    <button type="button" onClick={() => this.handleDelete(i)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
