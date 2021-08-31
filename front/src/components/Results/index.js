// == Import : npm
import React, {useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
// import Marker from 'react-leaflet-animated-marker';
// == Import : local
import SearchForm from 'src/containers/SearchForm';
import Banner from 'src/components/Banner';
import Loading from 'src/components/Loading';
import './results.scss';

// == Component
const Results = ({
  results,
  cityCenterLat,
  cityCenterLng,
  buildMap,
  markers,
  getAllReviews,
}) => {
  // console.log('cityCenterLat', cityCenterLat);
  const position = [cityCenterLat, cityCenterLng];
  // console.log('position',position);
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

  const handleGetAllReviews = () => {
    getAllReviews();
  };

  useEffect(() => {
    // eslint-disable-next-line no-param-reassign
    buildMap = true;
  }, [markers]);
  return (
    <div className="results">
      <Banner />
      <p className="results__slogan">Recherchez un sport à pratiquer près de chez vous ou partout en France</p>
      <div className="results__searchform">
        <SearchForm />
      </div>
      <div className="results__all">
        { buildMap && (
          <div className="results__all__list">
            {results.map((result) => (
              <div
                key={result.id}
                className="results__all__list__single"
              >
                <p className="results__all__list__single__name">
                  <Link
                    to={`/single/${result.id}`}
                    onClick={handleGetAllReviews}
                    {...result}
                  >
                    {result.titre}
                  </Link>
                </p>
                <p className="results__all__list__single__adress">
                  {result.adresse_numero_voie}
                  {result.adresse_repetition}
                  {result.adresse_type_voie}
                  {result.adresse_libelle_voie}
                  {result.adresse_code_postal}
                  {result.adresse_libelle_commune}
                </p>
                <p className="results__all__list__single__rating">
                  ⭐⭐⭐⭐⭐
                </p>
              </div>
            ))}
          </div>
        )}
        { !buildMap && (<Loading />)}
        { buildMap && (
          <MapContainer
            id="mapid"
            center={position}
            zoom={10}
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
    </div>
  );
};

Results.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      titre: PropTypes.string.isRequired,
      adresse_numero_voie: PropTypes.string,
      adresse_repetition: PropTypes.string,
      adresse_type_voie: PropTypes.string,
      adresse_libelle_voie: PropTypes.string,
      adresse_code_postal: PropTypes.string,
      adresse_libelle_commune: PropTypes.string,
    }),
  ).isRequired,
  cityCenterLat: PropTypes.number.isRequired,
  cityCenterLng: PropTypes.number.isRequired,
  buildMap: PropTypes.bool.isRequired,
  markers: PropTypes.arrayOf(
    PropTypes.shape,
  ).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  getAllReviews: PropTypes.func.isRequired,
};

export default Results;
