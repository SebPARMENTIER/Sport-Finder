import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './footer.scss';

const Footer = ({
  onClickCloseSettings,
}) => {
  const now = new Date();
  const year = now.getFullYear();
  const handleCloseSettings = () => {
    // console.log('close setting');
    onClickCloseSettings();
  };
  return (
    <footer className="footer">
      <p className="footer__contact hover-underline-animation">
        <Link
          to="/contact"
          onClick={handleCloseSettings}
        >
          Contact
        </Link>
      </p>
      <p className="footer__aboutus hover-underline-animation">
        <Link
          to="/about"
          onClick={handleCloseSettings}
        >
          About us
        </Link>
      </p>
      <p className="footer__copyright">Sport Finder - {year} ©</p>
    </footer>
  );
};

Footer.propTypes = {
  onClickCloseSettings: PropTypes.func.isRequired,
};

export default Footer;
