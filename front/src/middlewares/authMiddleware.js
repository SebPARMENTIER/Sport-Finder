import axios from 'axios'

import { 
  CREATE_USER,
  SUBMIT_LOGIN,
  createUserErrorAction,
  createLoginSuccessAction,
  createLoginErrorAction
} from 'src/actions/user';
import { CREATE_USER_SUCCESS } from '../actions/user';

const authMiddleware = (store) => (next) => (action) => {
  if (action.type === CREATE_USER) {
    const state = store.getState();

    const config = {
      method: 'post',
      url: 'https://sportfinder.herokuapp.com/api/v1/signup',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        pseudo: state.user.pseudo,
        email: state.user.email,
        password: state.user.password,
        // passwordConfirm: state.user.passwordConfirm,
      },
    };
    axios(config)
      .then((response) => {
        store.dispatch(createUserAction(response.data));
      })
      .catch(() => {
        store.dispatch(createUserErrorAction());
      });
  }
  else if (action.type === SUBMIT_LOGIN) {
    const state = store.getState();

    const config = {
      method: 'post',
      url: 'https://sportfinder.herokuapp.com/api/v1/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email: state.user.email,
        password: state.user.password,
      },
    };

    axios(config)
      .then((response) => {
        store.dispatch(createLoginSuccessAction(response.data));
      })
      .catch(() => {
        store.dispatch(createLoginErrorAction());
      });
  }
  else {
    next(action);
  }
};

export default authMiddleware;
