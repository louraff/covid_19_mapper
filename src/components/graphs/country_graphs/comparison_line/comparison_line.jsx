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
      return top10Data
    }
  }

  createComparisonLabels = (index) => {
    if (this.props.top10Data !== undefined) {
      return this.props.top10Data[index]
    }

  }

  createDates = () => {
    let array_of_lengths = []
    let max_len;
    if (this.props.top10Data[0] !== undefined && this.props.selected !== undefined && this.props.data !== undefined) {
      if (this.props.selected !== "China") {
        let allCountries = this.props.top10Data
        allCountries.forEach(country => {
          let place = []

          this.props.data[country].forEach(day => {
            if (day.deaths !== 0) {
              place.push(day);
            }
          })
          array_of_lengths.push(place.length)
        })
        max_len = Math.max(...array_of_lengths)
      } else {
        let place = []
        this.props.data["China"].forEach(day => {
          if (day.deaths !== 0) {
            place.push(day);
          }
        })
        array_of_lengths.push(place.length)
        max_len = Math.max(...array_of_lengths)
      }
      return Array.from(Array(max_len).keys())
    }
  }


  createLineData = () => {
    let confirmed = []

    let countryData = []

    if (this.props.data[this.props.selected] !== undefined) {
      countryData.push(this.props.data[this.props.selected]);
      countryData[0].forEach((date) => {
        if (date.deaths !== 0) {
          confirmed.push(date.confirmed);
        }
      });
      return confirmed;
    }
  };

  generateDataSets = () => {
    let top10 = []
    var country = this.props.top10Data
    let olours = ["#a09be7", "#96e072", "#B10AFF", "#0090F7", "#fff714", "#ff9c1c", "#ff3dc1", "#ffcad4", "#84dcc6", "#ff6978"]
    let colours = ["#f07167", "#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff", "#fffffc"]
    if (this.props.top10Data[this.props.selected] === undefined) {

      if (country.includes(this.props.selected)) {
        country.forEach((country, i) => {
          if (country !== this.props.selected) {
            top10.push({
              label: country,
              data: this.createComparisonData(i),
              fill: false,
              hidden: true,
              backgroundColor: colours[i],
              borderColor: colours[i],
              borderWidth: 2,
              pointBackgroundColor: colours[i],
              pointBorderColor: "#000000",
              pointBorderWidth: 0.5,
              pointStyle: "rectRounded",
              pointRadius: 2.5,
              pointHitRadius: 4,
              pointHoverRadius: 5,
              hoverBackgroundColor: "#FFFFFF",
            })
          }
          if (country === this.props.selected) {
            top10.unshift({
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
              pointRadius: 3.25,
              pointHitRadius: 4,
              pointHoverRadius: 5,
              hoverBackgroundColor: "#FFFFFF",
            })
          }
        })
      } else {
        country.forEach((country, i) => {
          top10.push({
            label: country,
            data: this.createComparisonData(i),
            fill: false,
            backgroundColor: colours[i],
            borderColor: colours[i],
            borderWidth: 2,
            hidden: true,
            pointBackgroundColor: colours[i],
            pointBorderColor: "#000000",
            pointBorderWidth: 0.5,
            pointStyle: "rectRounded",
            pointRadius: 2.5,
            pointHitRadius: 4,
            pointHoverRadius: 5,
            hoverBackgroundColor: "#FFFFFF",
          })
        })
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
          pointRadius: 3.25,
          pointHitRadius: 4,
          pointHoverRadius: 5,
          hoverBackgroundColor: "#FFFFFF",
        })
      }
      return top10
    }
  }





  render() {

    const line = {
      labels: this.createDates(),
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
              labelString: "Days Passed Since First Death",
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
      <React.Fragment>
        <h4>{`${this.props.selected}`} Case Comparison</h4>
        <Line data={line} options={options} />
      </React.Fragment>
    );
  }
}

export default ComparisonLineContainer;