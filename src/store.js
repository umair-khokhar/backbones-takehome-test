import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';
const configureStore = ( initialState = {} ) => {
  const enhancer = compose(
    applyMiddleware(
      reduxThunk,
      logger,
  ));
    return createStore(reducers, initialState, enhancer);
};
const store = configureStore({});
export default store;