import React, { Component } from "react";
import {
  Map,
  GoogleApiWrapper,
  Marker,
  InfoWindow,
  Circle
} from "google-maps-react";
import styles from "./assets/mapStyle.json";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMarkerShowing: true,
      activeMarker: null,
      selectedPlace: {},
      activeMarker: {}
    };
  }

  onMapClicked = (mapProps, map, event) => {
    this.setState({
      isMarkerShowing: false,
      activeMarker: ""
    });
  };

  onMarkerClicked = (props, marker, event) => {
    this.setState({
      isMarkerShowing: true,
      selectedPlace: props,
      activeMarker: marker
    });
  };

  generateMarkers = () => {
    return this.props.countries.map((country, i) => {
      return (
        <Marker
          id={country.country}
          key={i}
          position={country.center}
          onClick={this.onMarkerClicked}
          icon={ country.us ? "http://maps.google.com/mapfiles/ms/icons/blue.png" : "http://maps.google.com/mapfiles/ms/icons/purple.png"}
        ></Marker>
      );
    });
  };

  render() {
    return (
      <Map
        google={this.props.google}
        styles={styles}
        initialCenter={{ lat: 29.94, lng: 31.548 }}
        zoom={2.25}
        minZoom={2.24}
        maxZoom={12}
        onClick={this.onMapClicked}
        disableDefaultUI={true}
      >
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.isMarkerShowing}
        >
          {this.props.countries.map(country => {
            if (country.country === this.state.selectedPlace.id) {
              return (
                <div>
                  <h6>{country.country}</h6>
                  Confirmed Cases: {country.confirmed}
                  <br></br>
                  Deaths: {country.deaths}
                  <br></br>
                  Recoveries: {country.recovered}
                </div>
              );
            }
          })}
        </InfoWindow>
        {this.generateMarkers()}
      </Map>
    );
    // };
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA6sCpEaxSZBY0P5v7ugZZ2HgJlAdlyhiQ"
})(MapContainer);
