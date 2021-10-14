/* eslint-disable import/no-unresolved */
// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import : local
import './error.scss';
import Picture from 'src/assets/carton_rouge.png';

// == Component
const Error = () => (
  <div className="error">
    <p className="error__text">Page non trouvée</p>
    <div className="error__picture">
      <img
        src={Picture}
        alt="Arbitre tenant un carton rouge"
        className="error__picture__img"
      />
    </div>
    <Link
      to="/"
      className="error__home"
    >
      Retour à l'accueil
    </Link>
  </div>
);
// == Export
export default Error;
