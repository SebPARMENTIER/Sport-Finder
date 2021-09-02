import { connect } from 'react-redux';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  accountExists: state.user.accountExists,
});

export default connect(mapStateToProps)(App);
