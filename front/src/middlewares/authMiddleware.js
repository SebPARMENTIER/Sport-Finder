import axios from 'axios';

import {
  CREATE_USER,
  SUBMIT_LOGIN,
  DELETE_PROFIL,
  UPDATE_PSEUDO,
  UPDATE_PASSWORD,
  createUserSuccessAction,
  createUserErrorAction,
  createPasswordErrorAction,
  createLoginSuccessAction,
  createLoginErrorAction,
  createPasswordLengthError,
  deleteProfileSuccessAction,
  deleteProfileErrorAction,
  updatePseudoSuccessAction,
  updatePseudoErrorAction,
  updatePasswordConfirmErrorAction,
  updatePasswordSuccessAction,
  updatePasswordErrorAction,
  updatePasswordLengthError,
} from 'src/actions/user';

const authMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case CREATE_USER: {
      if (state.user.password.length < 8) {
        store.dispatch(createPasswordLengthError());
      }
      else if (state.user.password !== state.user.passwordConfirm) {
        store.dispatch(createPasswordErrorAction());
      }
      else {
        const config = {
          method: 'post',
          url: 'https://sportfinder.herokuapp.com/api/v1/signup',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${state.user.token}`,
          },
          data: {
            pseudo: state.user.pseudo,
            email: state.user.email,
            password: state.user.password,
          },
        };
        axios(config)
          .then((response) => {
            store.dispatch(createUserSuccessAction(response.data));
            // console.log(response.data.isCreateUserSuccess);
          })
          .catch((error) => {
            store.dispatch(createUserErrorAction(error));
            // console.log(error);
          });
      }
      break;
    }
    case SUBMIT_LOGIN: {
      const config = {
        method: 'post',
        url: 'https://sportfinder.herokuapp.com/api/v1/login',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.user.token}`,
        },
        data: {
          email: state.user.email,
          password: state.user.password,
        },
      };
      axios(config)
        .then((response) => {
          const data = { ...response.data };
          store.dispatch(createLoginSuccessAction(data));
        })
        .catch(() => {
          store.dispatch(createLoginErrorAction());
        });
      break;
    }
    case DELETE_PROFIL: {
      const config = {
        method: 'delete',
        url: `https://sportfinder.herokuapp.com/api/v1/user/${state.user.userId}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.user.token}`,
        },
        data: {
          id: state.user.userId,
          password: state.user.password,
        },
      };
      axios(config)
        .then((response) => {
          store.dispatch(deleteProfileSuccessAction(response.data));
        })
        .catch(() => {
          store.dispatch(deleteProfileErrorAction());
        });
      break;
    }
    case UPDATE_PSEUDO: {
      const config = {
        method: 'patch',
        url: `https://sportfinder.herokuapp.com/api/v1/user/pseudo/${state.user.userId}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.user.token}`,
        },
        data: {
          id: state.user.userId,
          password: state.user.password,
          pseudo: state.user.newPseudo,
        },
      };
  
      axios(config)
        .then((response) => {
          store.dispatch(updatePseudoSuccessAction(response.data));
        })
        .catch(() => {
          store.dispatch(updatePseudoErrorAction());
        });
      break;
    }
    case UPDATE_PASSWORD: {
      if (state.user.newPassword.length < 8) {
        store.dispatch(updatePasswordLengthError());
      }
      else if (state.user.newPassword !== state.user.newPasswordConfirm) {
        store.dispatch(updatePasswordConfirmErrorAction());
      }
      else {
        const config = {
          method: 'patch',
          url: `https://sportfinder.herokuapp.com/api/v1/user/password/${state.user.userId}`,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${state.user.token}`,
          },
          data: {
            id: state.user.userId,
            password: state.user.password,
            new_password: state.user.newPassword,
          },
        };
        axios(config)
          .then((response) => {
            store.dispatch(updatePasswordSuccessAction(response.data));
            // console.log(response.data.isCreateUserSuccess);
          })
          .catch((error) => {
            store.dispatch(updatePasswordErrorAction(error));
            // console.log(error);
          });
      }
      break;
    }
    default:
      next(action);
  }
};

export default authMiddleware;
