import React, { Component } from "react";
import { Line, Doughnut, defaults } from "react-chartjs-2";

class GraphContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://pomber.github.io/covid19/timeseries.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data: data,
        });
      });
  }

  createLabels = () => {
    const labelData = [];
    const countryData = this.state.data[this.props.country];
    if (countryData !== undefined) {
      countryData.map((date) => {
        if (date.deaths !== 0) {
          labelData.push(date.date);
        }
      });
      return labelData;
    }
  };

  createGraphData = (type) => {
    const graphData = {
      deaths: [],
      confirmed: [],
      recoveries: [],
    };

    // let array = []
    const countryData = this.state.data[this.props.country];

    // console.log("filtered array", array)
    if (countryData !== undefined) {
      countryData.map((date) => {
        if (date.deaths !== 0) {
          graphData.confirmed.push(date.confirmed);
          graphData.deaths.push(date.deaths);
          graphData.recoveries.push(date.recovered);
        }
        // })
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

  doughnutLabels = () => {
    const doughtnutLabels = [];
    if (this.props.countries !== undefined) {
      this.props.countries.map((country) => {
        doughtnutLabels.push(country.country);
      });
    }
    return doughtnutLabels;
  };

  doughnutData = () => {
    const doughnutData = [];
    if (this.props.countries !== undefined) {
      this.props.countries.map((country) => {
        if (!country.us) {
          doughnutData.push(
            ((country.confirmed / this.props.total[0]) * 100).toFixed(2)
          );
        }
      });
    }
    return doughnutData;
  };

  render() {
    console.log(defaults);
    defaults.global.defaultFontColor = "white";

    const line = {
      labels: this.createLabels(),
      datasets: [
        {
          label: "Confirmed Cases",
          data: this.createGraphData("confirmed"),
          fill: false,
          backgroundColor: "#18A2B8",
          borderColor: "#18A2B8",
          borderWidth: 2,
          pointBackgroundColor: "#18A2B8",
          pointBorderColor: "#000000",
          pointBorderWidth: 0.5,
          pointStyle: "rectRounded",
          hoverBackgroundColor: "#FFFFFF",
          defaultFontColor: "red",
        },
        {
          label: "Confirmed Deaths",
          data: this.createGraphData("deaths"),
          fill: false,
          backgroundColor: "#dc3644",
          borderColor: "#dc3644",
          borderWidth: 2,
          pointBackgroundColor: "#dc3644",
          pointBorderColor: "#000000",
          pointBorderWidth: 0.5,
          pointStyle: "rectRounded",
          hoverBackgroundColor: "#FFFFFF",
        },
        {
          label: "Confrmed Recoveries",
          data: this.createGraphData("recovered"),
          fill: false,
          backgroundColor: "#28a745",
          borderColor: "#28a745",
          borderWidth: 2,
          pointBackgroundColor: "#28a745",
          pointBorderColor: "#000000",
          pointBorderWidth: 0.5,
          pointStyle: "rectRounded",
          hoverBackgroundColor: "#FFFFFF",
        },
      ],
    };

    const lOptions = {
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
              display: true,
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
              display: false,
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
          fontSize: 10,
          fontStyle: "bold",
          fontColor: "#FFFFFF",
          usePointStyle: true,
        },
      },
      lineTension: 3,
      borderWidth: 2,
    };

    const dOptions = {
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
      },
      onClick: (evnt, item) => {
        console.log(item[0]);
        item[0]._model.outerRadius += 5;
      },
    };

    const doughnut = {
      labels: this.doughnutLabels(),
      datasets: [
        {
          data: this.doughnutData(),
          backgroundColor: "#646D79",
          hoverBackgroundColor: "#18A2B8",
          borderWidth: 0.1,
          borderColor: false,
        },
      ],
    };

    return (
      <div id="graph" className="graph">
        <div id="line">
          <h4>{`${this.props.country}`} Historical Data</h4>
          <Line data={line} options={lOptions} />
        </div>
        <div id="doughnut">
          <h4>Country Cases as a % of Global Cases</h4>
          <Doughnut data={doughnut} options={dOptions} />
        </div>
      </div>
    );
  }
}

export default GraphContainer;
