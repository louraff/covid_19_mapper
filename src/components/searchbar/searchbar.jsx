import React, { Component } from "react";
import GraphContainer from "./../graph/graph";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "United Kingdom",
      results: [],
      submit: false,
    };
    //  this.handleChange = this.handleChange.bind(this);
    //  this.handleSubmit = this.handleSubmit.bind(this);
  }

  getInfo = () => {
    let len = this.state.query.length;
    let results = [];
    this.props.countries.filter((country, i) => {
      if (
        country.country.substring(0, len).toLowerCase() ===
        this.state.query.toLowerCase()
      ) {
        results.push(country.country);
      }
    });
    this.setState({
      results: results,
    });
  };

  handleChange = () => {
    this.setState(
      {
        query: this.search.value,
      },
      () => {
        if (this.state.query && this.state.query.length >= 0) {
          // if (this.state.query.length % 2 === 0) {
          this.getInfo();
          // }
        }
      }
    );
  };

  handleSubmit = (event) => {
    this.setState({
      submit: true,
    });
    event.preventDefault();
  };

  render() {
    return (
      <div id="App">
        <div id="search-bar">
          <form onSubmit={this.handleSubmit} id="search-form">
            <label>
              <input
                type="text"
                // value={this.state.value}
                ref={(input) => (this.search = input)}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
          {this.state.results.map((el) => {
            return <ul>{el}</ul>;
          })}
        </div>
        {/* {this.state.submit && */}
        <GraphContainer
          country={this.state.query}
          countries={this.props.countries}
          total={this.props.totalInt}
        />
        {/* } */}
      </div>
    );
  }
}

export default SearchContainer;
