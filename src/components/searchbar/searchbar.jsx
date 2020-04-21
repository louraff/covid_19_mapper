import React, { Component } from "react";
import GraphContainer from "./../graph/graph";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "Spain",
      results: []
    };
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

  render() {
    return (
      <div>
        <div id="search-bar">
          <form onSubmit={this.handleSubmit} id="search-form">
            <label>
              <input
                type="text"
                ref={(input) => (this.search = input)}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
          {/* {this.state.results.map((el) => {
            return <ul>{el}</ul>;
          })} */}
        </div>
        <GraphContainer
          country={this.state.query}
          countries={this.props.countries}
          total={this.props.totalInt}
        />
      </div>
    );
  }
}

export default SearchContainer;
