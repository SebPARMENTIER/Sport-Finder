import { connect } from 'react-redux';
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
  // ajouter le state a utilisé pour le composant '

const mapDispatchToProps = (dispatch) => ({
  onClickModalEditProfile: () => {
    // console.log('container');
    const action = clickOnButtonEditProfile();
    dispatch(action);
  },
  onClickModalEditPassword: () => {
    const action = clickOnButtonEditPassword();
    dispatch(action);
  },
  onClickModalDeleteProfile: () => {
    dispatch(clickOnButtonDeleteProfile());
  },
  onClickModalPrivacyData: () => {
    dispatch(clickOnButtonPrivacyData());
  },
  onClickLogOut: () => {
    // console.log('container');
    const action = clickOnButtonLogOut();
    dispatch(action);
  },
  onClickCloseSettings: () => {
    // console.log('container');
    const action = clickOnButtonCloseSettings();
    dispatch(action);
  },
});
  // ajouter la fonction utilisé dans le composant

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Profile);

// on exporte le composant connecté
// => ne pas oublier de l'utiliser à la place du stateless component
export default connectedComponent;
