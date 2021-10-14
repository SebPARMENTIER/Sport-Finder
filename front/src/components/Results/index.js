/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
// == Import : npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import Marker from 'react-leaflet-animated-marker'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';

// == Import : local
import StarRatingStatic from 'src/components/StarRatingStatic';
import ModalSignIn from 'src/containers/ModalSignIn';
import ModalSignUp from 'src/containers/ModalSignUp';
import Banner from 'src/components/Banner';
import Loading from 'src/components/Loading';
import './results.scss';

// == Component
const Results = ({
  results,
  sport,
  city,
  onClickNewSearch,
  cityCenterLat,
  cityCenterLng,
  buildMap,
  markers,
  getAllReviews,
  isNoResult,
  onBuildMap,
  openLogIn,
  openLogUp,
  reviewsForAvg,
}) => {
  const position = [cityCenterLat, cityCenterLng];
  const icons = markers.map((marker) => (
    <Marker
      key={marker[2]}
      position={[marker[1][1], marker[1][0]]}
    >
      <Popup>
        {marker[0]}
      </Popup>
    </Marker>
  ));
  // Array for association with average
  const tabAssociation = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < results.length; i++) {
    const result = reviewsForAvg.filter((reviewForAvg) => reviewForAvg.key_association === results[i].id_association);
    if (result.length > 0) {
      tabAssociation.push(result);
    }
  }
  // Array with specific properties
  const newArray = [];
  // eslint-disable-next-line array-callback-return
  tabAssociation.map((tab) => {
    tab.forEach((item) => {
      newArray.push({
        id: item.id, name: item.name, key_association: item.key_association, avg: item.avg,
      });
    });
  });
  // Filter the API list against the DB to retrieve from the API all those that are rated (stars)
  // Add db avg with api results
  const withStars = results.filter((a) => {
    let rep;
    // eslint-disable-next-line no-restricted-syntax
    for (const b of newArray) {
      rep = b.key_association === a.id_association;
      if (rep) {
        a.avg = b.avg;
        break;
      }
    }
    return rep;
  });

  // Order the list of rated from largest to smallest
  const sortedNewArray = withStars.sort((a, b) => (+b.avg - +a.avg));
  // Filter the API list against the DB to retrieve from the API all those that are not rated (without stars)
  const noStars = results.filter((a) => {
    let rep;

    // eslint-disable-next-line no-restricted-syntax
    for (const b of newArray) {
      rep = b.key_association === a.id_association;
      if (rep) {
        break;
      }
    }

    return !rep;
  });

  const handleGetAllReviews = () => {
    getAllReviews();
  };
  const handleNewSearch = () => {
    onClickNewSearch();
  };
  // Use setTimeout to wait all results from API to build map
  useEffect(() => {
    const timer = setTimeout(() => {
      onBuildMap();
    }, 2000);
    return () => clearTimeout(timer);
  }, [markers]);
  return (
    <div className="results">
      <Banner />
      <Link
        className="results__newSearch"
        onClick={handleNewSearch}
        to="/"
      >
        Nouvelle recherche
      </Link>
      <div className="results__count">
        {isNoResult && <p className="results__count__desc__noResult">La recherche pour {sport} dans le département {city} n'a donné aucun résultat.</p>}
        {!isNoResult && <p className="results__count__desc">La recherche pour {sport} dans le département {city} a donné {results.length} résultats.</p>}
      </div>
      <div className="results__all">
        { buildMap && (

        <>
          <div className="results__all__list">

            {/* Display of the list with star (first) */}
            {sortedNewArray.map((result) => (
              <div
                key={result.id_association}
                className="results__all__list__single"
              >
                <div className="results__all__list__single__text">
                  <p className="results__all__list__single__text__name__hover-underline-animation">
                    <Link
                      to={`/single/${result.id_association}`}
                      onClick={handleGetAllReviews}
                      {...result}
                    >
                      {result.titre}
                    </Link>
                  </p>
                  <p className="results__all__list__single__text__adress">
                    {result.adresse_numero_voie} {result.adresse_repetition} {result.adresse_type_voie} {result.adresse_libelle_voie} {result.adresse_code_postal} {result.adresse_libelle_commune}
                  </p>
                </div>
                <div className="results__all__list__single__rating">
                  {result.avg !== null ? (
                    <StarRatingStatic
                      key={result.key_association}
                      rating={Number(result.avg)}
                    />
                  ) : <p className="results__all__list__single__rating__noReview">Aucun avis déposé</p>}
                </div>
              </div>
            ))}
            {/* Display of the list with star (second) */}
            {noStars.map((result) => (
              <div
                key={result.id_association}
                className="results__all__list__single"
              >
                <div className="results__all__list__single__text">
                  <p className="results__all__list__single__text__name__hover-underline-animation">
                    <Link
                      to={`/single/${result.id_association}`}
                      onClick={handleGetAllReviews}
                      {...result}
                    >
                      {result.titre}
                    </Link>
                  </p>
                  <p className="results__all__list__single__text__adress">
                    {result.adresse_numero_voie} {result.adresse_repetition} {result.adresse_type_voie} {result.adresse_libelle_voie} {result.adresse_code_postal} {result.adresse_libelle_commune}
                  </p>
                </div>
                <p className="results__all__list__single__rating__noReview">Aucun avis déposé</p>
              </div>
            ))}
          </div>
        </>

        )}
        { !buildMap && (<Loading />)}
        { buildMap && !isNoResult && (
          <MapContainer
            id="mapid"
            center={position}
            zoom={8}
            scrollWheelZoom
            maxZoom={20}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {icons}
          </MapContainer>
        )}
      </div>
      { openLogIn && <ModalSignIn />}
      { openLogUp && <ModalSignUp />}
    </div>
  );
};

Results.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id_association: PropTypes.string.isRequired,
      titre: PropTypes.string.isRequired,
      adresse_numero_voie: PropTypes.string,
      adresse_repetition: PropTypes.string,
      adresse_type_voie: PropTypes.string,
      adresse_libelle_voie: PropTypes.string,
      adresse_code_postal: PropTypes.string,
      adresse_libelle_commune: PropTypes.string,
    }),
  ).isRequired,
  cityCenterLat: PropTypes.number,
  cityCenterLng: PropTypes.number,
  buildMap: PropTypes.bool.isRequired,
  markers: PropTypes.arrayOf(
    PropTypes.shape,
  ).isRequired,
  getAllReviews: PropTypes.func.isRequired,
  sport: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  onClickNewSearch: PropTypes.func.isRequired,
  isNoResult: PropTypes.bool.isRequired,
  onBuildMap: PropTypes.func.isRequired,
  openLogIn: PropTypes.bool.isRequired,
  openLogUp: PropTypes.bool.isRequired,
  reviewsForAvg: PropTypes.array.isRequired,
};

Results.defaultProps = {
  cityCenterLat: 0,
  cityCenterLng: 0,
};

// == Export
export default Results;
