/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
  openLogIn: state.user.openLogIn,
  openLogUp: state.user.openLogUp,
});

const connectedComponent = connect(mapStateToProps)(Home);

// == Export
export default connectedComponent;
