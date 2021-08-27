import { combineReducers } from 'redux';

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

export default rootReducer;
