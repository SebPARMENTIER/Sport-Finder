/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-plusplus */
/* eslint-disable no-case-declarations */
// == Import : npm
import axios from 'axios';

// == Import : local
import {
  GET_GPS_COORDINATES,
  getCityCenterCoordinates,
  getDataForMarkers,
  getResultsFromApiError,
} from 'src/actions/search';

const mapMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case GET_GPS_COORDINATES:
      const cityCenterPositionPostalCode = () => {
        if ((state.search.city.length === 2 && state.search.city === '13') || (state.search.city.length === 2 && state.search.city === '69') || (state.search.city.length === 2 && state.search.city === '75')) {
          return (`${state.search.city}001`);
        }
        if (state.search.city.length === 2) {
          return (`${state.search.city}000`);
        }
        return state.search.city;
      };
      const config = {
        method: 'GET',
        url: 'https://api-adresse.data.gouv.fr/search/',
        params: { q: cityCenterPositionPostalCode() },
      };
      axios(config)
        .then((response) => {
          store.dispatch(getCityCenterCoordinates(response.data.features[0].geometry.coordinates));
        }).catch((error) => {
          console.error(error);
        });
      // Make array for markers
      const markerArray = [];
      const { results } = state.search;
      if (results.length === 0) {
        store.dispatch(getResultsFromApiError());
      }
      else {
        for (let index = 0; index < results.length; index++) {
          // A settimeout to make a request every 120 milliseconds to avoid being blocked by the 10 requests per second of the API
          setTimeout(() => {
            const adress = `${results[index].adresse_numero_voie} ${results[index].adresse_repetition} ${results[index].adresse_type_voie} ${results[index].adresse_libelle_voie} ${results[index].adresse_code_postal} ${results[index].adresse_libelle_commune}`;
            axios({
              method: 'GET',
              url: 'https://api-adresse.data.gouv.fr/search/',
              params: { q: adress },
            })
              .then((response) => {
                markerArray.push([results[index].titre, response.data.features[0].geometry.coordinates, index]);
                store.dispatch(getDataForMarkers(markerArray));
              });
          }, 120 * index);
        }
      }
      break;
    default:
      next(action);
  }
};

// == Export
export default mapMiddleware;
