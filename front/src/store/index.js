import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import authMiddleware from 'src/middlewares/authMiddleware';
import searchMiddleware from 'src/middlewares/searchMiddleware';
import mapMiddleware from 'src/middlewares/mapMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(authMiddleware, searchMiddleware, mapMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;