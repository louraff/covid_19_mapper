import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, InfoWindow, Marker, Circle } from "react-google-maps"
import styles from './../assets/mapStyle.json'
import MapInfo from './mapinfo'

class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.countryElement = React.createRef();
    this.state = {
      center: { lat: 40.4929, lng: 15.5553 },
      isMarkerShowing: true,
      selectedPlace: {},
      activeMarker: {},
    }
  }

  onMarkerClicked = (marker) => {
    this.countryElement.current.changeCountry(marker)
  };

  onCircleClicked = (props) => {
    console.log(props)
  }

  render() {
    const GoogleMapExample = withGoogleMap((props) => (
      <GoogleMap
        defaultCenter={this.state.center}
        defaultZoom={2.25}
        options={{
          disableDefaultUI: true,
          styles: styles,
          minZoom: 2,
          maxZoom: 10,
          zoomControl: true
        }}
      >
        {this.props.countries.map((country, i) => (
          <Circle
            // key={i}
            defaultCenter={country.center}
            radius={100000}
            onClick={() => this.onMarkerClicked(country.country)}
            options={country.us ?
              {
                fillColor: '#007aa3',
                fillOpacity: 0.4,
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 0
              }
              : {
                fillColor: '#FF0000',
                fillOpacity: 0.3,
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 0
              }
            }
          >
          </Circle>
        ))}
      </GoogleMap>
    ));

    return (
      <div>
        <div>
          <GoogleMapExample
            containerElement={<div id="container" />}
            mapElement={<div id="map" />}
          />
        </div>
        <div id="mapinfo">
          <MapInfo ref={this.countryElement} countriesArray={this.props.countries} />
        </div>
      </div>
    );
  }
}

export default MapContainer;
