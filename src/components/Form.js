import React, { Component } from "react";
import "./Form.css";
import { withRouter } from "./Wrapper";
import { userDetails } from "../redux/action";
import { connect } from "react-redux";
import axios from "axios"
class Form extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.tableData, "tabledata--form");
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
      moveBtn:false
    };
  }

   apiCalling = () => {
    axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=2888ef306ba84b86982cfac10e0380c3').then((res)=>{
      console.log(res,"res");

    })

   } 

  componentDidMount() {
    let data = this.props.tableData || [];
    let pathName = window.location.pathname.split("/")
    let i = pathName[pathName.length - 1]
    let id = this.props.params.id;
    console.log(id,"id");
    console.log(i,"findData");
    if (id) {
      this.setState({ userDetails: this.props.findData?this.props.findData:{} });
    }
    this.setState({ userData: data });
    this.apiCalling()
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
    let id = this.props.params.id
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
    if (Object.values(errors).some((error) => error)) {
      this.setState({ errors });
      return;
    }
    if (id) {
      userData[this.state.index] = userDetails;
    } else {
      userData.push(userDetails);
    }
    this.setState({ userData: userData }, () => {
      this.props.usersubmit(this.state.userData);
    });
    this.resetForm();
    this.setState({ index: "" });
    // this.props.navigate("/table")
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

  handleButton = () => {
    if(this.state.userDetails.fname === ""){
      this.setState({moveBtn : !this.state.moveBtn})
    }
  }

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
              <label classn="form-check-label">cooking</label>
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
              <label className="form-check-label">traveling</label>
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
              <label className="form-check-label">reading</label>
            </div>
            <div className="error-message">{errors.hobbies}</div>
          </div>
          <div style={{display:"flex" , justifyContent: this.state.moveBtn ?"end":"start"}}>
          <button
            type="button"
            className="my-3"
            onClick={() => this.handleClick()}
            onMouseEnter={()=>this.handleButton()}
          >
            Submit
          </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    usersubmit: (data) => dispatch(userDetails(data)),
  };
};

const mapStateToProps = (state) => {
  return {
    tableData: state?.data,
    findData: state?.editData,
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));
