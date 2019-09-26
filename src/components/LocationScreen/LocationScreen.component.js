import React, { Component } from 'react';

import { MainContainer, MainContainerWrapper, ContentBox } from './LocationScreen.styles';
import LocationInfoBox from './LocationInfoBox/LocationInfoBox.component';


class ConversationsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.onRequestIP();

  }

  render() {
    return (
      <MainContainer>
        <MainContainerWrapper>
          <ContentBox>
            <LocationInfoBox geolocationFetched={this.props.geolocationFetched} inUSA={this.props.inUSA} distanceFromUSA={this.props.distanceFromUSA} state={this.props.geolocation.region_code} country={this.props.geolocation.country_code}></LocationInfoBox>
          </ContentBox>
        </MainContainerWrapper>
      </MainContainer>
    );
  }
}

export default ConversationsScreen;
