/* eslint-disable import/no-extraneous-dependencies */
// == Import : npm
import { combineReducers } from 'redux';

// == Import : local
import searchReducer from './search';
import userReducer from './user';
import contactReducer from './contact';
import reviewReducer from './review';

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
  contact: contactReducer,
  review: reviewReducer,
});

// == Export
export default rootReducer;
