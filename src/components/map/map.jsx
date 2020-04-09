import React, { Component } from "react";
import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker,
  Circle,
} from "react-google-maps";
import styles from "./../assets/mapStyle.json";
import MapInfo from "./mapinfo";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.map = React.createRef();
    this.circle = React.createRef();
    this.countryElement = React.createRef();
    this.getZoom = this.getZoom.bind(this);
    this.idleCalled = false;

    this.state = {
      center: { lat: 40.4929, lng: 15.5553 },
      isMarkerShowing: true,
      selectedPlace: {},
      activeMarker: {},
    };
  }
  getCircle(magnitude) {
    return {
      path: this.circle.current,
      scale: Math.pow(2, magnitude) / 2,
    };
  }

  getZoom() {
    return this.map.current.getZoom();
  }

  // handleIdle() {
  //   // console.log(this.idleCalled);
  //   if (!this.idleCalled) {
  //     console.log(this.circle);
  //     if (this.circle.current !== null) {
  //       // console.log(this.circle.current.getRadius());
  //       this.changeCircleRadius();
  //       // this.map.current.this.idleCalled = false;
  //     }
  //   }
  // }

  // changeCircleRadius() {
  //   if (this.getZoom() <= 4) {
  //     return 25000;
  //   } else if (this.getZoom() > 3 && this.getZoom() <= 8) {
  //     return 12500;
  //   } else {
  //     return 10000;
  //   }
  // }

  onMarkerClicked = (marker) => {
    this.countryElement.current.changeCountry(marker);
  };

  onCircleClicked = (props) => {
    console.log(props);
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
              (country.confirmed / this.props.total[0]) * 100 <= 1.5 || NaN
                ? 60000
                : 160000
            }
            onClick={() => this.onMarkerClicked(country.country)}
            options={
              country.us
                ? {
                    strokeColor: "",
                    strokeOpacity: 0.8,
                    strokeWeight: 0.2,
                  }
                : 
                (country.deaths / country.confirmed) * 100 <= 2.5
                ? {
                    fillColor: "#28A745",
                    fillOpacity: 0.5,
                    strokeOpacity: 0.8,
                    strokeWeight: 0,
                  }
                : (country.deaths / country.confirmed) * 100 <= 5
                ? {
                    fillColor: "#FFC108",
                    fillOpacity: 0.5,
                    strokeOpacity: 0.8,
                    strokeWeight: 0,
                  }
                : {
                    fillColor: "#DC3645",
                    fillOpacity: 0.5,
                    strokeOpacity: 0.8,
                    strokeWeight: 0,
                  }
            }
          ></Circle>
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
