import axios from 'axios';

import { GET_GPS_COORDINATES } from 'src/actions/search';

const mapMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case GET_GPS_COORDINATES:
      console.log('dans mapMiddleware');
      console.log(state.search.results);
      console.log(state.search.city);
      console.log(state.search.results[0].adresse_numero_voie);
      const result = state.search.results[0];
      const adresse = `${result.adresse_numero_voie} ${result.adresse_repetition} ${result.adresse_type_voie} ${result.adresse_libelle_voie} ${result.adresse_code_postal} ${result.adresse_libelle_commune}`
      console.log(adresse);
      const cityCenterPositionPostalCode = () => {
        if (state.search.city.length === 2) {
          return (`${state.search.city}000`)
        }
        else{
          return state.search.city
        }
      }
      const config = {
        method: 'GET',
        url: 'https://api-adresse.data.gouv.fr/search/',
        params: {q: cityCenterPositionPostalCode()}
      };
      
      axios(config).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    default:
      next(action);
  }
};

export default mapMiddleware;
