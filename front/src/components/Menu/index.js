import React from 'react';
import SearchForm from 'src/components/SearchForm';
// import PropTypes from 'prop-types';

import './styles.scss';

export default function Menu() {
  return (
    <main className='Menu'>
      <div className='Menu__picture'>
        <h1 className='Menu__picture__title'>sport finder</h1>
      </div>
      <p className='Menu__slogan'>Recherchez un sport à pratiquez près de chez vous ou partout en France</p>
      <SearchForm />
    </main>
  );
}

// Menu.propTypes = {

// };
