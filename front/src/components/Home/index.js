import React from 'react';
import SearchForm from 'src/components/SearchForm';

// import PropTypes from 'prop-types';

import './home.scss';

export default function Home() {
  return (
    <main className='home'>
      <div className='home__picture'>
        <h1 className='home__picture__title'>SPORT FINDER</h1>
      </div>
      <p className='home__slogan'>Recherchez un sport à pratiquez près de chez vous ou partout en France</p>
      <SearchForm />
    </main>
  );
}

// Menu.propTypes = {

// };
