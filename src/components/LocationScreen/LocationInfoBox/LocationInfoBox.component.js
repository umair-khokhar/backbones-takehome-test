import React, { Component } from "react";

import { LocationInformationContainer, LocationInformationStatus, LocationInformation, LocationInformationDistance } from "./LocationInfoBox.styles";

class LocationInfo extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    if (this.props.geolocationFetched) {
      if (this.props.inUSA) {
        return (
          <LocationInformationContainer>
            <LocationInformationStatus>You are where you should be!</LocationInformationStatus> 
            <LocationInformation>{this.props.state}, {this.props.country}</LocationInformation>
          </LocationInformationContainer>
        );
      } else {
        return (
          <LocationInformationContainer>
            <LocationInformationStatus>Pack your bags!</LocationInformationStatus> 
            <LocationInformationDistance>You're {this.props.distanceFromUSA} miles aways from USA</LocationInformationDistance>
            <LocationInformation>{this.props.state}, {this.props.country}</LocationInformation>
          </LocationInformationContainer>
        );
      }
    } else {
      return (
        <LocationInformationContainer>
          Fetching Geolocaton ...
        </LocationInformationContainer>
      );
    }
  }
}

export default LocationInfo;
