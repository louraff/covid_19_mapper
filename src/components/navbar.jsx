import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

class Header extends Component {
  render() {
    return (
      <Navbar
        fixed="top"
        className="navbar-expand-lg navbar-dark bg-dark btn-xs"
      >
        <Navbar.Brand>
          <img
            alt=""
            src="https://cdn3.iconfinder.com/data/icons/science-116/64/virus-lab-scientist-biology-cell-medical-512.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Covid-19
        </Navbar.Brand>
        <div id="navbar-item">
          <DropdownButton
            variant={"warning"}
            className="m-2"
            title={"Global Cases: " + this.props.total.total_cases}
            id="last_updated"
            style={{ fontSize: "2vw" }}
          >
            <Dropdown.Item>
              Daily Increase: {this.props.total.new_cases}
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <div id="navbar-item">
          <DropdownButton
            variant={"success"}
            className="m-2"
            title={"Global Recoveries: " + this.props.total.total_recovered}
            id="last_updated"
            style={{ fontSize: "2vw" }}
          >
            <Dropdown.Item>
              {/* Active Cases: */}
              {/* {this.props.total.total_cases -
                this.props.total.total_recovered -
                this.props.total.total_deaths} */}
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <div id="navbar-item">
          <DropdownButton
            variant={"danger"}
            className="m-2"
            title={"Global Deaths: " + this.props.total.total_deaths}
            id="last_updated"
          >
            <Dropdown.Item>
              Daily Increase: {this.props.total.new_deaths}
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <div id="navbar-item">
          <DropdownButton
            variant={"info"}
            className="m-2"
            title={"Last Updated "}
            id="last_updated"
            style={{ fontSize: "2vw" }}
          >
            <Dropdown.Item>
              UTC: {this.props.total.statistic_taken_at}
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </Navbar>
    );
  }
}

export default Header;
