import React, { Component } from 'react';
import {Doughnut, defaults } from "react-chartjs-2";

class GlobalCasesDoughnut extends Component {
  state = {  }

  doughnutLabels = () => {
    const doughtnutLabels = [];
    if (this.props.countries !== undefined) {
      this.props.countries.forEach((country) => {
        if (country.country === this.props.country) {
          doughtnutLabels.unshift(country.country);
        }
        if (country.country !== this.props.country) {
          doughtnutLabels.push(country.country);
        }
      });
    }
    return doughtnutLabels;
  };

  doughnutData = () => {
    const doughnutData = [];
    if (this.props.countries !== undefined) {
      this.props.countries.forEach((country) => {
        if (country.country === this.props.country && !country.us) {
          doughnutData.unshift(
            ((country.confirmed / this.props.total[0]) * 100).toFixed(2)
          );
        }
        if (!country.us && country.country !== this.props.country) {
          doughnutData.push(
            ((country.confirmed / this.props.total[0]) * 100).toFixed(2)
          );
        }
      });
    }
    return doughnutData;
  };
  
  render() { 
    defaults.global.defaultFontColor = "white";

    const doughnut = {
      labels: this.doughnutLabels(),
      datasets: [
        {
          data: this.doughnutData(),
          backgroundColor: ["#FBBD08"],
          hoverBackgroundColor: "#18A2B8",
          borderWidth: 0.5,
          borderColor: "#646D79",
        },
      ],
    };

    const options = {
      legend: false,
      animation: {
        animateScale: true,
      },
      cutoutPercentage: 50,
      circumfrance: 0.141596,
      title: {
        display: true,
      },
      tooltips: {
        backgroundColor: "#18A2B8",
        displayColors: false,
        callbacks: {
          label: function (tooltipItems, data) {
            if (data !== undefined) {
              let dataPercentage =
                data.datasets[tooltipItems.datasetIndex].data[
                  tooltipItems.index
                ];
              return (
                data.labels[tooltipItems.index] + " " + dataPercentage + "%"
              );
            }
          },
        },
      },
    };
    return (  
      <React.Fragment>
        <h4>{`${this.props.country}`} as % of Global Cases</h4>
        <Doughnut data={doughnut} options={options} />
      </React.Fragment>
    );
  }
}
 
export default GlobalCasesDoughnut;