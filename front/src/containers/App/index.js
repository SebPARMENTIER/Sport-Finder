import { connect } from 'react-redux';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
});

export default connect(mapStateToProps)(App);
