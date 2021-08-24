import { connect } from 'react-redux';
import ModalDeleteProfile from 'src/components/ModalDeleteProfile';
import { deleteConfirmSetInputValueAction, deleteProfilAction, clickOnButtonCloseDeleteProfile } from 'src/actions/user';

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
    dispatch(deleteProfilAction());
  },
  onClickCloseDeleteProfile: () => {
    dispatch(clickOnButtonCloseDeleteProfile());
  },
});

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(ModalDeleteProfile);

export default connectedComponent;
