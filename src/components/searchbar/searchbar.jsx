import React, { Component } from "react";
import CountryGraphContainer from "../graphs/country_graphs/country_graph";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "United Kingdom",
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

  handleChange = (event) => {

    this.setState(
      {
        query: this.search.value,
      },
      () => {
        if (this.state.query && this.state.query.length >= 0) {
          this.getInfo();
        }
      }
    );
  };


  render() {
    return (
      <div id="search">
        <h2 id="search-heading">Country Specific Data From Day of First Death</h2>
        <div id="search-bar">
          <form onSubmit={e => { e.preventDefault(); }} id="search-form">
            <label>
              <input
                type="text"
                name="search"
                placeholder="Search Country to View"
                ref={(input) => (this.search = input)
                }
                onChange={this.handleChange}
              />

            </label>
          </form>
        </div>
        <div id="graph-countainer">
          <br></br>
          <CountryGraphContainer
            country={this.state.results[0] === undefined ? "United Kingdom" : this.state.results[0]}
            countries={this.props.countries}
            total={this.props.totalInt}
            timeseries={this.props.timeseries}
          />
        </div>
        <footer>Created by <a href="https://github.com/asiaellis5">Asia Ellis</a>, <a href="https://github.com/davidpaps">David Papamichael</a> and <a href="https://github.com/nicolasraffray">Nicolas Raffray</a> &nbsp;&nbsp; Source Code: <a href="https://github.com/davidpaps/covid_19_mapper">Github</a>&nbsp;&nbsp;Data Sources: <a href="https://github.com/CSSEGISandData/COVID-19">John Hopkins</a>, <a href="https://www.worldometers.info/coronavirus/">Worldometer</a>, <a href="https://github.com/pomber/covid19">Pomber</a></footer>
      </div >
    );

  }
}

export default SearchContainer;
