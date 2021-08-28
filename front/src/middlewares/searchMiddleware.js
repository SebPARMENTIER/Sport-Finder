import axios from 'axios'

import {
  getResultsFromApiSuccess,
  getResultsFromApiError,
  SEARCH_SPORT,
} from 'src/actions/search';

const searchMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case SEARCH_SPORT:
      const tableau = [];
      axios({method: 'get',
        url: `https://entreprise.data.gouv.fr/api/rna/v1/full_text/${state.search.sport}?per_page=100?page=1`,
        headers: {
          'Content-Type': 'application/json',
        }})
        .then((response) => {
          for (let index = 0; index < 100; index++) {
            tableau.push(response.data.association[index]); 
          }

          for (let index = 2; index < 7 ; index++) {
            axios({
              method: 'GET',
              url: `https://entreprise.data.gouv.fr/api/rna/v1/full_text/${state.search.sport}?per_page=100&page=${index}`,
              headers: {
                'Content-Type': 'application/json',
              }
            })
            .then((response) => {
              for (let index = 0; index < 100; index++) {
                tableau.push(response.data.association[index]); 
              }

              if (state.search.city.length === 5 && (state.search.city.substr(0, 1) === "9" || "8" || "7" || "6" || "5" || "4" || "3" || "2" || "1" || "0")) {
                const cityFilter = tableau.filter(({ adresse_code_postal }) => adresse_code_postal.toLowerCase().includes(state.search.city.toLowerCase()));
                console.log(cityFilter);
                store.dispatch(getResultsFromApiSuccess(cityFilter));
                tableau.push(cityFilter)
              }
              else if (state.search.city.length === 2 && (state.search.city.substr(0, 1) === "9" || "8" || "7" || "6" || "5" || "4" || "3" || "2" || "1" || "0")) {
                const cityFilter = tableau.filter(({ adresse_code_postal }) => adresse_code_postal.toLowerCase().startsWith(state.search.city.toLowerCase()));
                console.log(cityFilter);
                store.dispatch(getResultsFromApiSuccess(cityFilter));
              }
              else if (typeof state.search.city === "string") {
                  const cityFilter = tableau.filter(({ adresse_libelle_commune }) => adresse_libelle_commune.toLowerCase().includes(state.search.city.toLowerCase()));
                console.log(cityFilter);
                store.dispatch(getResultsFromApiSuccess(cityFilter));
              }

            })
            .catch((error) => {
              store.dispatch(getResultsFromApiError());
            });

          }
        })
        .catch((error) => {
          store.dispatch(getResultsFromApiError());
        });
          console.log(tableau);


        // store.dispatch(getResultsFromApiSuccess(tableau))

    break;
  default:
      next(action);
  }    
};
    
export default searchMiddleware;
