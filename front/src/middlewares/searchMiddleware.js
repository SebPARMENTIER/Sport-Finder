/* eslint-disable no-plusplus */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
/* eslint-disable no-case-declarations */
/* eslint-disable max-len */
// == Import : npm
import axios from 'axios';

// == Import : local
import {
  getResultsFromApiSuccess,
  getResultsFromApiError,
  SEARCH_SPORT,
  getGPSCoordinates,
} from 'src/actions/search';

const searchMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case SEARCH_SPORT:
      // Make array for results
      const arrayResults = [];
      // First request on sport and on page 1
      axios({
        method: 'get',
        url: `https://entreprise.data.gouv.fr/api/rna/v1/full_text/${state.search.sport}?per_page=100?page=1`,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          // Stock number of pages
          const nbPage = Number(response.data.total_pages);
          let nbResult = Number(response.data.total_results);
          // In response, we loop each association to push it into the table the 1st time.
          // if the number of pages is equal to 1
          if (nbPage === 1) {
            for (let index = 0; index < nbResult; index++) {
              arrayResults.push(response.data.association[index]);
            }
            const cityFilter = arrayResults.filter(({ adresse_code_postal }) => adresse_code_postal.startsWith(state.search.city));
            if (cityFilter.length === 0) {
              store.dispatch(getResultsFromApiError());
            }
            else {
              store.dispatch(getResultsFromApiSuccess(cityFilter));
            }
          }
          // if the number of pages is between 1 and 7 (because the API allows until 7 requests per second)
          else if (nbPage < 7 && nbPage > 1) {
            // As the API gives 100 results per page max, we substrack 100 to total results because those results are already pushed it into arrayResults
            nbResult -= 100;
            for (let index = 0; index < 100; index++) {
              arrayResults.push(response.data.association[index]);
            }
            // Second request into the loop which stops to 6 laps
            for (let index = 2; index < nbPage; index++) {
              // We remove 100 results for each loop until there is a result under 100
              nbResult -= 100;
              axios({
                method: 'GET',
                url: `https://entreprise.data.gouv.fr/api/rna/v1/full_text/${state.search.sport}?per_page=100&page=${index}`,
                headers: {
                  'Content-Type': 'application/json',
                },
              })
                // eslint-disable-next-line no-loop-func
                .then((response1) => {
                  if (nbResult > 100) {
                    for (let index1 = 0; index1 < 100; index1++) {
                      arrayResults.push(response1.data.association[index1]);
                    }
                    const cityFilter = arrayResults.filter(({ adresse_code_postal }) => adresse_code_postal.toLowerCase().startsWith(state.search.city.toLowerCase()));
                    store.dispatch(getResultsFromApiSuccess(cityFilter));
                  }
                  else {
                    for (let index1 = 0; index1 < nbResult; index1++) {
                      arrayResults.push(response1.data.association[index1]);
                    }
                    const cityFilter = arrayResults.filter(({ adresse_code_postal }) => adresse_code_postal.toLowerCase().startsWith(state.search.city.toLowerCase()));
                    store.dispatch(getResultsFromApiSuccess(cityFilter));
                  }
                })
                .catch((error) => {
                  store.dispatch(getResultsFromApiError(error));
                });
            }
          }
          // As the API allows max 7 requests per second and for not make wait too long user, we decided to stop search at 700 results max
          else if (nbPage > 7) {
            for (let index = 0; index < 100; index++) {
              arrayResults.push(response.data.association[index]);
            }
            for (let index = 2; index < 7; index++) {
              axios({
                method: 'GET',
                url: `https://entreprise.data.gouv.fr/api/rna/v1/full_text/${state.search.sport}?per_page=100&page=${index}`,
                headers: {
                  'Content-Type': 'application/json',
                },
              })
                .then((response3) => {
                  for (let index2 = 0; index2 < 100; index2++) {
                    arrayResults.push(response3.data.association[index2]);
                  }
                  const cityFilter = arrayResults.filter(({ adresse_code_postal }) => adresse_code_postal.startsWith(state.search.city));
                  store.dispatch(getResultsFromApiSuccess(cityFilter));
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
          // We ask results to the RNA API in first time, then we wait for all results for asking the other API to have GPS coodinates for markers
          setTimeout(
            () => store.dispatch(getGPSCoordinates()),
            200,
          );
        });
      break;
    default:
      next(action);
  }
};

// == Export
export default searchMiddleware;
