import React from "react";
import { Line } from "react-chartjs-2";
import MathJax from "react-mathjax2";

const CFRContainer = (props) => {
  const createCFRData = () => {
    const graphData = [];

    if (props.data[props.country] !== undefined) {
      props.data[props.country].forEach((date) => {
        if (date.deaths !== 0) {
          graphData.push(((date.deaths / date.confirmed) * 100).toFixed(2));
        }
      });
      return graphData;
    }
  };

  const createLabels = () => {
    if (props.createLineLabels !== undefined) {
      return props.createLineLabels;
    }
  };

  const line = {
    labels: createLabels(),
    datasets: [
      {
        label: "C.F.R (%)",
        data: createCFRData(),
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
          return [
            data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] +
              " %",
          ];
        },
      },
    },
    lineTension: 3,
    borderWidth: 2,
  };
  const ascii =
    "C.F.R = (text{Total Country Deaths}/text{Total Country Cases}) times 100";

  return (
    <div>
      <h4> Case Fatality Rate </h4>
      <br></br>
      <div id="equation">
        <MathJax.Context input="ascii">
          <div>
            <MathJax.Node>{ascii}</MathJax.Node>
          </div>
        </MathJax.Context>
      </div>
      <br></br>
      <div id="description">
        <p>
          This represents the percentage of confirmed cases that result in
          deaths in{" "}
          {props.country === "United Kingdom" ||
          props.country === "United Kingdom"
            ? `the ${props.country}`
            : `${props.country}`}{" "}
          across time.
        </p>
      </div>
      <br></br>
      <Line data={line} options={options} />
    </div>
  );
};

export default CFRContainer;
