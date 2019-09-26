import styled from "styled-components";


import stickiesImg from '../../../assets/images/stickies.png';

const LocationInformationContainer = styled.div`
  background: url(${stickiesImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: initial;
  max-width: 300px;
  width: 100%;
  margin: 0px auto;
  padding: 35px 20px 140px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
`;

const LocationInformationStatus = styled.h2`
  color: #9c6bf8;
  margin: 10px 0px;
  font-size: 42px;
  text-align: center;
`;

const LocationInformation = styled.p`
  color: #766c56;
  margin: 60px 0px 0px;
  font-size: 30px;
  text-align: center;
`;

const LocationInformationDistance = styled.h3`
  color: #da56fc;
  margin: 10px 0px;
  text-align: center;
  font-size: 37px;
`;

export {
  LocationInformationContainer,
  LocationInformationStatus,
  LocationInformation,
  LocationInformationDistance
};
