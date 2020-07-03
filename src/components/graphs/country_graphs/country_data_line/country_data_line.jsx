import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import Button from "react-bootstrap/Button";
import GlobalCasesDoughnut from "./../global_cases_doughnut/global_cases_doughnut";

const CountryDataLine = (props) => {
  const [doughnut, setDoughnut] = useState(false);

  const createLineData = (type) => {
    const graphData = {
      deaths: [],
      confirmed: [],
      recoveries: [],
    };

    const countryData = props.data[props.country];

    if (countryData !== undefined) {
      countryData.forEach((date) => {
        if (date.deaths !== 0) {
          graphData.confirmed.push(date.confirmed);
          graphData.deaths.push(date.deaths);
          graphData.recoveries.push(date.recovered);
        }
      });

      if (type === "confirmed") {
        return graphData.confirmed;
      } else if (type === "deaths") {
        return graphData.deaths;
      } else if (type === "recovered") {
        return graphData.recoveries;
      }
    }
  };

  const handleDoughnutClick = () => {
    setDoughnut(!doughnut);
  };

  const line = {
    labels: props.createLineLabels,
    datasets: [
      {
        label: "Cases",
        data: createLineData("confirmed"),
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
        label: "Deaths",
        data: createLineData("deaths"),
        fill: false,
        backgroundColor: "#dc3644",
        borderColor: "#dc3644",
        borderWidth: 2,
        pointBackgroundColor: "#dc3644",
        pointBorderColor: "#000000",
        pointBorderWidth: 0.5,
        pointStyle: "rectRounded",
        pointRadius: 4,
        pointHitRadius: 5,
        pointHoverRadius: 5,
        hoverBackgroundColor: "#FFFFFF",
      },
      {
        label: "Recoveries",
        data: createLineData("recovered"),
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
      position: "top",
      align: "center",
      labels: {
        fontSize: 12,
        fontStyle: "bold",
        fontColor: "#FFFFFF",
      },
    },
    lineTension: 3,
    borderWidth: 2,
  };

  return (
    <React.Fragment>
      {!doughnut && (
        <div>
          <h4>{`${props.country}`} Confirmed Cases, Deaths and Recoveries</h4>
          <br></br>
          <div id="description">
            <p>
              This represents the increase over time for confirmed cases, deaths
              and recoveries in{" "}
              {props.country === "United Kingdom" ||
              props.country === "United Kingdom"
                ? `the ${props.country}`
                : `${props.country}`}
              .
            </p>
          </div>
          <br></br>
          <Button onClick={handleDoughnutClick} variant={"info"}>
            Show {`${props.country}`} Cases as % of Global Cases{" "}
          </Button>
          <br></br>
          <br></br>
          <Line data={line} options={options} />
        </div>
      )}
      {doughnut && (
        <div>
          <h4>{`${props.country}`} as % of Global Cases</h4>
          <br></br>
          <div id="description">
            <p>
              This represents{" "}
              {props.country === "United Kingdom" ||
              props.country === "United Kingdom"
                ? `the ${props.country}'s`
                : `${props.country}'s`}{" "}
              cases as a percentage of total global cases.
            </p>
          </div>
          <br></br>
          <Button onClick={handleDoughnutClick} variant={"warning"}>
            Show Data of {`${props.country}`}{" "}
          </Button>
          <GlobalCasesDoughnut
            country={props.country}
            countries={props.countries}
            total={props.total}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default CountryDataLine;
