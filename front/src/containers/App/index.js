/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  accountExists: state.user.accountExists,
});

// == Export
export default connect(mapStateToProps)(App);
