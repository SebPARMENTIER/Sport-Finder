import React from 'react';
import ModalEditProfil from 'src/containers/ModalEditProfil';
import ModalEditPassword from 'src/containers/ModalEditPassword';
import ModalDeleteProfile from 'src/containers/ModalDeleteProfile'

import PropTypes from 'prop-types';

import './profil.scss';

const Profil = ({
  onClickModalEditProfil,
  onClickModalEditPassword,
  onClickModalDeleteProfile,
  openEditProfil,
  openEditPassword,
  openDeleteProfile,
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
        >
          Vie privée et données
        </button>
      </div>
      <input className='profil__logOut' type="button" value="Déconnexion" />
      { openEditProfil && <ModalEditProfil />}
      { openEditPassword && <ModalEditPassword />}
      { openDeleteProfile && <ModalDeleteProfile />}
    </main>
  );
}

Profil.propTypes = {
  onClickModalEditProfil: PropTypes.func.isRequired,
  onClickModalEditPassword: PropTypes.func.isRequired,
  onClickModalDeleteProfile: PropTypes.func.isRequired,
  openEditPassword: PropTypes.bool.isRequired,
  openDeleteProfile: PropTypes.bool.isRequired,
  pseudo: PropTypes.string.isRequired,
};

export default Profil;