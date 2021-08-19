import {
  SET_INPUT_VALUE,
  SEARCH,
} from 'src/actions/search';

export const initialState = {
  city: '',
  sport: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;