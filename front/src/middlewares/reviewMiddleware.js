import axios from 'axios'

import {
  CREATE_REVIEW,
} from 'src/actions/review';

const reviewMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case CREATE_REVIEW: {
      const config = {
        method: 'post',
        url: 'https://sportfinder.herokuapp.com/api/v1/review',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          content: state.review.reviewContent,
          star: 1,
          //association_id: 37415680,
          user_id: 136,
        },
      };
      axios(config)
        .then((response) => {
          store.dispatch(createUserSuccessAction(response.data));
          console.log(response.data.isCreateUserSuccess);
        })
        .catch((error) => {
          store.dispatch(createUserErrorAction());
          console.log(error);
        });
        break;
    }    
    default:
        next(action);
  }    
};

export default reviewMiddleware;