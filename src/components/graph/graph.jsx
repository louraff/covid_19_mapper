import React, { Component } from 'react';

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
    console.log(this.state.data)
    return (null);
  }
}

export default GraphContainer;