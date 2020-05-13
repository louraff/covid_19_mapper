import React, { Component } from 'react';
import { Line } from "react-chartjs-2";
import MathJax from 'react-mathjax2'

class CFRContainer extends Component {

  createCFRData = () => {
    const graphData = []

    if (this.props.data[this.props.country] !== undefined) {
      this.props.data[this.props.country].forEach((date) => {
        if (date.deaths !== 0) {
          graphData.push(((date.deaths / date.confirmed) * 100).toFixed(2));
        }
      });
      return graphData
    }
  }

  createLabels = () => {
    if (this.props.createLineLabels !== undefined) {
      return this.props.createLineLabels
    }
  }

  render() {
    const line = {
      labels: this.createLabels(),
      datasets: [
        {
          label: "C.F.R (%)",
          data: this.createCFRData(),
          fill: false,
          backgroundColor: "#fbbd088",
          borderColor: "#fbbd08",
          borderWidth: 2,
          pointBackgroundColor: "#fbbd08",
          pointBorderColor: "#000000",
          pointBorderWidth: 0.5,
          pointStyle: "rectRounded",
          pointRadius: 4,
          pointHitRadius: 5,
          pointHoverRadius: 5,
          hoverBackgroundColor: "#FFFFFF",
        }
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
              labelString: "Case Fatality Rate (%)",
              fontStyle: "bold",
              fontColor: "#FFFFFF",
            },
          },
        ],
      },
      legend: {
        display: true,
        position: "top",
        align: "center",
        labels: {
          fontSize: 12,
          fontStyle: "bold",
          fontColor: "#FFFFFF",
        },
      },
      tooltips: {
        displayColors: false,
        callbacks: {
          label: function (tooltipItems, data) {

            return [data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + " %"]
          }
        }
      },
      lineTension: 3,
      borderWidth: 2,
    };
    const ascii = 'C.F.R = (text{Total Country Deaths}/text{Total Country Cases}) times 100'

    return (
      <div>
        <h4> Case Fatality Rate </h4>
        <br></br>
        <div id="equation">
          <MathJax.Context input='ascii'>
            <div>
              <MathJax.Node>{ascii}</MathJax.Node>
            </div>
          </MathJax.Context>
        </div>
        <br></br>
        <div id="description">
          <p>
            This represents the percentage of confirmed cases that result in deaths in {this.props.country === "United Kingdom" || this.props.country === "United Kingdom" ? `the ${this.props.country}` : `${this.props.country}`} across time.
        </p>
        </div>
        <br></br>
        <Line data={line} options={options} />
      </div>
    )
  }
}
export default CFRContainer;