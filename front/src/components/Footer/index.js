import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './footer.scss';


const Footer = ({disable}) => {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer className="footer">
      {!disable && (
        <p className="footer__contact hover-underline-animation">
          <Link to="/contact">Contact</Link>
        </p>
      )}
      {disable && (
        <p className="footer__contact hover-underline-animation">
          <span>Contact</span>
        </p>
      )}
      {!disable && (
        <p className="footer__aboutus hover-underline-animation">
          <Link to="/about">About us</Link>
        </p>
      )}
      {disable && (
        <p className="footer__aboutus hover-underline-animation">
          <span>About us</span>
        </p>
      )}
      
      <p className="footer__copyright">Sport finder - {year} ©</p>
    </footer>
  );
};

Footer.propTypes = {
  disable: PropTypes.bool.isRequired,
}

export default Footer;
