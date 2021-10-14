// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import './settings.scss';

// == Component
const Settings = ({
  open,
  onClickCloseSettings,
  onClickLogOut,
}) => {
  const classnameSetting = open ? 'settings settings--open' : 'settings';
  const handleCloseSettings = () => {
    onClickCloseSettings();
  };
  const handleLogOut = () => {
    onClickLogOut();
  };
  return (
    <div className={classnameSetting}>
      <div
        className="settings__profile hover-underline-animation"
      >
        <Link
          to="/profil"
          onClick={handleCloseSettings}
        >Profil
        </Link>
      </div>
      <div className="settings__logOut hover-underline-animation">
        <Link
          to="/"
          onClick={handleLogOut}
        >
          Déconnexion
        </Link>
      </div>
    </div>
  );
};

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  onClickCloseSettings: PropTypes.func.isRequired,
  onClickLogOut: PropTypes.func.isRequired,
};

// == Export
export default Settings;
