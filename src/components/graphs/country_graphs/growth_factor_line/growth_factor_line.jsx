import React, { Component } from 'react';
import { Line } from "react-chartjs-2";

class GrowthFactorLine extends Component {
  state = {  }

  createLineData = () => {
    const graphData = {
      confirmed: [],
    };

    const countryData = this.props.data[this.props.country];

    if (countryData !== undefined) {
      countryData.forEach((date) => {
        if (date.deaths !== 0) {
          graphData.confirmed.push(date.confirmed);
        }
      });
    }

        return graphData.confirmed;
  };

  growthFactorData = () => {
    let growthFactorData = [];
    let dailyR = [];
    let finalArray = [];

    const countryData = this.state.data[this.props.country];
    if (countryData !== undefined) {
      let dailyChange = this.barData();

      for (let i = 1; i < dailyChange.length; i++) {
        let a = dailyChange[i + 1] / dailyChange[i];
        if (a === Infinity) {
          dailyR.push(0.0001);
        } else if (a > 15) {
          dailyR.push(0.0001);
        } else {
          a = a ? dailyR.push(a) : dailyR.push(0.001);
        }
      }
      finalArray = this.movingAverage(dailyR, 7);
    }

    return finalArray;
  };

  newGrowthFactorData = (window) => {
    let daily = [];
    let dailyChange = [];
    let dailyR = [];

    const countryData = this.props.data[this.props.country];

    if (countryData !== undefined) {
      let ma7 = this.movingAverage(this.createLineData(), window);

      ma7.forEach((country) => {
        daily.push(country);
      });
      for (let i = 0; i < daily.length; i++) {
        dailyChange.push(parseFloat(daily[i + 1]) - parseFloat(daily[i]));
      }

      dailyChange.pop();

      for (let i = 1; i < dailyChange.length; i++) {
        let a = dailyChange[i + 1] / dailyChange[i];
        if (a === Infinity) {
          dailyR.push(0.0001);
        } else {
          a = a ? dailyR.push(a) : dailyR.push(0.001);
        }
      }
      dailyR.pop();
      return dailyR;
    }
  };

  movingAverage = (dailyR, window) => {
    let movingAverageValues = [];
    let temp_array = [];
    let reversed = dailyR.reverse();
    for (let i = 0; i < reversed.length; i++) {
      temp_array.push(dailyR[i]);
      if (temp_array.length === window) {
        movingAverageValues.push(
          temp_array.reduce((total, num) => {
            return total + num;
          }) / window
        );
        temp_array = [];
        i -= window - 1;
      }
    }

    movingAverageValues = movingAverageValues.reverse();
    return movingAverageValues;
  };

  growthFactorLabels = () => {
    let labels = this.props.createLineLabels;
    const countryData = this.props.data[this.props.country];
    if (countryData !== undefined) {
      labels.pop();
      labels.pop();
      let reversed = labels.reverse();
      for (let i = 0; i < 7; i++) {
        reversed.pop();
      }
      return reversed.reverse();
    }
  };

  growthFactorOne = (array) => {
    let oneArray = [];
    const countryData = this.props.data[this.props.country];

    if (countryData !== undefined) {
      for (let i = 0; i < array.length; i++) {
        oneArray.push(1);
      }
      return oneArray;
    }
  };
  render() { 

    const line = {
      labels: this.growthFactorLabels(),
      datasets: [
        {
          label: "Growth Factor (R)",
          data: this.newGrowthFactorData(7),
          fill: false,
          backgroundColor: "#fbbd08",
          borderColor: "#fbbd08",
          borderWidth: 2,
          pointBackgroundColor: "#fbbd08",
          pointBorderWidth: 0.5,
          pointStyle: "rectRounded",
          pointRadius: 4,
          pointHitRadius: 5,
          pointHoverRadius: 5,
          hoverBackgroundColor: "#FFFFFF",
        },
        {
          label: "Desired Growth Factor (R)",
          data: this.growthFactorOne(this.growthFactorLabels()),
          fill: true,
          backgroundColor: "rgba(40, 167, 69, 0.4)",
          borderColor: "#28a745",
          borderWidth: 2,
          pointBorderWidth: 0,
          pointStyle: "rectRounded",
          pointRadius: 0,
          pointHitRadius: 0,
          pointHoverRadius: 0,
          pointBackgroundColor: "rgba(40, 167, 69, 0.4)",
          hoverBackgroundColor: "#28a745",
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
              beginAtZero: true,
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
              labelString: "Growth Factor (R)",
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
      tooltips: {
        displayColors: false,
        callbacks: {
          label: function (tooltipItems, data) {
            return "R Value: " + tooltipItems.yLabel.toFixed(3);
          },
        },
      },
      lineTension: 3,
      borderWidth: 2,
      maintainAspectRatio: true,
    };
    return ( 
      <React.Fragment>
         <h4>{`${this.props.country}`} Growth Factor (R) </h4>
         <Line data={line} options={options} />
      </React.Fragment>
     );
  }
}
 
export default GrowthFactorLine;