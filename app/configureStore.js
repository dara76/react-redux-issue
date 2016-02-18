import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
//import 'babel/polyfill';
//import sagaMiddleware from 'redux-saga'
//import sagas from './sagas'
//import { syncHistory } from 'react-router-redux'
//import { browserHistory } from 'react-router'

//const loggerMiddleware = createLogger();
//const reduxRouterMiddleware = syncHistory(browserHistory);

const createStoreWithMiddleware = applyMiddleware(
  //sagaMiddleware(...sagas),
  //reduxRouterMiddleware
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}

