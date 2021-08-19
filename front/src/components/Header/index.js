import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from 'src/assets/logo.png'
import Settings from 'src/containers/Settings';
import { IoIosArrowDown } from "react-icons/io";
import './header.scss';


const Header = ({
  isLogged,
  onClickButton,
}) => {
  const handleOnClick = () => {
    console.log('click');
    onClickButton();
  };
  return (
    <div className='header'>
    <nav className='header-nav'>
      <ol className='header-ol'>
      <div className='header-leftside'>
        <li className='header-accueil hover-underline-animation'>
          <Link to="/">Accueil</Link>
        </li>
      </div>
      <li className='header-logo'>
        <Link to="/">
          <img className='header-logo__img' src={logo} alt="sport finder logo" />
        </Link>
        
      </li>
        
          { !isLogged && (
            <div className='header-rightside'>
              <li className='header-signin hover-underline-animation'>Sign in</li>
              <li className='header-signup hover-underline-animation'>Sign up</li>
            </div>
          )}
          { isLogged && (
            <div className='header-rightside'>
              <li className='header-signup hover-underline-animation'>Bienvenue User</li>
              <button 
              type="submit"
              className='header__open'
              onClick={handleOnClick}
              >
                <IoIosArrowDown className='header__open__arrow'/>
              </button>
              
            </div>
          )}

      </ol>
    </nav>
    <Settings />
  </div>
  );
  
}

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  onClickButton: PropTypes.func.isRequired,
}

export default Header;