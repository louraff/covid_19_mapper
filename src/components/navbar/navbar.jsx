import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Nav from "react-bootstrap/Nav"

class Header extends Component {
  render() {
    return (
      <Navbar
        fixed="top"
        className="navbar-dark bs-navbar-collapse"
      >
        <Navbar.Brand>
          <img
            alt=""
            src="https://cdn3.iconfinder.com/data/icons/science-116/64/virus-lab-scientist-biology-cell-medical-512.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          /> Covid-19
        </Navbar.Brand>
        <DropdownButton
          variant={"outline-warning"}
          title={"Global Cases: " + this.props.total.total_cases}
          id="last_updated"
        >
          <Dropdown.Item>
            <div id="drop-down-window">
              Daily Increase: {this.props.total.new_cases}
            </div>
          </Dropdown.Item>
        </DropdownButton>
        <Nav className="ml-auto">
          <DropdownButton
            variant={"outline-success"}
            title={"Global Recoveries: " + this.props.total.total_recovered}
            id="last_updated"
          >
            <Dropdown.Item>
              <div id="drop-down-window">
                Active Cases: {this.props.total.active_cases}
              </div>
            </Dropdown.Item>
          </DropdownButton>
        </Nav>
        <Nav className="ml-auto">
          <DropdownButton
            variant={"outline-danger"}
            title={"Global Deaths: " + this.props.total.total_deaths}
            id="last_updated"
          >
            <Dropdown.Item>
              <div id="drop-down-window">
                Daily Increase: {this.props.total.new_deaths}
              </div>
            </Dropdown.Item>
          </DropdownButton>
        </Nav>
        <Nav className="ml-auto">
          <DropdownButton
            alignRight
            variant={"outline-info"}
            title={"Last Updated "}
            id={"dropdown-menu-align-right"}
          >
            <Dropdown.Item>
              <div id="drop-down-window">
                UTC: {this.props.total.statistic_taken_at}
              </div>
            </Dropdown.Item>
          </DropdownButton>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
