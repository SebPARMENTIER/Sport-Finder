// == Import : npm
import React from 'react';

// == Import : local
import SearchForm from 'src/components/SearchForm';
import Banner from 'src/components/Banner';
import './results.scss';

// == Component
const Results = () => {

  return (
    <div className="results">
      <Banner />
      <p className='results__slogan'>Recherchez un sport à pratiquez près de chez vous ou partout en France</p>
      <div className="results__searchform">
        <SearchForm />
      </div>
      <div className="results__all">
        <div className="results__list">
          <div className="results__list__single">
            <p className="results__list__single__name">
              Association Sportive 1
            </p>
            <p className="results__list__single__adress">
              10 rue de la soif - 87000 LIMOGES
            </p>
            <p className="results__list__single__rating">
            ⭐⭐⭐⭐⭐
            </p>
          </div>
          <div className="results__list__single">
            <p className="results__list__single__name">
              Association Sportive 2
            </p>
            <p className="results__list__single__adress">
              20 rue de la soif - 59000 LILLE
            </p>
            <p className="results__list__single__rating">
            ⭐⭐⭐⭐⭐
            </p>
          </div>
          <div className="results__list__single">
            <p className="results__list__single__name">
              Association Sportive 3
            </p>
            <p className="results__list__single__adress">
              30 rue de la soif - 84000 AVIGNON
            </p>
            <p className="results__list__single__rating">
            ⭐⭐⭐⭐⭐
            </p>
          </div>
        </div>
        <div className="results__map">
          MAP
        </div>
      </div>
      
    </div>
  )
}

export default Results;
