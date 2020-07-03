import React from "react";
import { Doughnut } from "react-chartjs-2";

const GlobalCasesDoughnut = (props) => {
  const doughnutLabels = () => {
    const doughtnutLabels = [];
    if (props.countries !== undefined) {
      props.countries.forEach((country) => {
        if (country.country === props.country) {
          doughtnutLabels.unshift(country.country);
        }
        if (country.country !== props.country) {
          doughtnutLabels.push(country.country);
        }
      });
    }
    return doughtnutLabels;
  };

  const doughnutData = () => {
    const doughnutData = [];
    if (props.countries !== undefined) {
      props.countries.forEach((country) => {
        if (country.country === props.country && !country.us) {
          doughnutData.unshift(
            ((country.confirmed / props.total[0]) * 100).toFixed(2)
          );
        }
        if (!country.us && country.country !== props.country) {
          doughnutData.push(
            ((country.confirmed / props.total[0]) * 100).toFixed(2)
          );
        }
      });
    }
    return doughnutData;
  };

  const doughnut = {
    labels: doughnutLabels(),
    datasets: [
      {
        data: doughnutData(),
        backgroundColor: ["#18A2B8"],
        hoverBackgroundColor: "#FBBD08",
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
              data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index];
            return data.labels[tooltipItems.index] + " " + dataPercentage + "%";
          }
        },
      },
    },
  };
  return (
    <React.Fragment>
      <Doughnut data={doughnut} options={options} />
    </React.Fragment>
  );
};

export default GlobalCasesDoughnut;
