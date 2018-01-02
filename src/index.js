import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Movies from './components/Movies';
import reducer from './reducer';

// Create redux store
const store = createStore(reducer);

// Render react application with redux store
ReactDOM.render(
  <Provider store={store}>
    <Movies />
  </Provider>,
  document.getElementById('root'),
);
