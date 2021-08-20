import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from 'src/assets/logo.png'
import Settings from 'src/containers/Settings';
import { IoIosArrowDown } from "react-icons/io";
import './header.scss';


const Header = ({
  isLogged,
  onClickArrow,
  onClickLogIn,
  onClickLogUp,
  desable,
}) => {
  const handleOnClickArrow = () => {
    console.log('click');
    onClickArrow();
  };
  const handleOnClickLogIn = () => {
    console.log('click');
    onClickLogIn();
  };
  const handleOnClickLogUp = () => {
    console.log('click');
    onClickLogUp();
  }
  return (
    <div className='header'>
    <nav className='header-nav'>
      <div className='header-ol'>
      
      { !desable && (
        <div className='header-leftside'>
          <div className='header-accueil hover-underline-animation'>
            <Link to="/">Accueil</Link>
          </div>
        </div>
      )}
      { desable && (
        <div className='header-leftside'>
          <div className='header-accueil hover-underline-animation'>
            <p>Accueil</p>
          </div>
        </div>
      )}
      { !desable && (
      <div className='header-logo'>
        <Link to="/">
          <img className='header-logo__img' src={logo} alt="sport finder logo" />
        </Link>
      </div>
      )}
      { desable && (
      <div className='header-logo'>
        <p>
          <img className='header-logo__img' src={logo} alt="sport finder logo" />
        </p>
      </div>
      )}
        
          { !isLogged  && (
            
            <div className='header-rightside'>
              <button 
                key='1'
                type="submit"
                className='header-signin hover-underline-animation'
                onClick={handleOnClickLogIn}
              >
                Connexion
              </button>
              <button 
                key='2'
                type="submit"
                className='header-signup hover-underline-animation'
                onClick={handleOnClickLogUp}
              >
                Inscription
              </button>
            </div>
            
            
          )}
          { !desable && (
            <div className='header-rightside'>
            <button 
              key='3'
              type="submit"
              className='header-signin hover-underline-animation'
              onClick={handleOnClickLogIn}
            >
              Connexion
            </button>
            <button 
              key='4'
              type="submit"
              className='header-signup hover-underline-animation'
              onClick={handleOnClickLogUp}
            >
              Inscription
            </button>
          </div>
          )}
          { desable && (
            <div className='header-rightside'>
              <button 
              key='5'
                type="submit"
                className='header-signin hover-underline-animation'
              >
                Connexion
              </button>
              <button 
              key='6'
                type="submit"
                className='header-signup hover-underline-animation'
              >
                Inscription
              </button>
            </div>
          )}
          { isLogged && (
            <div className='header-rightside'>
              <div className='header-signup hover-underline-animation'>Bienvenue User</div>
              <button 
              type="submit"
              className='header__open'
              onClick={handleOnClickArrow}
              >
                <IoIosArrowDown className='header__open__arrow'/>
              </button>
              
            </div>
          )}

      </div>
    </nav>
    <Settings />
  </div>
  );
  
}

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  onClickArrow: PropTypes.func.isRequired,
  desable: PropTypes.bool.isRequired,
}

export default Header;