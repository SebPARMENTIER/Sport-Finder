/* eslint-disable import/no-unresolved */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import SearchForm from 'src/containers/SearchForm';
import ModalSignIn from 'src/containers/ModalSignIn';
import ModalSignUp from 'src/containers/ModalSignUp';
import './home.scss';

// == Component
const Home = ({
  openLogIn,
  openLogUp,
}) => (
  <main className="home">
    <div className="home__picture">
      <h1 className="home__picture__title">SPORT FINDER</h1>
    </div>
    <p className="home__slogan">Recherchez un sport à pratiquer près de chez vous ou partout en France</p>
    <div className="home__search">
      <SearchForm component={SearchForm} />
    </div>
    { openLogIn && <ModalSignIn />}
    { openLogUp && <ModalSignUp />}
  </main>
);

Home.propTypes = {
  openLogIn: PropTypes.bool.isRequired,
  openLogUp: PropTypes.bool.isRequired,
};

// == Export
export default Home;
