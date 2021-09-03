/* eslint-disable max-len */
import axios from 'axios';

import {
  getResultsFromApiSuccess,
  getResultsFromApiError,
  SEARCH_SPORT,
  getGPSCoordinates,
  // errorOnSearchAction,
} from 'src/actions/search';

const searchMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case SEARCH_SPORT:
      // création du tableau vide
      const tableau = [];
      const tableauFilter = [];
      // if (state.search.sport.length === 0 && state.search.city.length === 0 || state.search.sport.length === 0 || state.search.city.length === 0) {
      //   store.dispatch(errorOnSearchAction());
      // }
      // else {
      // 1er requete sur le sport et la page 1
      axios({method: 'get',
        url: `https://entreprise.data.gouv.fr/api/rna/v1/full_text/${state.search.sport}?per_page=100?page=1`,
        headers: {
          'Content-Type': 'application/json',
        }})
        .then((response) => {
          // on stocke le nb de page
          const nbPage = Number(response.data.total_pages);
          const nbResult = Number(response.data.total_results);
          console.log('nbpage', nbPage);
          console.log('nbresult', nbResult);
          //  en réponse on boucle chaque association pour la push dans le tableau la 1er foix
          for (let index = 0; index < 100; index++) {
            tableau.push(response.data.association[index]);
          }
          // si le nb de page est égale a 1
          if (nbPage === 1) {
            if (state.search.city.length === 0) {
              // console.log("no city",response.data.association);
              store.dispatch(getResultsFromApiSuccess(response.data.association));
            }
            else if (isNaN(state.search.city) == false) {
              // eslint-disable-next-line max-len
              const cityFilter = tableau.filter(({ adresse_code_postal }) => adresse_code_postal.toLowerCase().startsWith(state.search.city.toLowerCase()));
              // console.log('code postal result for 1',cityFilter);
              store.dispatch(getResultsFromApiSuccess(cityFilter));
            }
          }
          else if (nbPage < 7 && nbPage !== 1) {
            // 2éme requéte dans une boucle qui s'arréte a 6
            for (let index = 2; index < nbPage; index++) {
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
                  if (isNaN(state.search.city) == false) {
                    // eslint-disable-next-line max-len
                    const cityFilter = tableau.filter(({ adresse_code_postal }) => adresse_code_postal.toLowerCase().startsWith(state.search.city.toLowerCase()));
                    // console.log('code postal result < 7',cityFilter);
                    store.dispatch(getResultsFromApiSuccess(cityFilter));
                    tableauFilter.push(cityFilter);
                  }
                })
                .catch((error) => {
                  store.dispatch(getResultsFromApiError(error));
                });
            }
          }
          else if (nbPage > 7) {
            for (let index = 2; index < 7; index++) {
              axios({
                method: 'GET',
                url: `https://entreprise.data.gouv.fr/api/rna/v1/full_text/${state.search.sport}?per_page=100&page=${index}`,
                headers: {
                  'Content-Type': 'application/json',
                },
              })
                .then((response3) => {
                  for (let index = 0; index < 100; index++) {
                    tableau.push(response3.data.association[index]); 
                  }
                  if (isNaN(state.search.city) == false) {
                    // eslint-disable-next-line max-len
                    const cityFilter = tableau.filter(({ adresse_code_postal }) => adresse_code_postal.startsWith(state.search.city));
                    // console.log(" code postal result > 7",cityFilter);
                    tableauFilter.push(cityFilter);
                    // console.log("tableauFilter", tableauFilter);
                    // console.log("tabFlat", tabFlat);
                    // console.log("filteredArray",filteredArray);
                    store.dispatch(getResultsFromApiSuccess(cityFilter));
                  }
                })
                .catch((error) => {
                  store.dispatch(getResultsFromApiError(error));
                });
            }
          }
        })
        .catch((error) => {
          store.dispatch(getResultsFromApiError(error));
        })
        .finally(() => {
          setTimeout(
            () => store.dispatch(getGPSCoordinates()),
            200,
          );
        });
      // }
      break;
    default:
      next(action);
  }
};

export default searchMiddleware;
