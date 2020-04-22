import React, { Component } from "react";
import { Line, Doughnut, HorizontalBar, defaults } from "react-chartjs-2";

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

  createLineLabels = () => {
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

  createLineData = (type) => {
    const graphData = {
      deaths: [],
      confirmed: [],
      recoveries: [],
    };


    const countryData = this.state.data[this.props.country];

    if (countryData !== undefined) {
      countryData.map((date) => {
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

  doughnutLabels = () => {
    const doughtnutLabels = [];
    if (this.props.countries !== undefined) {
      this.props.countries.map((country) => {
        if (country.country === this.props.country) {
          doughtnutLabels.unshift(
            country.country
          )
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
      this.props.countries.map((country) => {
        if (country.country === 'USA') {
          country.country = 'US'
        }
        if (country.country === "UK") {
          country.country = "United Kingdom"
        }
        if (country.country === this.props.country && !country.us) {
          doughnutData.unshift(
            ((country.confirmed / this.props.total[0]) * 100).toFixed(2)
          )
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

    const line = {
      labels: this.createLineLabels(),
      datasets: [
        {
          label: "Confirmed Cases",
          data: this.createLineData("confirmed"),
          fill: false,
          backgroundColor: "#18A2B8",
          borderColor: "#18A2B8",
          borderWidth: 2,
          pointBackgroundColor: "#18A2B8",
          pointBorderColor: "#000000",
          pointBorderWidth: 0.5,
          pointStyle: "rectRounded",
          hoverBackgroundColor: "#FFFFFF",
        },
        {
          label: "Confirmed Deaths",
          data: this.createLineData("deaths"),
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
          data: this.createLineData("recovered"),
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

    const doughnut = {
      labels: this.doughnutLabels(),
      datasets: [
        {
          data: this.doughnutData(),
          backgroundColor: ["#FBBD08",],
          hoverBackgroundColor: "#18A2B8",
          borderWidth: 0.5,
          borderColor: "#646D79",
        },
      ],
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
    };

    const horizontal = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Deaths per Country',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: '#dc3644',
          borderWidth: 1,
          hoverBackgroundColor: '#dc3644',
          hoverBorderColor: 'rgba(255,99,132,0.2)',

          // backgroundColor: "#dc3644",
          // borderColor: "#dc3644",
          // borderWidth: 2,
          // pointBackgroundColor: "#dc3644",
          // pointBorderColor: "#000000",
          // pointBorderWidth: 0.5,
          // pointStyle: "rectRounded",
          // hoverBackgroundColor: "#FFFFFF"
        }
      ]
    };
    const hOptions = {}

    return (
      <React.Fragment>
        <div id="line">
          <h4>{`${this.props.country}`} Data From Day of First Death</h4>
          <Line data={line} options={lOptions} />
        </div>
        <div id="doughnut">
          <h4>Country Case as % of Global Cases</h4>
          <Doughnut data={doughnut} options={dOptions} />
        </div>
        <div id='bar'>
          <h4>Horizontal Bar</h4>
          <HorizontalBar data={horizontal} />
        </div>
      </React.Fragment >
    );
  }
}

export default GraphContainer;
