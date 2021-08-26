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
      const config = {
        method: 'get',
        url: `https://entreprise.data.gouv.fr/api/rna/v1/full_text/${state.search.sport}`,
        headers: {
          'Content-Type': 'application/json',
        },
      };
      axios(config)
        .then((response) => {
          store.dispatch(getResultsFromApiSuccess(response.data));
          console.log(response.data);
        })
        .catch((error) => {
          store.dispatch(getResultsFromApiError());
        });
      break;
    default:
        next(action);
  }    
};
    
export default searchMiddleware;
    