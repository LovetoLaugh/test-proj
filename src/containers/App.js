import React, { Component } from 'react';
import PokedexApp from './PokedexApp';
import { createStore, combineReducers, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import * as reducers from '../reducers';
import mySaga from '../sagas/sagas.js';

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers(reducers);
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(mySaga);

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <PokedexApp />
        </Provider>
    );
  }
}
