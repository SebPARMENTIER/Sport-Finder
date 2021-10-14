/* eslint-disable import/no-unresolved */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-plusplus */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import : local
import './single.scss';
import Review from 'src/containers/Review';
import ModalAddReview from 'src/containers/ModalAddReview';
import ModalUpdateReview from 'src/containers/ModalUpdateReview';
import ModalDeleteReview from 'src/containers/ModalDeleteReview';
import ModalSignIn from 'src/containers/ModalSignIn';
import ModalSignUp from 'src/containers/ModalSignUp';
import sportsData from 'src/assets/sportsData';

// == Component
const Single = ({
  result,
  sport,
  onClickModalAddReview,
  openAddReview,
  allReviews,
  openUpdateReview,
  openDeleteReview,
  getSingleAssociationName,
  getSingleAssociationKey,
  history,
  logged,
  openLogIn,
  openLogUp,
  onClickCloseSettings,
  handleAverage,
}) => {
  // Display image corresponding to the searched sport
  const image = sportsData.find((sportData) => (
    sportData.label.toLowerCase() === sport.toLowerCase()
  ));
  const handleModalAddReview = () => {
    onClickModalAddReview();
    getSingleAssociationName(result.titre);
    getSingleAssociationKey(result.id_association);
  };
  // Display reviews for the selected association
  const reviewFilter = allReviews.filter(
    (review) => review.association.key_association.includes(result.id_association),
  );
  // Back to results
  const handleOnClickReturnResults = () => {
    onClickCloseSettings();
    handleAverage();
    history.push('/results');
  };
  const handleRedirectToContact = () => {
    onClickCloseSettings();
  };
  const linkToContact = (
    <Link 
      className="click"
      to="/contact"
      onClick={handleRedirectToContact}
    >
      ici
    </Link>
  );
  return (
    <div className="single">
      <div className="single__infos">
        <div className="single__infos__header">
          <div
            className="single__infos__header__picture"
            style={{ backgroundImage: `url(${image.image})` }}
          >
            <h1 className="single__infos__header__picture__title">{sport.toUpperCase()}</h1>
          </div>
        </div>
        <div className="single__infos__content">
          <div className="single__infos__content__name">{result.titre}</div>
          <div className="single__infos__content__desc">Pour toute demande de renseignements complémentaires, n'hésitez pas à visiter le site web de l'association sportive ou rapprochez vous de la maire de <span className="single__infos__content__desc__city">{result.adresse_libelle_commune}</span>.</div>
          <div className="single__infos__content__association">
            <div className="single__infos__content__association__properties">
              <div className="single__infos__content__association__properties__Name"><p>Adresse postale:</p></div>
              <div className="single__infos__content__association__properties__value"><p>{result.adresse_numero_voie} {result.adresse_repetition} {result.adresse_type_voie} {result.adresse_libelle_voie} {result.adresse_code_postal} {result.adresse_libelle_commune}</p></div>
            </div> 
            <div className="single__infos__content__association__properties">
              <div className="single__infos__content__association__properties__Name"><p>Site web:</p></div>
              <div className="single__infos__content__association__properties__value">
                <a
                  className={result.site_web ? 'single__infos__content__association__properties__value__web' : 'single__infos__content__association__properties__value'}
                  href={result.site_web}
                  target="_blank"
                  rel="noreferrer"
                >
                  {result.site_web ? result.site_web : '-'}
                </a>
              </div>
            </div> 
            <div className="single__infos__content__association__properties">
              <div className="single__infos__content__association__properties__Name"><p>Description:</p></div>
              <div className="single__infos__content__association__properties__value"><p>{result.objet}</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="single__buttons">
        <button
          type="button"
          className="single__buttons__back"
          onClick={handleOnClickReturnResults}
        >
          Retour aux résultats
        </button>
        {logged && (
          <button
            type="button"
            className="single__buttons__addReview"
            onClick={handleModalAddReview}
          >
            Ajouter un avis
          </button>
        )}
      </div>
      {reviewFilter.length > 0 && (
        <p className="single__declare">
          Pour signaler un avis, merci de cliquer {linkToContact}.
        </p>
      )}
      <div className="single__reviews">
        {reviewFilter.map((reviewResult) => (
          <Review
            key={reviewResult.id}
            {...reviewResult}
          />
        ))}
      </div>
      { openAddReview && <ModalAddReview /> }
      { openUpdateReview && <ModalUpdateReview /> }
      { openDeleteReview && <ModalDeleteReview /> }
      { openLogIn && <ModalSignIn />}
      { openLogUp && <ModalSignUp />}
    </div>
  );
};

Single.propTypes = {
  result: PropTypes.object.isRequired,
  sport: PropTypes.string.isRequired,
  onClickModalAddReview: PropTypes.func.isRequired,
  openAddReview: PropTypes.bool.isRequired,
  allReviews: PropTypes.array.isRequired,
  openUpdateReview: PropTypes.bool.isRequired,
  openDeleteReview: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  getSingleAssociationName: PropTypes.func.isRequired,
  getSingleAssociationKey: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  openLogIn: PropTypes.bool.isRequired,
  openLogUp: PropTypes.bool.isRequired,
  onClickCloseSettings: PropTypes.func.isRequired,
  handleAverage: PropTypes.func.isRequired,
};

// == Export
export default Single;
