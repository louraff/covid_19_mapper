import React, { Component } from "react";
import {
  Map,
  GoogleApiWrapper,
  Marker,
  InfoWindow,
  Circle,
} from "google-maps-react";
import styles from "./assets/mapStyle.json";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: { lat: 40.4929, lng: 15.5553 },
      isMarkerShowing: true,
      activeMarker: null,
      selectedPlace: {},
      activeMarker: {},
    };
  }

  // onMapClicked = (mapProps, map, event) => {
  // console.log("mapProps", mapProps);
  // console.log("map", map);
  // console.log("event", event);
  // if (data.marginBounds.nw.lat >= 85 || data.marginBounds.se.lat <= -85) {
  //   this.setState({
  //     center: [this.state.center[0] + 0.00100, this.state.center[1]],
  //   });
  // }
  // this.setState({
  //   isMarkerShowing: false,
  //   activeMarker: ""
  // });
  // };

  onMarkerClicked = (props, marker, event) => {
    this.setState({
      isMarkerShowing: true,
      selectedPlace: props,
      activeMarker: marker,
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
          icon={
            country.us
              ? "http://maps.google.com/mapfiles/ms/icons/blue.png"
              : "http://maps.google.com/mapfiles/ms/icons/purple.png"
          }
        ></Marker>
      );
    });
  };

  render() {
    return (
      <div className="Map">
        <Map
          google={this.props.google}
          styles={styles}
          initialCenter={this.state.center}
          zoom={2.2}
          minZoom={2.2}
          maxZoom={12}
          // onClick={this.onMapClicked}
          disableDefaultUI={true}
        // onClick={this.onChange}
        >
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.isMarkerShowing}
          >
            {this.props.countries.map((country) => {
              if (country.country === this.state.selectedPlace.id) {
                if (country.us) {
                  return (
                    <div>
                      <h6>{country.country}</h6>
                      Total Cases: {country.confirmed}
                      <br></br>
                      Total Deaths: {country.deaths}
                    </div>
                  );
                } else {
                  return (
                    <div>
                      <h6>{country.country}</h6>
                      Total Cases: {country.confirmed}
                      <br></br>
                      Total Deaths: {country.deaths}
                      <br></br>
                      Total Recoveries: {country.recovered}
                      <br></br>
                      Active Cases: {country.activeCases}
                      <br></br>
                      Critical Cases: {country.criticalCases}
                      <br></br>
                      New Cases: {country.newCases}
                      <br></br>
                      New Deaths: {country.newDeaths}
                      <br></br>
                      Cases per Million: {country.perOneMillion}
                    </div>
                  );
                }
              }
            })}
          </InfoWindow>
          {this.generateMarkers()}
        </Map>
      </div>
    );
    // };
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API,
})(MapContainer);
