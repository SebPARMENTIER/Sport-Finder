/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ModalEditProfile from 'src/components/ModalEditProfile';
import {
  updatePseudoSetInputValueAction,
  clickOnButtonCloseEditProfile,
  updatePseudoAction,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  newPseudo: state.user.newPseudo,
  password: state.user.password,
  isUpdatePseudoSuccess: state.user.isUpdatePseudoSuccess,
  isUpdatePseudoError: state.user.isUpdatePseudoError,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(updatePseudoSetInputValueAction(newValue, name));
  },
  onClickCloseEditProfile: () => {
    dispatch(clickOnButtonCloseEditProfile());
  },
  handleUpdatePseudo: () => {
    dispatch(updatePseudoAction());
  },
});

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(ModalEditProfile);

// == Export
export default connectedComponent;
