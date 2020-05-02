import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import Button from "react-bootstrap/Button";
import GlobalCasesDoughnut from './../global_cases_doughnut/global_cases_doughnut'

class CountryDataLine extends Component {

  state ={
    doughnut: false
  }

  createLineData = (type) => {
    const graphData = {
      deaths: [],
      confirmed: [],
      recoveries: [],
    };

    const countryData = this.props.data[this.props.country];

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

  handleDoughnutClick = () => {
    this.setState({
      doughnut: !this.state.doughnut
    })
  }

  render() {
    
    const line = {
      labels: this.props.createLineLabels,
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
          pointRadius: 4,
          pointHitRadius: 5,
          pointHoverRadius: 5,
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
          pointRadius: 4,
          pointHitRadius: 5,
          pointHoverRadius: 5,
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
        position: "right",
        align: "center",
        labels: {
          fontSize: 12,
          fontStyle: "bold",
          fontColor: "#FFFFFF",
          // usePointStyle: true,
        },
      },
      lineTension: 3,
      borderWidth: 2,
    };

    return (
        <React.Fragment>
        
        {!this.state.doughnut && (
        <div>
        <h4>{`${this.props.country}`} Data</h4>
        <br></br>
        <Button onClick={this.handleDoughnutClick} variant={"info"}>Show {`${this.props.country}`} Cases as % of Global Cases </Button> 
        <Line data={line} options={options} />
        </div>
        )}
        {this.state.doughnut && (
          <div>
           <h4>{`${this.props.country}`} as % of Global Cases</h4>
           <br></br>
           <Button onClick={this.handleDoughnutClick} variant={"warning"}>Show Data of {`${this.props.country}`} </Button> 
           <GlobalCasesDoughnut country={this.props.country} countries={this.props.countries} total={this.props.total} />
           </div>
        )}
        </React.Fragment>
    );
  }
}

export default CountryDataLine;
