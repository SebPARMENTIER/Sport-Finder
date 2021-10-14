/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import About from 'src/components/About';

const mapStateToProps = (state) => ({
  openLogIn: state.user.openLogIn,
  openLogUp: state.user.openLogUp,
});

const connectedComponent = connect(mapStateToProps)(About);

// == Export
export default connectedComponent;
