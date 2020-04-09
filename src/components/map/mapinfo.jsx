import React, { Component } from 'react';
import Card from "react-bootstrap/Card"


class MapInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      marker: "Iceland"
    }
  }

  changeCountry = (marker) => {
    this.setState({
      marker: marker
    })
  }

  render() {
    return (
      <Card className="bg-secondary text-white" >
        {this.props.countriesArray.map(country => {
          if (country.country === this.state.marker) {
            if (country.us) {
              return `${country.country} Total Cases: ${country.confirmed} Total Deaths: ${country.deaths}`
            } else {
              return `${country.country} Total Cases: ${country.confirmed} Total Deaths: ${country.deaths} 
                Total Recoveries ${country.recovered} Active Cases: ${country.activeCases} 
                Critical Cases: ${country.criticalCases} New Cases: ${country.newCases}
                New Deaths: ${country.newDeaths} Cases per Million: ${country.perOneMillion}`
            }
          }
        })}
      </Card>);
  }
}

export default MapInfo;