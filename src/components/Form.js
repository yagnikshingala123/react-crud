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
      errors: {
        fname: "",
        lname: "",
        country: "",
        gender: "",
        hobbies: "",
      },
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
    const { userData, userDetails, errors } = this.state;
    if (!userDetails.fname) {
      errors.fname = "First Name is required.";
    } else {
      errors.fname = "";
    }

    if (!userDetails.lname) {
      errors.lname = "Last Name is required.";
    } else {
      errors.lname = "";
    }

    if (!userDetails.country) {
      errors.country = "Country is required.";
    } else {
      errors.country = "";
    }

    if (!userDetails.gender) {
      errors.gender = "Gender is required.";
    } else {
      errors.gender = "";
    }

    if (userDetails.hobbies.length === 0) {
      errors.hobbies = "At least one hobby is required.";
    } else {
      errors.hobbies = "";
    }

    // Check if any errors exist
    if (Object.values(errors).some((error) => error)) {
      this.setState({ errors });
      return;
    }
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
  handleValidation = () => {
    const { userDetails, errors } = this.state;
    if (!userDetails.fname) {
      errors.fname = "First Name is required.";
    } else {
      errors.fname = "";
    }

    if (!userDetails.lname) {
      errors.lname = "Last Name is required.";
    } else {
      errors.lname = "";
    }

    if (!userDetails.country) {
      errors.country = "Country is required.";
    } else {
      errors.country = "";
    }

    if (!userDetails.gender) {
      errors.gender = "Gender is required.";
    } else {
      errors.gender = "";
    }

    if (userDetails.hobbies.length === 0) {
      errors.hobbies = "At least one hobby is required.";
    } else {
      errors.hobbies = "";
    }

    // Check if any errors exist
    if (Object.values(errors).some((error) => error)) {
      this.setState({ errors });
      return;
    }
  };
  render() {
    const { errors, userDetails } = this.state;
    return (
      <div>
        <h3 style={{ textAlign: "center", margin: "50px 0px" }}>
          Contact Form
        </h3>
        <div className="container">
          <label>First Name</label>
          <input
            onChange={(e) => this.handleChange(e)}
            value={userDetails.fname}
            type="text"
            id="fname"
            name="fname"
            placeholder="Your name.."
          />
          <div className="error-message">{errors.fname}</div>
          <label>Last Name</label>
          <input
            onChange={(e) => this.handleChange(e)}
            value={userDetails.lname}
            type="text"
            id="lname"
            name="lname"
            placeholder="Your last name.."
          />
          <div className="error-message">{errors.lname}</div>

          <label>Country</label>
          <select
            id="country"
            name="country"
            onChange={(e) => this.handleChange(e)}
            value={userDetails.country}
          >
            <option value="">Select your country</option>
            <option value="india">India</option>
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
          <div className="error-message">{errors.country}</div>

          <label>Gender :</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={(e) => this.handleChange(e)}
              checked={userDetails.gender === "male"}
            />
            <label>Male</label>

            <input
              type="radio"
              name="gender"
              value="female"
              onChange={(e) => this.handleChange(e)}
              checked={userDetails.gender === "female"}
            />
            <label>Female</label>

            <input
              type="radio"
              name="gender"
              value="other"
              onChange={(e) => this.handleChange(e)}
              checked={userDetails.gender === "other"}
            />
            <label>Other</label>
            <br />
            <div className="error-message">{errors.gender}</div>

            <label>Hobbies :</label>
            <br />
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="cooking"
                name="check"
                id="flexCheckDefault"
                onChange={(e) => this.handleChange(e)}
                checked={userDetails.hobbies.includes("cooking")}
              />
              <label classn="form-check-label">
                cooking
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="traveling"
                name="check"
                onChange={(e) => this.handleChange(e)}
                checked={userDetails.hobbies.includes("traveling")}
              />
              <label className="form-check-label">
                traveling
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="reading"
                name="check"
                id="flexCheckChecked"
                onChange={(e) => this.handleChange(e)}
                checked={userDetails.hobbies.includes("reading")}
              />
              <label className="form-check-label">
                reading
              </label>
            </div>
            <div className="error-message">{errors.hobbies}</div>
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
                  <td>{value.hobbies.join(", ")}</td>
                  <td>
                    <button
                      type="button"
                      className="btnSpace"
                      onClick={() => this.handleEdit(i)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btnSpace"
                      onClick={() => this.handleDelete(i)}
                    >
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
