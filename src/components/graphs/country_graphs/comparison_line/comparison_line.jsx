import React, { Component } from 'react';
import { Line } from "react-chartjs-2";

class ComparisonLineContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }


  createComparisonData = (index) => {

    if (this.props.data !== undefined && this.props.top10Data[index] !== undefined) {
      var top10Data = []
      var country = this.props.top10Data[index]
      this.props.data[country].forEach(day => {
        if (day.deaths !== 0) {
          top10Data.push(day.confirmed)
        }
      })

      // console.log("full data", top10Data)
      // console.log(top10Data[index])
      return top10Data
    }
  }

  createComparisonLabels = (index) => {
    if (this.props.top10Data !== undefined) {
      return this.props.top10Data[index]
    }

  }

  createLineData = () => {
    let confirmed = []

    let countryData = []

    console.log("data", this.props.data)

    if (this.props.data[this.props.selected] !== undefined) {
      countryData.push(this.props.data[this.props.selected]);
      console.log("countrydata", countryData)
      countryData[0].forEach((date) => {
        console.log("date", date)
        if (date.deaths !== 0) {
          confirmed.push(date.confirmed);
        }
      });
      return confirmed;
    }
    console.log("before ifsdfjsjfad", countryData.length !== 0)
    // if (countryData !== undefined) {
    //   console.log("ifjsdfjsdfhkjshf")
    //   countryData.forEach((date) => {
    //     if (date.deaths !== 0) {
    //       confirmed.push(date.confirmed);
    //     }
    //   });
    // }
    console.log("graphData", confirmed)

    // return confirmed;
  };

  generateDataSets = () => {
    let datasets = []
    let top10 = []
    var country = this.props.top10Data
    console.log("the countries going in", country)
    if (this.props.top10Data[this.props.selected] === undefined) {

      if (country.includes(this.props.selected)) {
        country.forEach((country, i) => {
          top10.push({
            label: country,
            data: this.createComparisonData(i),
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
          })
        })
      } else {
        country.forEach((country, i) => {
          top10.push({
            label: country,
            data: this.createComparisonData(i),
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
          })
        })
        console.log("line", this.createLineData())
        top10.unshift({
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
        })
      }
      return top10
    }
  }





  render() {
    console.log("createLineData", this.createLineData())
    {
      for (let i = 0; i <= 9; i++) {
        // console.log(this.props.top10Data[i])
      }
    }

    const line = {
      labels: this.props.lineLabels,
      datasets: this.generateDataSets(),
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