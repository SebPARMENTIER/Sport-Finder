/* eslint-disable import/no-unresolved */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import : local
import ModalEditProfile from 'src/containers/ModalEditProfile';
import ModalEditPassword from 'src/containers/ModalEditPassword';
import ModalDeleteProfile from 'src/containers/ModalDeleteProfile';
import ModalPrivacyData from 'src/containers/ModalPrivacyData';
import './profile.scss';

// == Component
const Profile = ({
  onClickModalEditProfile,
  onClickModalEditPassword,
  onClickModalDeleteProfile,
  onClickModalPrivacyData,
  openEditProfile,
  openEditPassword,
  openDeleteProfile,
  openPrivacyData,
  pseudo,
  onClickLogOut,
  onClickCloseSettings,
}) => {
  const handleModalEditProfile = () => {
    onClickModalEditProfile();
    onClickCloseSettings();
  };
  const handleModalDeleteProfile = () => {
    onClickModalDeleteProfile();
    onClickCloseSettings();
  };
  const handleModalEditPassword = () => {
    onClickModalEditPassword();
    onClickCloseSettings();
  };
  const handleModalPrivacyData = () => {
    onClickModalPrivacyData();
    onClickCloseSettings();
  };
  const handleLogOut = () => {
    onClickLogOut();
  };
  return (
    <main className="profile">
      <h1 className="profile__title">Informations profil</h1>
      <h2 className="profile__name">{pseudo}</h2>
      <div className="profile__button">
        <button
          className="profile__button__edit"
          type="button"
          onClick={handleModalEditProfile}
        >
          Modifier votre profil
        </button>
        <button
          className="profile__button__edit"
          type="button"
          onClick={handleModalEditPassword}
        >
          Modifier mot de passe
        </button>
        <button
          className="profile__button__edit"
          type="button"
          onClick={handleModalDeleteProfile}
        >
          Supprimer votre compte
        </button>
        <button
          className="profile__button__edit"
          type="button"
          onClick={handleModalPrivacyData}
        >
          Confidentialité et données
        </button>
      </div>
      <div className="profile__logOut">
        <Link
          to="/"
          onClick={handleLogOut}
        >
          Déconnexion
        </Link>
      </div>
      {openEditProfile && <ModalEditProfile />}
      {openEditPassword && <ModalEditPassword />}
      {openDeleteProfile && <ModalDeleteProfile />}
      {openPrivacyData && <ModalPrivacyData />}
    </main>
  );
};

Profile.propTypes = {
  onClickModalEditProfile: PropTypes.func.isRequired,
  onClickModalEditPassword: PropTypes.func.isRequired,
  onClickModalDeleteProfile: PropTypes.func.isRequired,
  onClickModalPrivacyData: PropTypes.func.isRequired,
  openEditProfile: PropTypes.bool.isRequired,
  openEditPassword: PropTypes.bool.isRequired,
  openDeleteProfile: PropTypes.bool.isRequired,
  openPrivacyData: PropTypes.bool.isRequired,
  pseudo: PropTypes.string.isRequired,
  onClickLogOut: PropTypes.func.isRequired,
  onClickCloseSettings: PropTypes.func.isRequired,
};

// == Export
export default Profile;
