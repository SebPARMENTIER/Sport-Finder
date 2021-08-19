import React from 'react';
import PropTypes from 'prop-types';

import './settings.scss';

export default function Settings({
  open,
}) {
  const classnameSetting = open ? 'settings settings--open' : 'settings';
  return (
    <div className={classnameSetting}>
      <button
        type='submit'
        className="settings__profil"
      >
        Profil
      </button>
      <button
        type="submit"
        className="settings__logOut"  
      >
        Déconnection
      </button>
    </div>
  );
}

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
};
