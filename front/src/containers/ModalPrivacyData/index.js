import { connect } from 'react-redux';
import ModalPrivacyData from 'src/components/ModalPrivacyData';
import { clickOnButtonClosePrivacyData } from 'src/actions/user';

const mapDispatchToProps = (dispatch) => ({
  onClickClosePrivacyData: () => {
    dispatch(clickOnButtonClosePrivacyData());
  },
});
  // ajouter la fonction utilisé dans le composant

const connectedComponent = connect(null, mapDispatchToProps)(ModalPrivacyData);

// on exporte le composant connecté
// => ne pas oublier de l'utiliser à la place du stateless component
export default connectedComponent;