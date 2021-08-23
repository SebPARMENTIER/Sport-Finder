import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "src/assets/logo.png";
import Settings from "src/containers/Settings";
import { IoIosArrowDown } from "react-icons/io";
import "./header.scss";

const Header = ({
  isLogged,
  onClickArrow,
  onClickLogIn,
  onClickLogUp,
  disable,
  pseudo,
}) => {
  const handleOnClickArrow = () => {
    console.log("click");
    onClickArrow();
  };
  const handleOnClickLogIn = () => {
    console.log("click");
    onClickLogIn();
  };
  const handleOnClickLogUp = () => {
    console.log("click");
    onClickLogUp();
  };
  const logOutAndEnabled = () => {
    if (isLogged === false && disable === false) {
      return (
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
      );
    } else if (isLogged === false && disable === true) {
      return (
        <div className="header-rightside">
          <button
            type="submit"
            className="header-signin hover-underline-animation"
          >
            Connexion
          </button>
          <button
            type="submit"
            className="header-signup hover-underline-animation"
          >
            Inscription
          </button>
        </div>
      );
    }
  };
  return (
    <div className="header">
      <nav className="header-nav">
        <div className="header-ol">
          {!disable && (
            <div className="header-leftside">
              <div className="header-accueil hover-underline-animation">
                <Link to="/">Accueil</Link>
              </div>
            </div>
          )}
          {disable && (
            <div className="header-leftside">
              <div className="header-accueil hover-underline-animation">
                <p>Accueil</p>
              </div>
            </div>
          )}
          {!disable && (
            <div className="header-logo">
              <Link to="/">
                <img
                  className="header-logo__img"
                  src={logo}
                  alt="sport finder logo"
                />
              </Link>
            </div>
          )}
          {disable && (
            <div className="header-logo">
              <p>
                <img
                  className="header-logo__img"
                  src={logo}
                  alt="sport finder logo"
                />
              </p>
            </div>
          )}
          {logOutAndEnabled()}
          {isLogged && (
            <div className="header-rightside">
              <div className="header-signup hover-underline-animation">
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
  disable: PropTypes.bool.isRequired,
  pseudo: PropTypes.string.isRequired,
};

export default Header;
