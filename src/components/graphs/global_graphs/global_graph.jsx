import React, { Component } from 'react';
import { defaults } from "react-chartjs-2";
import GlobalDeathsBar from "./global_deaths_bar/global_deaths_bar"

class GlobalGraphContainer extends Component {
  state = { 
    data: []
   }

  sortData = () => {
    let worldData = []
    let data = this.props.data
    console.log(data)
    // console.log(this.props.data)
    let countryArray = Object.keys(this.props.data).map(i => i)
    countryArray.forEach((country) => {
      let countryData = data[country]
      countryData.forEach((day, index) => {
        if(worldData[index] === undefined){
          let globalStats = {date: day.date, confirmed: day.confirmed, recovered: day.recovered, deaths: day.deaths}
          worldData.push(globalStats)
        } else {
          worldData[index].confirmed += day.confirmed
          worldData[index].recovered += day.recovered
          worldData[index].deaths += day.deaths
        }
      })
    })
      return worldData
  }

  render() { 
    defaults.global.defaultFontColor = "white";
    console.log(this.sortData())
    return (  
      <div id="b">
        <GlobalDeathsBar countries={this.props.countries} />
      </div>
    );
  }
}
 
export default GlobalGraphContainer;