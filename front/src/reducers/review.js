import {
  SET_REVIEW_INPUT_VALUE,
  CLICK_ON_BUTTON_ADD_REVIEW,
  CLICK_ON_BUTTON__CLOSE_ADD_REVIEW,
} from 'src/actions/review';

export const initialState = {
  reviewContent: '',
  openAddReview: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_REVIEW_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CLICK_ON_BUTTON_ADD_REVIEW:
      return {
        ...state,
        openAddReview: !state.openAddReview,
      };
    case CLICK_ON_BUTTON__CLOSE_ADD_REVIEW:
      return {
        ...state,
        openAddReview: false,
      };
    default:
      return state;
  }
};

export default reducer;
