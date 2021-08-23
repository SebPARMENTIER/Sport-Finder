import React from 'react';
import ModalEditProfil from 'src/components/ModalEditProfil';

import PropTypes from 'prop-types';

import './profil.scss';

const Profil = ({
  onClickModalEditProfil,
  openEditProfil,
}) => {
  const handleModalEditProfil = () => {
    console.log("click");
    onClickModalEditProfil();
  }
  return (
    <main className='profil'>
      <h1 className='profil__title'>Information profil</h1>
      <h2 className='profil__name'>Totodu52</h2>
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
          value="Modifier votre mot de passe"
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
  openEditProfil: PropTypes.bool.isRequired,
};

export default Profil;