import React from 'react';
import ModalEditProfil from 'src/containers/ModalEditProfil';
import ModalEditPassword from 'src/containers/ModalEditPassword';
import ModalDeleteProfile from 'src/containers/ModalDeleteProfile';
import ModalPrivacyData from 'src/containers/ModalPrivacyData';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import './profil.scss';

const Profil = ({
  onClickModalEditProfil,
  onClickModalEditPassword,
  onClickModalDeleteProfile,
  onClickModalPrivacyData,
  openEditProfil,
  openEditPassword,
  openDeleteProfile,
  openPrivacyData,
  pseudo,
  onClickLogOut,
}) => {
  const handleModalEditProfil = () => {
    // console.log("click");
    onClickModalEditProfil();
  };
  const handleModalDeleteProfile = () => {
    onClickModalDeleteProfile();
  };
  const handleModalEditPassword = () => {
    // console.log('click');
    onClickModalEditPassword();
  };
  const handleModalPrivacyData = () => {
    onClickModalPrivacyData();
  };
  const handleLogOut = () => {
    onClickLogOut();
  };
  return (
    <main className="profil">
      <h1 className="profil__title">Information profil</h1>
      <h2 className="profil__name">{pseudo}</h2>
      <div className="profil__button">
        <button
          className="profil__button__edit"
          type="button"
          onClick={handleModalEditProfil}
        >
          Modifier votre profil
        </button>
        <button
          className="profil__button__edit"
          type="button"
          onClick={handleModalEditPassword}
        >
          Modifier mot de passe
        </button>
        <button
          className="profil__button__edit"
          type="button"
          onClick={handleModalDeleteProfile}
        >
          Supprimer votre compte
        </button>
        <button
          className="profil__button__edit"
          type="button"
          onClick={handleModalPrivacyData}
        >
          Vie privée et données
        </button>
      </div>
      <div className="profil__logOut">
        <Link
          to="/"
          onClick={handleLogOut}
        >
          Déconnexion
        </Link>
      </div>
      {openEditProfil && <ModalEditProfil />}
      {openEditPassword && <ModalEditPassword />}
      {openDeleteProfile && <ModalDeleteProfile />}
      {openPrivacyData && <ModalPrivacyData />}
    </main>
  );
};

Profil.propTypes = {
  onClickModalEditProfil: PropTypes.func.isRequired,
  onClickModalEditPassword: PropTypes.func.isRequired,
  onClickModalDeleteProfile: PropTypes.func.isRequired,
  onClickModalPrivacyData: PropTypes.func.isRequired,
  openEditProfil: PropTypes.bool.isRequired,
  openEditPassword: PropTypes.bool.isRequired,
  openDeleteProfile: PropTypes.bool.isRequired,
  openPrivacyData: PropTypes.bool.isRequired,
  pseudo: PropTypes.string.isRequired,
  onClickLogOut: PropTypes.func.isRequired,
};

export default Profil;
