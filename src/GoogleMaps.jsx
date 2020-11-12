import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class GoogleMaps extends Component {
  state={
    selectedPlace:{
      name:"Ranchi"
    }
  }

  handleChange=(e)=>{
    console.log("Location:",e.target.value);
    //To be sent as selectedPlace
    this.setState({
      selectedPlace:{
        name:e.target.value
      }
    },()=>console.log("After Set State:",this.state.selectedPlace.name))
  }

  render() {
    return (
      <div>
        <h2>My Map here</h2>
        <input type="text" placeholder="Enter Location" onChange={this.handleChange}/>
        <Map google={this.props.google} zoom={14}>
          <Marker onClick={(e)=>this.onMarkerClick(e)} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose}>
             <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> 
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDQW8bd3zyLQgvyHIOBmaqhT9dfl7AQQ5U")
})(GoogleMaps)
