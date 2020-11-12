import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class GoogleMaps extends Component {
  render() {
    return (
      <div>
        <h2>My Map here</h2>
        <Map google={this.props.google} zoom={14}>
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            {/* <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> */}
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("YOUR_GOOGLE_API_KEY_GOES_HERE")
})(GoogleMaps)
