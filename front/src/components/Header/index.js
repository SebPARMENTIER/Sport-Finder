import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from 'src/assets/logo.png';
import Settings from 'src/containers/Settings';
import { IoIosArrowDown } from 'react-icons/io';
import './header.scss';

const Header = ({
  isLogged,
  onClickArrow,
  onClickLogIn,
  onClickLogUp,
  onClickCloseSettings,
  pseudo,
}) => {
  const handleOnClickArrow = () => {
    // console.log("click");
    onClickArrow();
  };
  const handleOnClickLogIn = () => {
    // console.log("click");
    onClickLogIn();
  };
  const handleOnClickLogUp = () => {
    // console.log("click");
    onClickLogUp();
  };
  const handleCloseSettings = () => {
    // console.log('close setting');
    onClickCloseSettings();
  };
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
                <IoIosArrowDown className="header__open__arrow" />
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
  isLogged: PropTypes.bool.isRequired,
  onClickArrow: PropTypes.func.isRequired,
  onClickCloseSettings: PropTypes.func.isRequired,
  pseudo: PropTypes.string.isRequired,
  onClickLogIn: PropTypes.func.isRequired,
  onClickLogUp: PropTypes.func.isRequired,
};

export default Header;
