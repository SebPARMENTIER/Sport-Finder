import React from 'react';
import SearchForm from 'src/containers/SearchForm';
import ModalEditPassword from 'src/components/ModalEditPassword';
import ModalEditProfil from 'src/components/ModalEditProfil';
import ModalSignIn from 'src/containers/ModalSignIn';
import ModalSignUp from 'src/containers/ModalSignUp';
import ModalPrivacyData from 'src/components/ModalPrivacyData';


import PropTypes from 'prop-types';

import './home.scss';

const Home = ({
  openLogIn,
  openLogUp,
}) => {
  
  return (
    <main className='home'>
      <div className='home__picture'>
        <h1 className='home__picture__title'>SPORT FINDER</h1>
      </div>
      <p className='home__slogan'>Recherchez un sport à pratiquez près de chez vous ou partout en France</p>
      <SearchForm />
      { openLogIn && <ModalSignIn />}
      { openLogUp && <ModalSignUp />}

      {/* <ModalEditPassword /> */}
      {/* <ModalEditProfil /> */}
      {/* <ModalSignIn /> */}
      {/* <ModalSignUp /> */}
      {/* <ModalPrivacyData /> */}
      
    </main>
  )
  
};


Home.propTypes = {
  openLogIn: PropTypes.bool.isRequired,
  openLogUp: PropTypes.bool.isRequired,
};

export default Home;