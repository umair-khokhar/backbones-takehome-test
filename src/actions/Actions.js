import {  
  REQUEST_IP, 
  REQUEST_IP_ERROR,
  REQUEST_GEOLOCATION,
  REQUEST_GEOLOCATION_SUCCESS,
  REQUEST_GEOLOCATION_ERROR } from './ActionTypes';

export function requestIP() {
  return {
    type: REQUEST_IP,
    isFetching: true,
    error: false,
  }
}


export function requestIPError(error) {
  return {
    type: REQUEST_IP_ERROR,
    isFetching: false,
    error: error,
  }
}


export function requestGeolocation() {
  return {
    type: REQUEST_GEOLOCATION,
    isFetching: true,
    error: false,
  }
}

export function requestGeolocationSuccess(json) {
  return {
    type: REQUEST_GEOLOCATION_SUCCESS,
    geolocation: json,
    isFetching: true,
    error: false,
  }
}
export function requestGeolocationError(error) {
  return {
    type: REQUEST_GEOLOCATION_ERROR,
    isFetching: false,
    error: error,
  }
}


export function fetchGeolocation() {
  return function (dispatch) {
    dispatch(requestIP());

    return fetch(`https://api.ipify.org/?format=json`)
    .then(
      response => response.json(),
      error => {
        dispatch(requestIPError(error));
        console.log('An error occurred.', error);
      }
    )
    .then(json => {
        dispatch(requestGeolocation())
        return fetch(`http://api.ipapi.com/${json.ip}?access_key=5b810a4d96b6dd00272a0b332df5db1d&format=1`);
      }
    )
    .then(
      response => response.json(),
      error => {
        dispatch(requestIPError(error));
        console.log('An error occurred.', error);
      }
    )
    .then(json => {
      dispatch(requestGeolocationSuccess(json))
    }
  )
  } 
}
