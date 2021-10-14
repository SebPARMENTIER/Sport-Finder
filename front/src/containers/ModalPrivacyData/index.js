/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ModalPrivacyData from 'src/components/ModalPrivacyData';
import { clickOnButtonClosePrivacyData } from 'src/actions/user';

const mapDispatchToProps = (dispatch) => ({
  onClickClosePrivacyData: () => {
    dispatch(clickOnButtonClosePrivacyData());
  },
});

const connectedComponent = connect(null, mapDispatchToProps)(ModalPrivacyData);

// == Export
export default connectedComponent;
