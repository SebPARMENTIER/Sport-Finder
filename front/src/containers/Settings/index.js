/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Settings from 'src/components/Settings';
import { clickOnButtonCloseSettings, clickOnButtonLogOut } from 'src/actions/user';

const mapStateToProps = (state) => ({
  open: state.user.openSettings,
});

const mapDispatchToProps = (dispatch) => ({
  onClickCloseSettings: () => {
    dispatch(clickOnButtonCloseSettings());
  },
  onClickLogOut: () => {
    dispatch(clickOnButtonLogOut());
  },
});

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Settings);

// == Export
export default connectedComponent;
