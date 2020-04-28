import React, { Component } from "react";
import { defaults } from "react-chartjs-2";
import CountryLineData from './country_data_line/country_data_line'
import GlobalCasesDoughnut from './global_cases_doughnut/global_cases_doughnut'
import DailyChangesBar from './daily_changes_bar/daily_changes_bar'
import GrowthFactorLine from './growth_factor_line/growth_factor_line'

class CountryGraphContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://pomber.github.io/covid19/timeseries.json")
      .then((response) => response.json())
      .then((data) => {
        data["USA"] = data["US"];
        this.setState({
          data: data,
        });
      });
  }

  createLineLabels = () => {
    const labelData = [];
    const countryData = this.state.data[this.props.country];
    if (countryData !== undefined) {
      countryData.forEach((date) => {
        if (date.deaths !== 0) {
          labelData.push(date.date);
        }
      });
      return labelData;
    }
  };

  render() {
    defaults.global.defaultFontColor = "white";

    return (
      <React.Fragment>
        <br></br>
        <div id="l">
          <CountryLineData createLineLabels={this.createLineLabels()} country={this.props.country} data={this.state.data} />
        </div>
        <div id="d">
          <GlobalCasesDoughnut country={this.props.country} countries={this.props.countries} total={this.props.total}/>
        </div>
        <div id="b">
          <DailyChangesBar data={this.state.data} country={this.props.country}/>
        </div>
        <div id="gf">
          <GrowthFactorLine createLineLabels={this.createLineLabels()} data={this.state.data} country={this.props.country}/>
        </div>
        
      </React.Fragment>
    );
  }
}

export default CountryGraphContainer;
