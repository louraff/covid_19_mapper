import React, { Component } from "react";
import { defaults } from "react-chartjs-2";
import CountryLineData from './country_data_line/country_data_line'
import DailyChangesBar from './daily_changes_bar/daily_changes_bar'
import GrowthFactorLine from './growth_factor_line/growth_factor_line'
import ComparisonLineContainer from './comparison_line/comparison_line'



class CountryGraphContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }


  createLineLabels = () => {
    const labelData = [];
    const countryData = this.props.timeseries[this.props.country];
    if (countryData !== undefined) {
      countryData.forEach((date) => {
        if (date.deaths !== 0) {
          labelData.push(date.date);
        }
      });
      return labelData;
    }
  };

  makeTop10Data = () => {
    var countryData = []
    var names = []
    var data = this.props.countries
    data.map(country => {
      console.log(country.us)
      if(country.us === undefined){
        countryData.push(country)

        countryData.sort((a, b) => {
          return a.confirmed < b.confirmed ? 1 : -1;
        })
      }
    })
    countryData.forEach(country => {
      names.push(country.country)
    })
      return names.slice(0, 10)
  }

  

  render() {
    defaults.global.defaultFontColor = "white";
    
    return (
      <React.Fragment>
        <br></br>
        <div id="l">
        <CountryLineData 
          createLineLabels={this.createLineLabels()} 
          country={this.props.country} 
          data={this.props.timeseries} 
          total={this.props.total} 
          countries={this.props.countries}
        />
        </div>
        <div id="b">
          <ComparisonLineContainer 
            data={this.props.timeseries} 
            top10Data={this.makeTop10Data()}
            lineLabels={this.createLineLabels()}
            selected={this.props.country}
          />
        </div>
        <div id="b">
          <DailyChangesBar 
            data={this.props.timeseries} 
            country={this.props.country}
          />
        </div>
        <div id="gf">
          <GrowthFactorLine 
            createLineLabels={this.createLineLabels()} 
            data={this.props.timeseries} 
            country={this.props.country}
          />
        </div>
        
      </React.Fragment>
    );
  }
}

export default CountryGraphContainer;
