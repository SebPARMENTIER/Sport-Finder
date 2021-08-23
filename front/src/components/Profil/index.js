import React from 'react';
import ModalEditProfil from 'src/components/ModalEditProfil';

import PropTypes from 'prop-types';

import './profil.scss';

const Profil = ({
  onClickModalEditProfil,
  onClickDeleteProfil,
  openEditProfil,
  pseudo,
}) => {
  const handleModalEditProfil = () => {
    console.log("click");
    onClickModalEditProfil();
  }
  const handleDeleteProfil = () => {
    onClickDeleteProfil();
  }
  return (
    <main className='profil'>
      <h1 className='profil__title'>Information profil</h1>
      <h2 className='profil__name'>{pseudo}</h2>
      <div className='profil__button'> 
        <input 
          className='profil__button__edit'
          type="button"
          value="Modifier votre profil"
          onClick={handleModalEditProfil}
          />
        <input
          className='profil__button__edit'
          type="button"
          value="Supprimer votre compte"
          onClick={handleDeleteProfil}
        />
        <input
          className='profil__button__edit'
          type="button"
          value="Vie privée et données"
        />
        <input
          className='profil__button__edit'
          type="button"
          value="vie privée et données"
        />
      </div>
      <input className='profil__logOut' type="button" value="Déconnexion" />
      { openEditProfil && <ModalEditProfil />}
    </main>
  );
}

Profil.propTypes = {
  onClickModalEditProfil: PropTypes.func.isRequired,
  onClickDeleteProfil: PropTypes.func.isRequired,
  openEditProfil: PropTypes.bool.isRequired,
  pseudo: PropTypes.string.isRequired,
};

export default Profil;