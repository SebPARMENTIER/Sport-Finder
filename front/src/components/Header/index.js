import React from 'react';
// import { Link } from 'react-router-dom';
import './header.scss';


const Header = ({}) => (
  <div className='header'>
    <nav className='header-nav'>
      <ol className='header-ol'>
      <div className='header-leftside'>
        <li className='header-accueil hover-underline-animation'>
          <a href="/">Accueil</a>
          </li>
      </div>
      <li className='header-logo'>
      <a href="/">Logo</a>
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