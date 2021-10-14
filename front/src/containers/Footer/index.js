/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Footer from 'src/components/Footer';
import { clickOnButtonCloseSettings } from 'src/actions/user';

const mapDispatchToProps = (dispatch) => ({
  onClickCloseSettings: () => {
    dispatch(clickOnButtonCloseSettings());
  },
});

const connectedComponent = connect(null, mapDispatchToProps)(Footer);

// == Export
export default connectedComponent;
