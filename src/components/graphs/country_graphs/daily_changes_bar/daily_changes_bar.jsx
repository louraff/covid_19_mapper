import React, { Component } from 'react';
import { Bar } from "react-chartjs-2";
import Button from "react-bootstrap/Button";


class DailyChangesBar extends Component {
  state = {
    cases: true,
  }

  barData = () => {
    const daily = [];
    const dailyChange = [];

    const countryData = this.props.data[this.props.country];
    if (countryData !== undefined) {
      countryData.forEach((country) => {
        if (country.deaths !== 0) {
          daily.push(country.confirmed);
        }
      });

      for (let i = 0; i < daily.length; i++) {
        dailyChange.push(parseFloat(daily[i + 1]) - parseFloat(daily[i]));
      }

      dailyChange.pop();
      return dailyChange;
    }
  };

  barLabel = () => {
    const daily = [];

    const countryData = this.props.data[this.props.country];
    if (countryData !== undefined) {
      countryData.forEach((country) => {
        if (country.deaths !== 0) {
          daily.push(country.date);
        }
      });

      daily.reverse();
      daily.pop();
      daily.reverse();
      return daily;
    }
  };

  barDataDeaths = () => {
    const daily = [];
    const dailyChange = [];

    const countryData = this.props.data[this.props.country];
    if (countryData !== undefined) {
      countryData.forEach((country) => {
        if (country.deaths !== 0) {
          daily.push(country.deaths);
        }
      });

      for (let i = 0; i < daily.length; i++) {
        dailyChange.push(parseFloat(daily[i + 1]) - parseFloat(daily[i]));
      }

      dailyChange.pop();
      return dailyChange;
    }
  };

  handleClick = () => {
    this.setState({
      cases: !this.state.cases,
    });
  };

  render() {

    const bar = {
      labels: this.barLabel(),
      datasets: [
        {
          label: "Daily Case Increase",
          data: this.barData(),
          backgroundColor: "rgba(24,162,184, 0.2)",
          borderColor: "#18a2b8",
          borderWidth: 1,
          hoverBackgroundColor: "#18a2b8",
          hoverBorderColor: "rgba(255,99,132,0.2)",
          pointColor: "#18a2b8",
        },
      ],
    };

    const barDeaths = {
      labels: this.barLabel(),
      datasets: [
        {
          label: "Daily Death Increase",
          data: this.barDataDeaths(),
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "#dc3644",
          borderWidth: 1,
          hoverBackgroundColor: "#dc3644",
          hoverBorderColor: "rgba(255,99,132,0.2)",
          pointColor: "#dc3644",
        },
      ],
    };

    const bDeathOptions = {
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
              labelString: "Cases",
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
              labelString: "Deaths",
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
        },
      },
      tooltips: {
        displayColors: false,
      },
      borderWidth: 2,
      maintainAspectRatio: true,
    };

    const bOptions = {
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
              labelString: "Date (YY/MM/DD)",
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
              labelString: "Cases",
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
        },
      },
      tooltips: {
        displayColors: false,
      },
      borderWidth: 2,
      maintainAspectRatio: true,
    };

    return (
      <React.Fragment>
        {!this.state.cases && (
          <div>
            <h4>{`${this.props.country}`} Daily Death Change</h4>
            <br></br>
            <Button onClick={this.handleClick} variant={"info"}>
              Show Cases
            </Button>
            <Bar data={barDeaths} options={bDeathOptions} />
          </div>
        )}
        {this.state.cases && (
          <div>
            <h4>{`${this.props.country}`} Daily Case Change</h4>
            <br></br>
            <Button onClick={this.handleClick} variant={"danger"}>
              Show Deaths
            </Button>
            <Bar data={bar} options={bOptions} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default DailyChangesBar;