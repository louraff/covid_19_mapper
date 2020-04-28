import React, { Component } from 'react';
import { defaults } from "react-chartjs-2";
import GlobalDeathsBar from "./global_deaths_bar/global_deaths_bar"

class GlobalGraphContainer extends Component {
  state = {  }

  render() { 

    defaults.global.defaultFontColor = "white";
    return (  
      <div id="b">
        <GlobalDeathsBar countries={this.props.countries} />
      </div>
    );
  }
}
 
export default GlobalGraphContainer;