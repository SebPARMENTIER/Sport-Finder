import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import authMiddleware from 'src/middlewares/authMiddleware';
import searchMiddleware from 'src/middlewares/searchMiddleware';
import reviewMiddleware from 'src/middlewares/reviewMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(authMiddleware, searchMiddleware, reviewMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
