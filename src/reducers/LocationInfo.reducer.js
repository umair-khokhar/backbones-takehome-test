import {
  REQUEST_IP,
  REQUEST_IP_ERROR,
  REQUEST_GEOLOCATION,
  REQUEST_GEOLOCATION_ERROR,
  REQUEST_GEOLOCATION_SUCCESS
} from "../actions/ActionTypes";

const initialState = {
  geolocation: {},
  geolocationInformationFetched: false,
  isFetching: false,
  error: false
};

const ConversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_IP:
      return {
        ...state,
        isFetching: true
      };
    case REQUEST_IP_ERROR:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    case REQUEST_GEOLOCATION:
      return {
        ...state,
        isFetching: true
      };
    case REQUEST_GEOLOCATION_SUCCESS:
      return {
        ...state,
        geolocationInformationFetched: true,
        geolocation: action.geolocation,
        isFetching: true
      };
    case REQUEST_GEOLOCATION_ERROR:
      return {
        ...state,
        isFetching: true
      };

    default:
      return state;
  }
};

export default ConversationsReducer;
