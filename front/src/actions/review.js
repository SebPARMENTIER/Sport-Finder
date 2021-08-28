export const SET_REVIEW_INPUT_VALUE = 'SET_REVIEW_INPUT_VALUE';
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const CLICK_ON_BUTTON_ADD_REVIEW = 'CLICK_ON_BUTTON_ADD_REVIEW';
export const CLICK_ON_BUTTON__CLOSE_ADD_REVIEW = 'CLICK_ON_BUTTON__CLOSE_ADD_REVIEW';

export const createReviewSetInputValueAction = (newValue, name) => ({
  type: SET_REVIEW_INPUT_VALUE,
  value: newValue,
  name: name,
});

export const createReviewAction = () => ({ type: CREATE_REVIEW });

export const clickOnButtonAddReview = () => ({ type: CLICK_ON_BUTTON_ADD_REVIEW });

export const clickOnButtonCloseAddReview = () => ({ type: CLICK_ON_BUTTON__CLOSE_ADD_REVIEW })
