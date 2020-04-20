import React, { Component } from 'react';
import { Line, Doughnut } from 'react-chartjs-2'


class GraphContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }
  
  
  
  componentDidMount() {
    fetch("https://pomber.github.io/covid19/timeseries.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data
        })
      });
  }

  createLabels = () => {
    const labelData = []
    console.log("creating labels",this.state.data)
    if(this.state.data.US !== undefined) {
    this.state.data.US.map (date => {
      labelData.push(date.date)
    })
    return labelData
  }
  }

  createGraphData = (type) => {
    const graphData = {
      deaths: [],
      confirmed: [],
      recoveries: []
    }
    
    if(this.state.data.US !== undefined) {
      this.state.data.US.map (date => {
        graphData.confirmed.push(date.confirmed)
        graphData.deaths.push(date.deaths)
        graphData.recoveries.push(date.recovered)
      })

      if(type === 'confirmed') {
        return graphData.confirmed
      }else if(type === "deaths"){
        return graphData.deaths
      }else if(type ==="recovered"){
        return graphData.recoveries
      }
    }
  }

  doughnutLabels = () => {
    const doughtnutLabels = []
    if (this.props.countries !== undefined){
      this.props.countries.map(country => {
        doughtnutLabels.push(country.country)
      })
    }
    return doughtnutLabels
  }

  doughnutData = () => {
    const doughnutData = []
    console.log(this.props.total)
    if(this.props.countries !== undefined) {
      this.props.countries.map (country => {
        if(!country.us) {
          doughnutData.push(country.confirmed / this.props.total[0] * 100)
        }
      })
    }
    return doughnutData
  }
  
  render() {
    console.log("integerCountries", this.props.countries)
      const line = {
        labels: 
          this.createLabels()
        ,
        datasets: [
          {
            label: 'Confirmed',
            data: this.createGraphData("confirmed"),
            fill: false,          
            borderColor: '#18A2B8',
            
          },
          {
            label: 'Deaths',
            data: this.createGraphData("deaths"),
            fill: false,          
            borderColor: '#dc3644' 
          },
          {
            label: 'Recovered',
            data: this.createGraphData("recovered"),
            fill: false,          
            borderColor: '#28a745' 
          }
        ],
        
      }
    const dOptions = {
      legend: false,
      animation: {
        animateScale: true
      },
      cutoutPercentage: 50,
      circumfrance:  314.1596,
    }

    const doughnut = {
      labels: this.doughnutLabels(),
      datasets: [{
        data: this.doughnutData()
      }]
      
    }
  
    return (
      <div id="graph" className="graph">
        <div id="line">
        <Line data={line}  />
        </div>
        <div id="doughnut">
        <Doughnut data={doughnut} options={dOptions} />
        </div>       
      </div>
    )
  }
}

export default GraphContainer;