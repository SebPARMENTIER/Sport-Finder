import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'src/assets/logo.png'
import './header.scss';


const Header = ({}) => (
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
        <div className='header-rightside'>
        <li className='header-signin hover-underline-animation'>Sign in</li>
        <li className='header-signup hover-underline-animation'>Sign up</li>
        </div>

      </ol>
    </nav>
  </div>
)

export default Header;