import { connect } from 'react-redux'
import { fetchGeolocation } from '../../actions/Actions';
import LocationScreen from './LocationScreen.component';


const checkIfInUSA = (countryCode) => {
  if(countryCode === 'US') 
    return true;

  return false;
};


const calculateDistanceFromWashingtonDC = (geolocation) => {

  const rad = function(x) {
    return x * Math.PI / 180;
  };
  
  if(!checkIfInUSA(geolocation.country_code)) {
      const R = 6378137; // Earth’s mean radius in meter
      const washingtonLat = 38.89511;
      const washingtonLng = -77.03637;
      const dLat = rad(geolocation.latitude - washingtonLat);
      const dLong = rad(geolocation.longitude - washingtonLng);
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(washingtonLat)) * Math.cos(rad(geolocation.latitude)) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c;
      return Math.ceil(d * 0.000621371192); 
  }

  return 0;
};


const mapStateToProps = state => {
  return {
    geolocation: state.locationInfo.geolocation,
    distanceFromUSA: calculateDistanceFromWashingtonDC(state.locationInfo.geolocation),
    inUSA: checkIfInUSA(state.locationInfo.geolocation.country_code),
    geolocationFetched: state.locationInfo.geolocationInformationFetched
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRequestIP: () => {
      dispatch(fetchGeolocation());
    }
  }
};

const LocationScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationScreen);

export default LocationScreenContainer