import React, { Component } from "react";
import { withRouter } from "./Wrapper";
import { connect } from "react-redux";
import { userDelete, userEdit } from "../redux/action";

class Table extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.tableData, "tableData--table");
    this.state = {
      userData: [],
    };
  }
  componentDidMount() {}

  handleEdit = (i) => {
    this.props.userEdit(i);
    this.props.navigate(`/edit/${i}`);
  };

  handleDelete = (i) => {
    this.props.userDelete(i);
  };
  render() {
    return (
      <div>
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
            {this.props.tableData?.map((value, i) => {
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

const mapStateToProps = (state) => {
  return {
    tableData: state?.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userDelete: (data) => dispatch(userDelete(data)),
    userEdit: (data) => dispatch(userEdit(data)),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Table));
