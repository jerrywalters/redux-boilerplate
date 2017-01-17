import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/reducers'
import initialState from './initialState'
import App from './components/App';
import './index.css';

let store = createStore(reducers, initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
