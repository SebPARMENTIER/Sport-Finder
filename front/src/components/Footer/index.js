import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer className="footer">
      <p className="footer__contact hover-underline-animation">
      <Link to="/contact">Contact</Link>
        </p>
      <p className="footer__aboutus hover-underline-animation">
      <Link to="/about">About us</Link>
      </p>
      <p className="footer__copyright">Sport finder © - {year}</p>
    </footer>
  );
};

export default Footer;
