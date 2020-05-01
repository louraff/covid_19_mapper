import React, { Component } from 'react';
import { Line } from "react-chartjs-2";
import Button from "react-bootstrap/Button";
import popData from "../../../assets/popData"

class ComparisonLineContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      button: false,
      million: false, 
    }
  } 

  createComparisonData = (index) => {

    if (this.props.data !== undefined && this.props.top10Data[index] !== undefined) {
      const top10Data = {
        confirmed: [],
        deaths: []
      }
      var country = this.props.top10Data[index]
      this.props.data[country].forEach(day => {
        if (day.deaths !== 0) {
          top10Data.confirmed.push(day.confirmed)
          top10Data.deaths.push(day.deaths)
        }
      })
      if(this.state.button) {
        return top10Data.deaths
      }else{
        return top10Data.confirmed
      }
    }
  }

  createComparison1mData = (index) => {
    if (this.props.data !== undefined && this.props.top10Data[index] !== undefined) {
      const top10Data = {
        confirmed: [],
        deaths: []
      }
      let pop; 
      var country = this.props.top10Data[index]
      popData.popData.forEach(obj => {
        if(obj.name === country){
          pop = obj.pop2020
          return pop
        }
      })
      this.props.data[country].forEach(day => {
        if (day.deaths !== 0) {
          top10Data.confirmed.push( day.confirmed / (parseFloat(pop.replace(/,/g, "")) / 1000) )
          top10Data.deaths.push( day.deaths / (parseFloat(pop.replace(/,/g, "")) / 1000) )
        }
      })
      if(this.state.button) {
        return top10Data.deaths
      } else {
        return top10Data.confirmed
      }
    }
  }

  createComparisonLabels = (index) => {
    if (this.props.top10Data !== undefined) {
      return this.props.top10Data[index]
    }

  }

  createDates = () => {
    let array_of_lengths = []
    let max_len;
    if (this.props.top10Data[0] !== undefined && this.props.selected !== undefined && this.props.data !== undefined) {
      if (this.props.selected !== "China") {
        let allCountries = this.props.top10Data
        allCountries.forEach(country => {
          let place = []

          this.props.data[country].forEach(day => {
            if (day.deaths !== 0) {
              place.push(day);
            }
          })
          array_of_lengths.push(place.length)
        })
        max_len = Math.max(...array_of_lengths)
      } else {
        let place = []
        this.props.data["China"].forEach(day => {
          if (day.deaths !== 0) {
            place.push(day);
          }
        })
        array_of_lengths.push(place.length)
        max_len = Math.max(...array_of_lengths)
      }
      return Array.from(Array(max_len).keys())
    }
  }


  createLineData = () => {
    let country = {
      confirmed: [],
      deaths: []
    }

    let countryData = []

    if (this.props.data[this.props.selected] !== undefined) {
      countryData.push(this.props.data[this.props.selected]);
      countryData[0].forEach((date) => {
        if (date.deaths !== 0) {
          country.confirmed.push(date.confirmed);
          country.deaths.push(date.deaths)
        }
      });

      if(this.state.button) {
        return country.deaths
      }else{
        return country.confirmed
      }
    }
  };

  createLine1mData = () => {
    if (this.props.data[this.props.selected] !== undefined) {
      let country = {
        confirmed: [],
        deaths: []
      }
  
      let countryData = []
  
      let pop; 
      let selected = this.props.selected
      popData.popData.forEach(obj => {
      if(obj.name === selected){
          pop = obj.pop2020
          return pop
        }
      })
      
      countryData.push(this.props.data[this.props.selected]);
      countryData[0].forEach((date) => {
        if (date.deaths !== 0) {
          country.confirmed.push(date.confirmed / (parseFloat(pop.replace(/,/g, "")) / 1000));
          country.deaths.push(date.deaths / (parseFloat(pop.replace(/,/g, "")) / 1000))
        }
      });

      if(this.state.button) {
        return country.deaths
      }else{
        return country.confirmed
      }
    }
  }

  generateDataSets = () => {
    // console.log("the button",this.state.button)
    // console.log("the adj", this.state.million)
    let top10 = []
    var country = this.props.top10Data
    let casesColours = ["#008FB2", "#00A3B9", "#39AABB","#5FB2BE", "#7ABBC1", "#95C3C4", "#AFCCC7", "#C8D6CA", "#E2E0CD", "#FDE9CD"]
    let deathColours = ["#CD1F43", "#CC3B49", "#CD524F", "#CE6555", "#CF765B", "#D08661", "#D19768", "#D2AA6F", "#D3BA75", "#D5CB7B"]
    if (this.props.top10Data[this.props.selected] === undefined) {

      if (country.includes(this.props.selected)) {
        country.forEach((country, i) => {
          if (country !== this.props.selected) { 
            top10.push({
              label: country,
              data: this.state.million ? this.createComparison1mData(i) : this.createComparisonData(i),
              fill: false,
              hidden: true,
              fillStyle: this.state.button ?  deathColours[i] :  casesColours[i],
              backgroundColor: this.state.button ?  deathColours[i] :  casesColours[i],
              borderColor: this.state.button ?  deathColours[i] :  casesColours[i],
              borderWidth: 2,
              pointBackgroundColor: this.state.button ?  deathColours[i] : casesColours[i],
              pointBorderColor: "#000000",
              pointBorderWidth: 0.5,
              pointStyle: "rectRounded",
              pointRadius: 2.5,
              pointHitRadius: 4,
              pointHoverRadius: 5,
              hoverBackgroundColor: "#FFFFFF",
            })
          }
          if (country === this.props.selected) {
            top10.unshift({
              label: country,
              data: this.state.million ? this.createLine1mData() : this.createLineData(),
              fill: false,
              hidden: false,
              backgroundColor: "#fbbd08",
              borderColor: "#fbbd08",
              borderWidth: 2,
              pointBackgroundColor: "#fbbd08",
              pointBorderColor: "#fbbd08",
              pointBorderWidth: 0.5,
              pointStyle: "star",
              pointRadius: 4,
              pointHitRadius: 4,
              pointHoverRadius: 5,
              hoverBackgroundColor: "#FFFFFF",
            })
          }
        })
      } else {
        country.forEach((country, i) => {
          top10.push({
            label: country,
            data: this.state.million ? this.createComparison1mData(i) : this.createComparisonData(i),
            fill: false,
            fillStyle: this.state.button ?  deathColours[i] :  casesColours[i],
            backgroundColor: this.state.button ?  deathColours[i] :  casesColours[i],
            borderColor: this.state.button ?  deathColours[i] :  casesColours[i],
            borderWidth: 2,
            hidden: true,
            pointBackgroundColor: this.state.button ?  deathColours[i] :  casesColours[i],
            pointBorderColor: "#000000",
            pointBorderWidth: 0.5,
            pointStyle: "rectRounded",
            pointRadius: 2.5,
            pointHitRadius: 4,
            pointHoverRadius: 5,
            hoverBackgroundColor: "#FFFFFF",
          })
        })
        top10.unshift({
          label: this.props.selected,
          data: this.state.million ? this.createLine1mData() : this.createLineData(),
          fill: false,
          hidden: false,
          backgroundColor:"#fbbd08",
          borderColor: "#fbbd08",
          borderWidth: 2,
          pointBackgroundColor: "#fbbd08",
          pointBorderColor: "#fbbd08",
          pointBorderWidth: 0.5,
          pointStyle: "star",
          pointRadius: 4,
          pointHitRadius: 4,
          pointHoverRadius: 5,
          hoverBackgroundColor: "#FFFFFF",
        })
      }
      return top10
    }
  }

  handleClick = () => {
    console.log("Button is Clicked")
    this.setState({
      button: !this.state.button,
    })
  }

  handleClickMillion = () => {
    console.log("Million is Clicked")
    this.setState({
      million: !this.state.million,
    })
  }

  render() {
    const line = {
      labels: this.createDates(),
      datasets: this.generateDataSets(),
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
              labelString: "Days Passed Since First Death",
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
      legend: this.state.button ? {
        display: true,
        position: "right",
        align: "center",
        labels: {
          fontSize: 12,
          fontStyle: "bold",
          fontColor: "#FFFFFF",
          usePointStyle: true,
        }
      } :
      {
        display: true,
        position: "right",
        align: "center",
        labels: {
          fontSize: 12,
          fontStyle: "bold",
          fontColor: "#FFFFFF",
          usePointStyle: true,
        }
      },
      tooltips: !this.state.button ? {
        callbacks: { 
          title: function (tooltipItems, data) {
            if (data !== undefined) {
              return [data.datasets[tooltipItems[0].datasetIndex]["label"],
              ]
            }
          },
          label: function (tooltipItems, data) {
            return "Cases: " + data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + "   Day: " + data.labels[tooltipItems.index]
          }
        }} : {callbacks: {
        title: function (tooltipItems, data) {
          if (data !== undefined) {
            return [data.datasets[tooltipItems[0].datasetIndex]["label"],
            ]
          }
        },
        label: function (tooltipItems, data) {
          return "Deaths: " + data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + "   Day: " + data.labels[tooltipItems.index]
        }
      },
      },
      lineTension: 3,
      borderWidth: 2,
  }

    //     xAxes: [
    //       {
    //         ticks: {
    //           display: true,
    //           major: {
    //             fontStyle: "bold",
    //             fontColor: "#FFFFFF",
    //           },
    //         },
    //         gridLines: {
    //           display: false,
    //           drawBorder: true,
    //         },
    //         scaleLabel: {
    //           display: true,
    //           labelString: "Days Passed Since First Death",
    //           fontStyle: "bold",
    //           fontColor: "#FFFFFF",
    //         },
    //       },
    //     ],
    //     yAxes: [
    //       {
    //         ticks: {
    //           display: true,
    //           major: {
    //             fontStyle: "bold",
    //             fontColor: "#FFFFFF",
    //           },
    //         },
    //         gridLines: {
    //           display: true,
    //           drawBorder: true,
    //         },
    //         scaleLabel: {
    //           display: true,
    //           labelString: "No of People",
    //           fontStyle: "bold",
    //           fontColor: "#FFFFFF",
    //         },
    //       },
    //     ],
    //   },
    //   legend: {
    //     display: true,
    //     position: "right",
    //     align: "center",
    //     labels: {
    //       fontSize: 12,
    //       fontStyle: "bold",
    //       fontColor: "#FFFFFF",
    //  
    //     
    // 
    return (
     <React.Fragment>
       {console.log("button && million", (this.state.button && this.state.million))}
       {console.log("!button && million", (!this.state.button && this.state.million))}
       {console.log("button && !million", (this.state.button && !this.state.million))}
       {console.log("!button && !million", (!this.state.button && !this.state.million))}



      {!this.state.button && (
        <div>
          <h4>Case Comparison</h4>
          <br></br>
          <Button onClick={this.handleClick} variant={"danger"} className={'m-2'}>
            Show Deaths
          </Button>
          {this.state.million && (
            <div>
              <Button onClick={this.handleClickMillion} variant={"warning"}className={'m-2'}>
              Raw Stats
              </Button>
            </div>
          )}
          {!this.state.million && (
            <div>
              <Button onClick={this.handleClickMillion} variant={"warning"}className={'m-2'}>
              Adjusted per 1 Million People
              </Button>
            </div>
          )}
          {/* <Line data={line} options={options} /> */}
        </div>
      )}
      {this.state.button && (
        <div>
          <h4>Death Comparison</h4>
          <br></br>
          <Button onClick={this.handleClick} variant={"info"} className={'m-2'}>
            Show Cases
          </Button>
          {this.state.million && (
            <div>
              <Button onClick={this.handleClickMillion} variant={"warning"}className={'m-2'}>
                Raw Stats
              </Button>
            </div>
          )}
          {!this.state.million && (
            <div>
              <Button onClick={this.handleClickMillion} variant={"warning"}className={'m-2'}>
              Adjusted per 1 Million People
              </Button>
            </div>
          )}
          {/* <Line data={line} options={options} /> */}
        </div>
      )}
      <div>
      <Line data={line} options={options} />
      </div>
    </React.Fragment>
    );
  }
}

export default ComparisonLineContainer;