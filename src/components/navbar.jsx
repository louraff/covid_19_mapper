import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Nav from "react-bootstrap/Nav"

class Header extends Component {

  totalActiveCases() {
    // // console.log(this.props.total)
    // var totalCases = this.props.total.total_cases
    // var newTotalCases = totalCases.replace(',', '')
    // var totalDeaths = this.props.total.totalDeaths.replace(',', '')
    // var newTotalDeaths = totalDeaths.replace(',', '')
    // var totalRecoveries = this.props.total.totalRecoveries.replace(',', '')
    // var newTotalRecoveries = totalRecoveries.replace(',', '')
    // return newTotalCases - newTotalDeaths - newTotalRecoveries
  }
  render() {
    return (
      <Navbar
        fixed="top"
        className="navbar-dark navbar-expand-lg"
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
          variant={"warning"}
          className="m-2"
          title={"Global Cases: " + this.props.total.total_cases}
          id="last_updated"
        >
          <Dropdown.Item>
            Daily Increase: {this.props.total.new_cases}
          </Dropdown.Item>
        </DropdownButton>
        <Nav className="ml-auto">
          <DropdownButton
            variant={"success"}
            className="m-2"
            title={"Global Recoveries: " + this.props.total.total_recovered}
            id="last_updated"
          >
            <Dropdown.Item>
              Active Cases:
              {this.totalActiveCases()}
            </Dropdown.Item>
          </DropdownButton>
        </Nav>
        <Nav className="ml-auto">
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
        </Nav>
        <Nav className="ml-auto dropdown-menu-right ">
          <DropdownButton
            variant={"info"}
            title={"Last Updated "}
            id="last_updated"
          >
            <Dropdown.Item>
              UTC: {this.props.total.statistic_taken_at}
            </Dropdown.Item>
          </DropdownButton>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
