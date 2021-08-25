import React from 'react';
import ModalEditProfil from 'src/containers/ModalEditProfil';
import ModalEditPassword from 'src/containers/ModalEditPassword';
import ModalDeleteProfile from 'src/containers/ModalDeleteProfile';
import ModalPrivacyData from 'src/containers/ModalPrivacyData';

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
}) => {
  const handleModalEditProfil = () => {
    console.log("click");
    onClickModalEditProfil();
  }
  const handleModalDeleteProfile = () => {
    onClickModalDeleteProfile();
  }
  const handleModalEditPassword = () => {
    console.log('click');
    onClickModalEditPassword();
  }
  const handleModalPrivacyData = () => {
    onClickModalPrivacyData();
  }
  return (
    <main className='profil'>
      <h1 className='profil__title'>Information profil</h1>
      <h2 className='profil__name'>{pseudo}</h2>
      <div className='profil__button'> 
        <button 
          className='profil__button__edit'
          type="button"
          onClick={handleModalEditProfil}
        >
          Modifier votre profil
        </button>
        <button
          className='profil__button__edit'
          type="button"
          onClick={handleModalEditPassword}
        >
          Modifier mot de passe
        </button>
        <button
          className='profil__button__edit'
          type="button"
          onClick={handleModalDeleteProfile}
        >
          Supprimer votre compte
        </button>
        <button
          className='profil__button__edit'
          type="button"
          onClick={handleModalPrivacyData}
        >
          Vie privée et données
        </button>
      </div>
      <input className='profil__logOut' type="button" value="Déconnexion" />
      { openEditProfil && <ModalEditProfil />}
      { openEditPassword && <ModalEditPassword />}
      { openDeleteProfile && <ModalDeleteProfile />}
      { openPrivacyData && <ModalPrivacyData />}
    </main>
  );
}

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
};

export default Profil;