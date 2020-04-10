import React, { Component } from "react";
import {
  withGoogleMap,
  GoogleMap,
  Circle
} from "react-google-maps";
import styles from "./../assets/mapStyle.json";
import MapInfo from "./mapinfo";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.countryElement = React.createRef();

    this.state = {
      center: { lat: 40.4929, lng: 15.5553 },
      isMarkerShowing: true,
      selectedPlace: {},
      activeMarker: {},
    };
  }

  onMarkerClicked = (marker) => {
    this.countryElement.current.changeCountry(marker)
  };

  render() {
    const GoogleMapExample = withGoogleMap((props) => (
      <GoogleMap
        ref={this.map}
        defaultCenter={this.state.center}
        defaultZoom={2.25}
        options={{
          disableDefaultUI: true,
          styles: styles,
          minZoom: 2,
          maxZoom: 10,
          zoomControl: true,
        }}
        onIdle={this.handleIdle}
      >
        {this.props.countries.map((country, i) => (
          <Circle
            ref={this.circle}
            defaultCenter={country.center}
            radius={
              country.country === "USA"
                ? 220000
                : (country.confirmed / this.props.total[0]) * 100 <= 1.5 || NaN
                  ? 60000
                  : 160000
            }
            onClick={() => this.onMarkerClicked(country.country)}
            options={
              (country.deaths / country.confirmed) * 100 <= 2.5
                ? {
                  fillColor: "#28A745",
                  fillOpacity: 0.5,
                  strokeOpacity: 0.8,
                  strokeWeight: 0
                }
                : (country.deaths / country.confirmed) * 100 <= 5
                  ? {
                    fillColor: "#FFC108",
                    fillOpacity: 0.5,
                    strokeOpacity: 0.8,
                    strokeWeight: 0
                  }
                  : {
                    fillColor: "#DC3645",
                    fillOpacity: 0.5,
                    strokeOpacity: 0.8,
                    strokeWeight: 0
                  }
            }
          ></Circle>
        ))
        }
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
          <MapInfo
            ref={this.countryElement}
            countriesArray={this.props.countries}
          />
        </div>
      </div>
    );
  }
}

export default MapContainer;
