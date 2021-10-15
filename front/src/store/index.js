/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
// == Import : npm
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';

// == Import : local
import reducer from 'src/reducers';
import authMiddleware from 'src/middlewares/authMiddleware';
import searchMiddleware from 'src/middlewares/searchMiddleware';
import reviewMiddleware from 'src/middlewares/reviewMiddleware';
import mapMiddleware from 'src/middlewares/mapMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(authMiddleware, searchMiddleware, reviewMiddleware, mapMiddleware),
);

const store = createStore(reducer, enhancers);

// == Export
export default store;
