import {
  SET_REVIEW_INPUT_VALUE,
} from 'src/actions/review';

export const initialState = {
  reviewContent: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_REVIEW_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
