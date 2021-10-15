/* eslint-disable import/no-unresolved */
// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// == Import : local
import store from 'src/store';
import App from 'src/containers/App';

// == Component
const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const target = document.getElementById('root');

render(rootReactElement, target);
