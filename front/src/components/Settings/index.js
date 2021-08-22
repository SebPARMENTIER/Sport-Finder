import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './settings.scss';

const Settings = ({
  open,
  onClickCloseSettings,
  onClickLogOut,
}) => {
  const classnameSetting = open ? 'settings settings--open' : 'settings';
  const handleCloseSettings = () => {
    // console.log('close setting');
    onClickCloseSettings();
  }
  const handleLogOut = () => {
    console.log('click');
    onClickLogOut();
  }
  return (
    <div className={classnameSetting}>
      <div
        className="settings__profil"
      >
        <Link
          to="/profil"
          onClick={handleCloseSettings}
        >Profil
        </Link> 
      </div>
      <button
        type="submit"
        className="settings__logOut"
        onClick={handleLogOut}
      >
        Déconnection
      </button>
    </div>
  );
}

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  onClickCloseSettings: PropTypes.func.isRequired,
  onClickLogOut: PropTypes.func.isRequired,
};

export default Settings;