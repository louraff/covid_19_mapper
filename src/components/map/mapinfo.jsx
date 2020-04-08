import React, { Component } from 'react';


class MapInfo extends Component {
  constructor(props){
    super(props)
    this.state = { 
      marker: "Iceland"
    }
  }
  

  // componentDidMount(){
    
  //   this.setState({
  //     marker: this.props.country
  //   })
  // }

  // componentDidUpdate(props, prevProps){
  //   if(props.country !== prevProps.country){
  //     this.setState({
  //       marker: props.country
  //     })
  //   }
  // }

  filterCountries = () => {
    var a = this.props.countriesArray.filter(country => country.country === this.state.marker)
      console.log(a)
  }

  render() { 
    return ( 
    <div>
      {this.props.countriesArray.map(country => {
        if(country.country === this.state.marker) {
         return `${country.country} Confirmed: ${country.cases} Deaths: ${country.deaths} Recovered: ${country.recovered}`
        }
      })}
    </div> );
  }
}
 
export default MapInfo;