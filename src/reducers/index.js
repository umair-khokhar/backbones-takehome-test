import { combineReducers } from 'redux';
import LocationInfor from './LocationInfo.reducer';
export default combineReducers({
    locationInfo: LocationInfor,
});