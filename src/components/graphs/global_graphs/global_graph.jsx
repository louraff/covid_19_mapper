import React, { Component } from 'react';
import { defaults } from "react-chartjs-2";
import GlobalDeathsBar from "./global_deaths_bar/global_deaths_bar"
import GlobalDataLine from "./global_line/global_line"
import GlobalChangesBar from "./global_changes_bar/global_changes_bar"
import GlobalGrowthFactor from "./global_growth_line/global_growth_line"
import CFRContainer from "./global_cfr/global_cfr"

class GlobalGraphContainer extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    let worldData = []
    let data = this.props.data
    let countryArray = Object.keys(data).map(i => i)
    countryArray.forEach((country) => {
      let countryData = data[country]
      countryData.forEach((day, index) => {
        if (worldData[index] === undefined) {
          let globalStats = { date: day.date, confirmed: day.confirmed, recovered: day.recovered, deaths: day.deaths }
          worldData.push(globalStats)
        } else {
          worldData[index].confirmed += day.confirmed
          worldData[index].recovered += day.recovered
          worldData[index].deaths += day.deaths
        }
      })
    })
    this.setState({
      data: worldData
    })
  }

  createLineLabels = () => {
    const labelData = [];
    const countryData = this.state.data;
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
      <div>
        <h2>Global Data From Day of First Death</h2>
        <br></br>
        <br></br>
        <div id="l">
          <GlobalDataLine createLineLabels={this.createLineLabels()} data={this.state.data} />
        </div>
        <div id="b">
          <GlobalDeathsBar countries={this.props.countries} />
        </div>
        <div id="b">
          <GlobalChangesBar data={this.state.data} />
        </div>
        <div id="b">
          <GlobalGrowthFactor data={this.state.data} createLineLabels={this.createLineLabels()} />
        </div>
        <div id="b">
          <CFRContainer data={this.state.data} createLineLabels={this.createLineLabels()} />
        </div>
        <footer>Created by <a href="https://github.com/asiaellis5">Asia Ellis</a>, <a href="https://github.com/davidpaps">David Papamichael</a> and <a href="https://github.com/nicolasraffray">Nicolas Raffray</a> &nbsp;&nbsp; Source Code: <a href="https://github.com/davidpaps/covid_19_mapper">Github</a>&nbsp;&nbsp;Data Sources: <a href="https://github.com/CSSEGISandData/COVID-19">John Hopkins</a>, <a href="https://www.worldometers.info/coronavirus/">Worldometer</a>, <a href="https://github.com/pomber/covid19">Pomber</a></footer>
        <footer>Created by <a href="https://github.com/asiaellis5">Asia Ellis</a>, <a href="https://github.com/davidpaps">David Papamichael</a> and <a href="https://github.com/nicolasraffray">Nicolas Raffray</a> &nbsp;&nbsp; Source Code: <a href="https://github.com/davidpaps/covid_19_mapper">Github</a>&nbsp;&nbsp;Data Sources: <a href="https://github.com/CSSEGISandData/COVID-19">John Hopkins</a>, <a href="https://www.worldometers.info/coronavirus/">Worldometer</a>, <a href="https://github.com/pomber/covid19">Pomber</a></footer>
        <footer>Created by <a href="https://github.com/asiaellis5">Asia Ellis</a>, <a href="https://github.com/davidpaps">David Papamichael</a> and <a href="https://github.com/nicolasraffray">Nicolas Raffray</a> &nbsp;&nbsp; Source Code: <a href="https://github.com/davidpaps/covid_19_mapper">Github</a>&nbsp;&nbsp;Data Sources: <a href="https://github.com/CSSEGISandData/COVID-19">John Hopkins</a>, <a href="https://www.worldometers.info/coronavirus/">Worldometer</a>, <a href="https://github.com/pomber/covid19">Pomber</a></footer>
      </div>
    );
  }
}

export default GlobalGraphContainer;