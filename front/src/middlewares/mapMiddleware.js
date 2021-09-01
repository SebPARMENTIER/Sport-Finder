import axios from 'axios';

import {
  GET_GPS_COORDINATES,
  getCityCenterCoordinates,
  getDataForMarkers,
} from 'src/actions/search';

const mapMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case GET_GPS_COORDINATES:
      // console.log('dans mapMiddleware');
      console.log(state.search.results);
      // console.log(state.search.city);
      // console.log(state.search.results[0].adresse_numero_voie);
      // console.log(adresse);
      // eslint-disable-next-line no-case-declarations
      const cityCenterPositionPostalCode = () => {
        if (state.search.city.length === 2) {
          return (`${state.search.city}000`);
        }
        return state.search.city;
      };
      // eslint-disable-next-line no-case-declarations
      const config = {
        method: 'GET',
        url: 'https://api-adresse.data.gouv.fr/search/',
        params: { q: cityCenterPositionPostalCode() },
      };
      axios(config)
        .then((response) => {
        // console.log(response.data.features[0].geometry.coordinates[1]);
          store.dispatch(getCityCenterCoordinates(response.data.features[0].geometry.coordinates));
        }).catch((error) => {
          console.error(error);
        });

      const markerArray = [];
      const { results } = state.search;
      for (let index = 0; index < results.length; index++) {
        // markerArray = {
        //   popup: `${results[index].titre}`,
        // };
        setTimeout(() => {
          const adress = `${results[index].adresse_numero_voie} ${results[index].adresse_repetition} ${results[index].adresse_type_voie} ${results[index].adresse_libelle_voie} ${results[index].adresse_code_postal} ${results[index].adresse_libelle_commune}`;
          axios({
            method: 'GET',
            url: 'https://api-adresse.data.gouv.fr/search/',
            params: { q: adress },
          })
            .then((response) => {
              // eslint-disable-next-line max-len
              markerArray.push([results[index].titre, response.data.features[0].geometry.coordinates, index]);
              store.dispatch(getDataForMarkers(markerArray));
            });
        }, 100 * index);
      }
      console.log('markerArray', markerArray);
      // const markerArray = [];
      // const results = state.search.results;
      // for (let index = 0; index < results.length; index++) {
      //   const popupMarkerArray = `${results[index].titre}`
      //   const adress = `${results[index].adresse_numero_voie}
      //    ${results[index].adresse_repetition}
      //    ${results[index].adresse_type_voie}
      //    ${results[index].adresse_libelle_voie}
      //    ${results[index].adresse_code_postal}
      //    ${results[index].adresse_libelle_commune}`
      //   console.log(adress);
      //   axios({
      //     method: 'GET',
      //     url: 'https://api-adresse.data.gouv.fr/search/',
      //     params: adress,
      //   })

      break;
    default:
      next(action);
  }
};

export default mapMiddleware;
