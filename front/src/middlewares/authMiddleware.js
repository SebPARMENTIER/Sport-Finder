import axios from 'axios'

import { 
  CREATE_USER,
  SUBMIT_LOGIN,
  createUserSuccessAction,
  createUserErrorAction,
  createLoginSuccessAction,
  createLoginErrorAction
} from 'src/actions/user';

const authMiddleware = (store) => (next) => (action) => {
  if (action.type === CREATE_USER) {
    const state = store.getState();

    const config = {
      method: 'post',
      url: 'http://localhost:3001∕user',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        pseudo: state.user.pseudo,
        email: state.user.email,
        password: state.user.password,
        passwordConfirm: state.user.passwordConfirm,
      },
    };
    axios(config)
      .then((response) => {
        store.dispatch(createUserSuccessAction(response.data));
      })
      .catch(() => {
        store.dispatch(createUserErrorAction());
      });
  }
  else if (action.type === SUBMIT_LOGIN) {
    const state = store.getState();

    const config = {
      method: 'post',
      url: 'http://localhost:3001/login',
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