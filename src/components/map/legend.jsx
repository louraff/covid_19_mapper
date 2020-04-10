import React, { Component } from 'react';


class Legend extends Component {
  state = {}
  render() {
    return (
      <div id="card" >
        <div>

          <div id="colour"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="30" height="30"
            viewBox="0 0 172 172"
            styles=" fill:#000000;"><g fill="none" fill-rule="nonzero" ><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#dc3645"><path d="M86,157.66667c-39.41667,0 -71.66667,-32.25 -71.66667,-71.66667c0,-39.41667 32.25,-71.66667 71.66667,-71.66667c39.41667,0 71.66667,32.25 71.66667,71.66667c0,39.41667 -32.25,71.66667 -71.66667,71.66667z">
            </path></g></g></svg><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="30" height="30"
              viewBox="0 0 172 172"
              styles=" fill:#000000;"><g fill="none" fill-rule="nonzero" ><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffc108"><path d="M86,157.66667c-39.41667,0 -71.66667,-32.25 -71.66667,-71.66667c0,-39.41667 32.25,-71.66667 71.66667,-71.66667c39.41667,0 71.66667,32.25 71.66667,71.66667c0,39.41667 -32.25,71.66667 -71.66667,71.66667z">
              </path></g></g></svg>Colour: Red if the countries Case Fatality Rate is greater than the global average</div>
        </div>
        <br></br>
        <br></br>
        <div id="size"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          width="30" height="30"
          viewBox="0 0 172 172"
          styles=" fill:#000000;"><g fill="none" fill-rule="nonzero" ><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#dc3645"><path d="M86,157.66667c-39.41667,0 -71.66667,-32.25 -71.66667,-71.66667c0,-39.41667 32.25,-71.66667 71.66667,-71.66667c39.41667,0 71.66667,32.25 71.66667,71.66667c0,39.41667 -32.25,71.66667 -71.66667,71.66667z">
          </path></g></g></svg><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="15" height="15"
            viewBox="0 0 172 172"
            styles=" fill:#000000;"><g fill="none" fill-rule="nonzero" ><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#dc3645"><path d="M86,157.66667c-39.41667,0 -71.66667,-32.25 -71.66667,-71.66667c0,-39.41667 32.25,-71.66667 71.66667,-71.66667c39.41667,0 71.66667,32.25 71.66667,71.66667c0,39.41667 -32.25,71.66667 -71.66667,71.66667z">
            </path></g></g></svg>Size</div>

      </div >
    );
  }
}

export default Legend;