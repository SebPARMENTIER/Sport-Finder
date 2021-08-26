import { combineReducers } from 'redux';

import searchReducer from './search';
import userReducer from './user';
import contactReducer from './contact';

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
  contact: contactReducer,
});

export default rootReducer;