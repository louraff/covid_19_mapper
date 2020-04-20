import React, { Component } from 'react';
import { Line } from 'react-chartjs-2'


class GraphContainer extends Component {

  
  state = {
    data: []
  }
  
  componentDidMount() {
    fetch("https://pomber.github.io/covid19/timeseries.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data
        })
      });
  }
  
  render() {
  
    const data = {
      labels: [
        '10/04/2018', '10/05/2018',
        '10/06/2018', '10/07/2018',
        '10/08/2018', '10/09/2018',
        '10/10/2018', '10/11/2018',
        '10/12/2018', '10/13/2018',
        '10/14/2018', '10/15/2018'
      ],
      datasets: [
        {
          label: 'Temperature',
          data: [22, 19, 27, 23, 22, 24, 17, 25, 23, 24, 20, 19],
          fill: false,          // Don't fill area under the line
          borderColor: 'green'  // Line color
        }
      ]
    }
  
    // console.log(this.state.data)
    return (
      <div className="App">
      
        <Line data={data} />
    
      </div>
    )
  }
}

export default GraphContainer;