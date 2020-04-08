import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from "react-google-maps"
import styles from './../assets/mapStyle.json'

class MapContainer extends Component {
  state = {  }



  render() { 
    console.log(styles)
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.4929, lng: 15.5553 } }
        defaultZoom = { 2 }
        defaultOptions = {{ styles: styles}}
      >
        
      </GoogleMap>
    ));  


    return ( <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: '1000px', width: '1000px' }} /> }
          mapElement={ <div style={{ height: `100%`, width: '100%' }} /> }
        />
      </div> );
  }
}
 
export default MapContainer;