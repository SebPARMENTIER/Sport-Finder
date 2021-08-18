import React from 'react';
// import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer className="footer">
      <p className="footer__contact hover-underline-animation">
      <a href="/contact">Contact</a>
        </p>
      <p className="footer__aboutus hover-underline-animation">
      <a href="/about">About us</a>
      </p>
      <p className="footer__copyright">Sport finder, l'outil qu'il te faut !  - {year} ©</p>
    </footer>
  );
};

export default Footer;