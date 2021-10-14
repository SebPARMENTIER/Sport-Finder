/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Profile from 'src/components/Profile';
import {
  clickOnButtonEditProfile,
  clickOnButtonEditPassword,
  clickOnButtonDeleteProfile,
  clickOnButtonPrivacyData,
  clickOnButtonLogOut,
  clickOnButtonCloseSettings,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  openEditProfile: state.user.openEditProfile,
  openEditPassword: state.user.openEditPassword,
  openDeleteProfile: state.user.openDeleteProfile,
  openPrivacyData: state.user.openPrivacyData,
  pseudo: state.user.pseudo,
});

const mapDispatchToProps = (dispatch) => ({
  onClickModalEditProfile: () => {
    dispatch(clickOnButtonEditProfile());
  },
  onClickModalEditPassword: () => {
    dispatch(clickOnButtonEditPassword());
  },
  onClickModalDeleteProfile: () => {
    dispatch(clickOnButtonDeleteProfile());
  },
  onClickModalPrivacyData: () => {
    dispatch(clickOnButtonPrivacyData());
  },
  onClickLogOut: () => {
    dispatch(clickOnButtonLogOut());
  },
  onClickCloseSettings: () => {
    dispatch(clickOnButtonCloseSettings());
  },
});

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Profile);

// == Export
export default connectedComponent;
