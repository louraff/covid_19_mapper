import React, { Component } from 'react';
import { defaults } from "react-chartjs-2";
import GlobalDeathsBar from "./global_deaths_bar/global_deaths_bar"
import GlobalDataLine from "./global_line/global_line"

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

  render() {
    defaults.global.defaultFontColor = "white";
    return (
      <div>
        <div id="b">
          <GlobalDeathsBar countries={this.props.countries} />
        </div>
        <div id="l">
          <GlobalDataLine data={this.state.data} s />
        </div>
      </div>
    );
  }
}

export default GlobalGraphContainer;