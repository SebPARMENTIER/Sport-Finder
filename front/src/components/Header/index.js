/* eslint-disable import/no-unresolved */
// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoIosArrowBack } from 'react-icons/io';

// == Import : local
import logo from 'src/assets/logo.png';
import Settings from 'src/containers/Settings';
import './header.scss';

// == Component
const Header = ({
  pseudo,
  isLogged,
  onClickArrow,
  onClickLogIn,
  onClickLogUp,
  onClickCloseSettings,
  onClickNewSearch,
  openSettings,
}) => {
  const handleOnClickArrow = () => {
    onClickArrow();
  };
  const handleOnClickLogIn = () => {
    onClickLogIn();
  };
  const handleOnClickLogUp = () => {
    onClickLogUp();
  };
  const handleCloseSettings = () => {
    onClickCloseSettings();
    onClickNewSearch();
  };
  const classnameSetting = openSettings ? 'header__open__arrow header__open__arrow--open' : 'header__open__arrow';
  return (
    <div className="header">
      <nav className="header-nav">
        <div className="header-ol">
          <div className="header-leftside">
            <div className="header-accueil hover-underline-animation">
              <Link
                to="/"
                onClick={handleCloseSettings}
              >
                Accueil
              </Link>
            </div>
          </div>
          <div className="header-logo">
            <Link
              to="/"
              onClick={handleCloseSettings}
            >
              <img
                className="header-logo__img"
                src={logo}
                alt="sport finder logo"
              />
            </Link>
          </div>
          {!isLogged && (
            <div className="header-rightside">
              <button
                type="submit"
                className="header-signin hover-underline-animation"
                onClick={handleOnClickLogIn}
              >
                Connexion
              </button>
              <button
                type="submit"
                className="header-signup hover-underline-animation"
                onClick={handleOnClickLogUp}
              >
                Inscription
              </button>
            </div>
          )}
          {isLogged && (
            <div className="header-rightside">
              <div className="header-signup connect hover-underline-animation">
                Bienvenue {pseudo}
              </div>
              <button
                type="submit"
                className="header__open"
                onClick={handleOnClickArrow}
              >
                <IoIosArrowBack className={classnameSetting} />
              </button>
            </div>
          )}
        </div>
      </nav>
      <Settings />
    </div>
  );
};

Header.propTypes = {
  pseudo: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  onClickArrow: PropTypes.func.isRequired,
  onClickCloseSettings: PropTypes.func.isRequired,
  onClickLogIn: PropTypes.func.isRequired,
  onClickLogUp: PropTypes.func.isRequired,
  onClickNewSearch: PropTypes.func.isRequired,
  openSettings: PropTypes.bool.isRequired,
};

// == Export
export default Header;
