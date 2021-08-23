import axios from 'axios'

import { 
  CREATE_USER,
  SUBMIT_LOGIN,
  DELETE_PROFIL,
  createUserSuccessAction,
  createUserErrorAction,
  createPasswordErrorAction,
  createLoginSuccessAction,
  createLoginErrorAction,
} from 'src/actions/user';

const authMiddleware = (store) => (next) => (action) => {
  const state = store.getState();  
    
  if (action.type === CREATE_USER) {
    if (state.user.password !== state.user.passwordConfirm) {
      store.dispatch(createPasswordErrorAction());
    }
    else {
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
          passwordConfirm: state.user.passwordConfirm,
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
    }
  }  
  else if (action.type === SUBMIT_LOGIN) {
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
        const data = {...response.data};
        store.dispatch(createLoginSuccessAction(data));
      })
      .catch(() => {
        store.dispatch(createLoginErrorAction());
      });
  }
  else if (action.type === DELETE_PROFIL) {
    const config = {
      method: 'delete',
      url: `https://sportfinder.herokuapp.com/api/v1/user/${state.user.userId}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        id: state.user.userId,
        password: state.user.password,
      },
    };

    axios(config)
      .then((response) => {
        const data = {...response.data};
        store.dispatch(createLoginSuccessAction(data));
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