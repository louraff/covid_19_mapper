import React, { Component } from "react";
import popData from "./../assets/popData";
import { HorizontalBar } from "react-chartjs-2";

export class HorizontalBarContainer extends Component {
  constructor(props) {
    super(props);
  }

  horizontalBarLabels = () => {
    var deathsPer1m = [];
    this.props.countries.map((country) => {
      popData.popData.map((countryPop) => {
        if (country.country === countryPop.name) {
          if (parseFloat(countryPop.pop2020) / 1000 > 2.5) {
            deathsPer1m.push({
              deaths: country.deaths / (parseFloat(countryPop.pop2020) / 1000),
              country: country.country,
            });
          }
        }
      });
    });
    let topTenDeathsPer1m = deathsPer1m
      .sort(function (a, b) {
        return a.deaths < b.deaths ? 1 : -1;
      })
      .slice(0, 20);
    let finalLabels = [];
    topTenDeathsPer1m.map((country) => {
      finalLabels.push(country.country);
    });
    return finalLabels;
  };

  horizontalBarData = () => {
    var deathsPer1m = [];
    this.props.countries.map((country) => {
      popData.popData.map((countryPop) => {
        if (country.country === countryPop.name) {
          if (parseFloat(countryPop.pop2020) / 1000 > 2.5) {
            deathsPer1m.push(
              country.deaths / (parseFloat(countryPop.pop2020) / 1000)
            );
          }
        }
      });
    });
    let topTenDeathsPer1m = deathsPer1m
      .sort(function (a, b) {
        return a < b ? 1 : -1;
      })
      .slice(0, 20);
    return topTenDeathsPer1m;
  };

  render() {
    const horizontal = {
      labels: this.horizontalBarLabels(),
      datasets: [
        {
          label: "Deaths per Million People",
          data: this.horizontalBarData(),
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "#dc3644",
          borderWidth: 1,
          hoverBackgroundColor: "#dc3644",
          hoverBorderColor: "rgba(255,99,132,0.2)",
          pointColor: "#dc3644",
        },
      ],
    };
    const hOptions = {
      scales: {
        xAxes: [
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
              display: false,
              drawBorder: true,
            },
            scaleLabel: {
              display: true,
              labelString: "Country",
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
        callbacks: {
          label: function (tooltipItems, data) {
            let density = popData.popData.map((countryPop) => {
              if (tooltipItems.yLabel === countryPop.name) {
                return countryPop.Density;
              }
            });
            let popDensity = density.sort();
            return [
              "Deaths per 1M: " + Math.round(tooltipItems.xLabel),
              "Population Density: " +
                Math.round(popDensity[0]) +
                " ( People per km\u00B2 )",
            ];
          },
        },
      },
      borderWidth: 2,
    };
    return (
      <div>
        <h4>Highest Deaths per 1 Million People</h4>
        <HorizontalBar data={horizontal} options={hOptions} />
      </div>
    );
  }
}

export default HorizontalBarContainer;
