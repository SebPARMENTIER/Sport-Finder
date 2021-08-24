import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./footer.scss";

const Footer = ({
  disable,
  onClickCloseSettings,
}) => {
  const now = new Date();
  const year = now.getFullYear();
  const handleCloseSettings = () => {
    // console.log('close setting');
    onClickCloseSettings();
  }
  return (
    <footer className="footer">
      {!disable && (
        <p className="footer__contact hover-underline-animation">
          <Link
            to="/contact"
            onClick={handleCloseSettings}
          >
            Contact
          </Link>
        </p>
      )}
      {disable && (
        <p className="footer__contact hover-underline-animation">
          <span>Contact</span>
        </p>
      )}
      {!disable && (
        <p className="footer__aboutus hover-underline-animation">
          <Link
            to="/about"
            onClick={handleCloseSettings}
          >
            About us
          </Link>
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
  onClickCloseSettings: PropTypes.func.isRequired,
};

export default Footer;
