/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ModalDeleteProfile from 'src/components/ModalDeleteProfile';
import {
  deleteConfirmSetInputValueAction,
  deleteProfileAction,
  clickOnButtonCloseDeleteProfile,
  closeModalDelete,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  password: state.user.password,
  isDeleteProfileSuccess: state.user.isDeleteProfileSuccess,
  isDeleteProfileError: state.user.isDeleteProfileError,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(deleteConfirmSetInputValueAction(newValue, name));
  },
  handleDeleteProfile: () => {
    dispatch(deleteProfileAction());
  },
  onClickCloseDeleteProfile: () => {
    dispatch(clickOnButtonCloseDeleteProfile());
  },
  onClickCloseDeleteProfileSimple: () => {
    dispatch(closeModalDelete());
  },
});

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(ModalDeleteProfile);

// == Export
export default connectedComponent;
