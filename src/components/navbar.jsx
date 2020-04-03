import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";

class Header extends Component {
  render() {
    return (
      <Navbar expand="lg" variant="dark" bg="dark" id="navbar-nav">
        <Navbar.Brand>
          <img
            alt=""
            src="https://cdn3.iconfinder.com/data/icons/science-116/64/virus-lab-scientist-biology-cell-medical-512.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Covid-19
        </Navbar.Brand>
        <DropdownButton
          variant={"warning"}
          className="m-2"
          title={"Cases: " + this.props.total.total_cases}
          id="last_updated"
        >
          <Dropdown.Item>
            Today's Increase: {this.props.total.new_cases}
          </Dropdown.Item>
        </DropdownButton>
        <Button variant="success" className="m-2" id="last_updated">
          {" "}
          Recoveries: {this.props.total.total_recovered}
        </Button>
        <DropdownButton
          variant={"danger"}
          className="m-2"
          title={"Deaths: " + this.props.total.total_deaths}
          id="last_updated"
        >
          <Dropdown.Item>
            Today's Increase: {this.props.total.new_deaths}
          </Dropdown.Item>
        </DropdownButton>
        <Button variant="dark" className="btn-space m-2" id="last_updated">
          {" "}
          Last Updated: {this.props.total.statistic_taken_at}
        </Button>
      </Navbar>
    );
  }
}

export default Header;
