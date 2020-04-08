import React, { Component } from 'react';


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
    console.log("hereee", this.props.countriesArray)
    return (
      <div>
        {this.props.countriesArray.map(country => {
          if (country.country === this.state.marker) {
            return `${country.country} Confirmed: ${country.confirmed} Deaths: ${country.deaths} Recovered: ${country.recovered}`
          }
        })}
      </div>);
  }
}

export default MapInfo;