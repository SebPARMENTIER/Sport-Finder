/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Header from 'src/components/Header';
import {
  clickOnButtonSettings,
  clickOnButtonLogIn,
  clickOnButtonLogUp,
  clickOnButtonCloseSettings,
} from 'src/actions/user';
import { clickOnNewSearch } from 'src/actions/search';

const mapStateToProps = (state) => ({
  isLogged: state.user.logged,
  pseudo: state.user.pseudo,
  openSettings: state.user.openSettings,
});

const mapDispatchToProps = (dispatch) => ({
  onClickArrow: () => {
    dispatch(clickOnButtonSettings());
  },
  onClickLogIn: () => {
    dispatch(clickOnButtonLogIn());
  },
  onClickLogUp: () => {
    dispatch(clickOnButtonLogUp());
  },
  onClickCloseSettings: () => {
    dispatch(clickOnButtonCloseSettings());
  },
  onClickNewSearch: () => {
    dispatch(clickOnNewSearch());
  },
});

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Header);

// == Export
export default connectedComponent;
