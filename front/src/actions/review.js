export const SET_REVIEW_INPUT_VALUE = 'SET_REVIEW_INPUT_VALUE';
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const CREATE_REVIEW_SUCCESS = 'CREATE_REVIEW_SUCCESS';
export const CREATE_REVIEW_ERROR = 'CREATE_REVIEW_ERROR';
export const CLICK_ON_BUTTON_ADD_REVIEW = 'CLICK_ON_BUTTON_ADD_REVIEW';
export const CLICK_ON_BUTTON_CLOSE_ADD_REVIEW = 'CLICK_ON_BUTTON_CLOSE_ADD_REVIEW';
export const GET_ALL_REVIEWS_SUCCESS = 'GET_ALL_REVIEWS_SUCCESS';
export const GET_ALL_REVIEWS = 'GET_ALL_REVIEWS';

export const GET_ALL_REVIEWS_ERROR = 'GET_ALL_REVIEWS_ERROR';

export const createReviewSetInputValueAction = (newValue, name) => ({
  type: SET_REVIEW_INPUT_VALUE,
  value: newValue,
  name: name,
});

export const createReviewAction = () => ({ type: CREATE_REVIEW });

export const createReviewSuccessAction = (data) => ({ type: CREATE_REVIEW_SUCCESS, data });

export const createReviewErrorAction = () => ({ type: CREATE_REVIEW_ERROR });

export const clickOnButtonAddReview = () => ({ type: CLICK_ON_BUTTON_ADD_REVIEW });

export const clickOnButtonCloseAddReview = () => ({ type: CLICK_ON_BUTTON_CLOSE_ADD_REVIEW });

export const getAllReviewsAction = () => ({ type: GET_ALL_REVIEWS });

export const getAllReviewsSuccessAction = (data) => ({ type: GET_ALL_REVIEWS_SUCCESS, data });

export const getAllReviewsErrorAction = () => ({ type: GET_ALL_REVIEWS_ERROR });
