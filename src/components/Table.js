import React, { Component } from "react";
import { withRouter } from "./Wrapper";

 class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userData: [] 
        };
      }
      componentDidMount(){
        let userSetData = JSON.parse(localStorage.getItem("dataSet"))
        this.setState({userData:userSetData})
        console.log(userSetData,"userSetData");
      }
      
  handleEdit = (i) => {
    const { userData } = this.state;
    let details = userData[i];
    this.setState({
      userDetails: details,
      index: i,
    });
    this.props.navigate(`/edit/${i}`)
  };

  handleDelete = (i) => {
    const { userData } = this.state;
    userData.splice(i, 1);
    this.setState({ userData: [...userData] });
    localStorage.removeItem("dataSet")
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
            {this.state.userData?.map((value, i) => {
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
export default withRouter(Table)