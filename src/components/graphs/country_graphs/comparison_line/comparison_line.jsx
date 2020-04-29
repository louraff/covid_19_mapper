import React, { Component } from 'react';
import { Line } from "react-chartjs-2";

class ComparisonLineContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }


  createComparisonData = (index) => {
    
    if(this.props.data !== undefined && this.props.top10Data[index] !== undefined) {
      var top10Data =[]
      var country = this.props.top10Data[index]
        this.props.data[country].forEach(day => {
          if(day.deaths !== 0) {
          top10Data.push(day.confirmed)
          }
        })
     
      // console.log("full data", top10Data)
      // console.log(top10Data[index])
      return top10Data
    }
  }

  createComparisonLabels = (index) => {
    if(this.props.top10Data !== undefined){
      return this.props.top10Data[index]
    }
    
  }

  createLineData = () => {
    const graphData = {
      confirmed: [],
    };
    let countryData = []

    if(this.props.top10Data[this.props.selected] === undefined) {
    countryData.push(this.props.data[this.props.selected]);
    }

    if(!countryData.length === 0){
      countryData.forEach((date) => {
        if (date.deaths !== 0) {
          graphData.confirmed.push(date.confirmed);
        }
      });
    }

    return graphData.confirmed;
  };

  render() { 
    {for(let i = 0; i <= 9; i++){
    // console.log(this.props.top10Data[i])
    }}

    // {console.log(this.props.lineLabels)}
    
    const line = {
      labels: this.props.lineLabels ,
      datasets: [
        {
          label: this.props.selected,
          data: this.createLineData(),
          fill: false,
          backgroundColor: "#18A2B8",
          borderColor: "#18A2B8",
          borderWidth: 2,
          pointBackgroundColor: "#18A2B8",
          pointBorderColor: "#000000",
          pointBorderWidth: 0.5,
          pointStyle: "rectRounded",
          pointRadius: 4,
          pointHitRadius: 5,
          pointHoverRadius: 5,
          hoverBackgroundColor: "#FFFFFF",
        },
        {
          label: this.createComparisonLabels(0),
          data: this.createComparisonData(0),
          fill: false,
          backgroundColor: "#18A2B8",
          borderColor: "#18A2B8",
          borderWidth: 2,
          pointBackgroundColor: "#18A2B8",
          pointBorderColor: "#000000",
          pointBorderWidth: 0.5,
          pointStyle: "rectRounded",
          pointRadius: 4,
          pointHitRadius: 5,
          pointHoverRadius: 5,
          hoverBackgroundColor: "#FFFFFF",
        },
        {
          label: this.createComparisonLabels(1),
          data: this.createComparisonData(1),
          hidden: true,
          fill: false,
          backgroundColor: "#18A2B8",
          borderColor: "#18A2B8",
          borderWidth: 2,
          pointBackgroundColor: "#18A2B8",
          pointBorderColor: "#000000",
          pointBorderWidth: 0.5,
          pointStyle: "rectRounded",
          pointRadius: 4,
          pointHitRadius: 5,
          pointHoverRadius: 5,
          hoverBackgroundColor: "#FFFFFF",
        },
        {
          label: this.createComparisonLabels(2),
          data: this.createComparisonData(2),
          fill: false,
          backgroundColor: "#28a745",
          borderColor: "#28a745",
          borderWidth: 2,
          pointBackgroundColor: "#28a745",
          pointBorderColor: "#000000",
          pointBorderWidth: 0.5,
          pointStyle: "rectRounded",
          pointRadius: 4,
          pointHitRadius: 5,
          pointHoverRadius: 5,
          hoverBackgroundColor: "#FFFFFF",
        },
        {
          label: this.createComparisonLabels(3),
          data: this.createComparisonData(3),
          fill: false,
          backgroundColor: "#28a745",
          borderColor: "#28a745",
          borderWidth: 2,
          pointBackgroundColor: "#28a745",
          pointBorderColor: "#000000",
          pointBorderWidth: 0.5,
          pointStyle: "rectRounded",
          pointRadius: 4,
          pointHitRadius: 5,
          pointHoverRadius: 5,
          hoverBackgroundColor: "#FFFFFF",
        },
        {
          label: this.createComparisonLabels(4),
          data: this.createComparisonData(4),
          fill: false,
          backgroundColor: "#28a745",
          borderColor: "#28a745",
          borderWidth: 2,
          pointBackgroundColor: "#28a745",
          pointBorderColor: "#000000",
          pointBorderWidth: 0.5,
          pointStyle: "rectRounded",
          pointRadius: 4,
          pointHitRadius: 5,
          pointHoverRadius: 5,
          hoverBackgroundColor: "#FFFFFF",
        },
        {
          label: this.createComparisonLabels(5),
          data: this.createComparisonData(5),
          fill: false,
          backgroundColor: "#28a745",
          borderColor: "#28a745",
          borderWidth: 2,
          pointBackgroundColor: "#28a745",
          pointBorderColor: "#000000",
          pointBorderWidth: 0.5,
          pointStyle: "rectRounded",
          pointRadius: 4,
          pointHitRadius: 5,
          pointHoverRadius: 5,
          hoverBackgroundColor: "#FFFFFF",
        },
        {
          label: this.createComparisonLabels(6),
          data: this.createComparisonData(6),
          fill: false,
          backgroundColor: "#28a745",
          borderColor: "#28a745",
          borderWidth: 2,
          pointBackgroundColor: "#28a745",
          pointBorderColor: "#000000",
          pointBorderWidth: 0.5,
          pointStyle: "rectRounded",
          pointRadius: 4,
          pointHitRadius: 5,
          pointHoverRadius: 5,
          hoverBackgroundColor: "#FFFFFF",
        },
        {
          label: this.createComparisonLabels(7),
          data: this.createComparisonData(7),
          fill: false,
          backgroundColor: "#28a745",
          borderColor: "#28a745",
          borderWidth: 2,
          pointBackgroundColor: "#28a745",
          pointBorderColor: "#000000",
          pointBorderWidth: 0.5,
          pointStyle: "rectRounded",
          pointRadius: 4,
          pointHitRadius: 5,
          pointHoverRadius: 5,
          hoverBackgroundColor: "#FFFFFF",
        },
        {
          label: this.createComparisonLabels(8),
          data: this.createComparisonData(8),
          fill: false,
          backgroundColor: "#28a745",
          borderColor: "#28a745",
          borderWidth: 2,
          pointBackgroundColor: "#28a745",
          pointBorderColor: "#000000",
          pointBorderWidth: 0.5,
          pointStyle: "rectRounded",
          pointRadius: 4,
          pointHitRadius: 5,
          pointHoverRadius: 5,
          hoverBackgroundColor: "#FFFFFF",
        },
        {
          label: this.createComparisonLabels(9),
          data: this.createComparisonData(9),
          fill: false,
          backgroundColor: "#28a745",
          borderColor: "#28a745",
          borderWidth: 2,
          pointBackgroundColor: "#28a745",
          pointBorderColor: "#000000",
          pointBorderWidth: 0.5,
          pointStyle: "rectRounded",
          pointRadius: 4,
          pointHitRadius: 5,
          pointHoverRadius: 5,
          hoverBackgroundColor: "#FFFFFF",
        },
      ],
    };

    const options = {
      scales: {
        xAxes: [
          {
            ticks: {
              display: true,
              major: {
                fontStyle: "bold",
                fontColor: "#FFFFFF",
              },
            },
            gridLines: {
              display: false,
              drawBorder: true,
            },
            scaleLabel: {
              display: true,
              labelString: "Date (YYYY/MM/DD)",
              fontStyle: "bold",
              fontColor: "#FFFFFF",
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              display: true,
              major: {
                fontStyle: "bold",
                fontColor: "#FFFFFF",
              },
            },
            gridLines: {
              display: true,
              drawBorder: true,
            },
            scaleLabel: {
              display: true,
              labelString: "No of People",
              fontStyle: "bold",
              fontColor: "#FFFFFF",
            },
          },
        ],
      },
      legend: {
        display: true,
        position: "right",
        align: "center",
        labels: {
          fontSize: 12,
          fontStyle: "bold",
          fontColor: "#FFFFFF",
          usePointStyle: true,
          filter: function(item, chart){
            var array = []
            var hello = chart.datasets.slice(1, 11)
            console.log(hello)
            hello.forEach(country => {
              array.push(country.label)
            })
            // console.log("datasets after pop", array)
            console.log(array.includes(chart.datasets[0].label))
            let counter = 0
            console.log(counter)
            for(let i = 0; i <= chart.datasets.length; i++) {
              console.log("label", chart.datasets[i])
            if(array.includes(chart.datasets[i].label)){
              counter += 1
              console.log(item)
            }else {
              console.log(item)
            }
          }
           

          }
        },
      },
      lineTension: 3,
      borderWidth: 2,
    };

    return (  
      <Line data={line} options={options} />  
      
        );
  }
}
 
export default ComparisonLineContainer;