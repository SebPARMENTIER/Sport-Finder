import React from 'react';
// import PropTypes from 'prop-types';
// import ModalEditProfil from 'src/components/ModalEditProfil';
// import ModalEditPassword from 'src/components/ModalEditPassword';
import ModalPrivacyData from 'src/components/ModalPrivacyData';

import './profil.scss';

export default function Profil() {
  return (
    <main className='profil'>
      <h1 className='profil__title'>Information du profil</h1>
      <h2 className='profil__name'>Totodu52</h2>
      <div className='profil__button'> 
        <input className='profil__button__edit' type="button" value="Modifier votre profil" />
        <input className='profil__button__edit' type="button" value="Modifier votre mot de passe" />
        <input className='profil__button__edit' type="button" value="vie privée et données" />
      </div>
      <input className='profil__logOut' type="button" value="Déconnexion" />
      {/* <ModalEditProfil /> */}
      {/* <ModalEditPassword /> */}
      <ModalPrivacyData />

    </main>
  );
}

// Profil.propTypes = {

// };
