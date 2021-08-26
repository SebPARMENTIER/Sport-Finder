import axios from 'axios'

import {
  getResultsFromApiTotalPageSuccess,
  getResultsFromApiError,
  getResultsFromApiSuccess,
  SEARCH_SPORT,
} from 'src/actions/search';

const searchMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case SEARCH_SPORT:
      const config = {
        method: 'GET',
        url: `https://entreprise.data.gouv.fr/api/rna/v1/full_text/${state.search.sport}?per_page=100&page=1`,
        headers: {
          'Content-Type': 'application/json',
        }
      };
      axios(config)
        .then((response) => {
          store.dispatch(getResultsFromApiTotalPageSuccess(response.data.total_pages));
          console.log('response log', response.data.total_pages);
          const totalPages = response.data.total_pages;
            const config = {
              method: 'GET',
              url: `https://entreprise.data.gouv.fr/api/rna/v1/full_text/${state.search.sport}?per_page=100&page=1`,
              headers: {
                'Content-Type': 'application/json',
              }
            };
            axios(config)
            .then((response) => {
              const tableau = []
              for (let index = 0; index < 100; index++) {
                tableau.push(response.data.association[index]); 
              }
              
              
                // let config = {
                //   method: 'GET',
                //   url: `https://entreprise.data.gouv.fr/api/rna/v1/full_text/${state.search.sport}?per_page=100&page=1`,
                //   headers: {
                //     'Content-Type': 'application/json',
                //   }
                // };
                for (let index = 1; index < totalPages ; index++) {
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
                    
                    
                  })
                  .catch((error) => {
                    store.dispatch(getResultsFromApiError());
                  });
                  
                }
                

                // let config = {
                //   method: 'GET',
                //   url: `https://entreprise.data.gouv.fr/api/rna/v1/full_text/${state.search.sport}?per_page=100&page=2`,
                //   headers: {
                //     'Content-Type': 'application/json',
                //   }
                // };
                // axios(config)
                // .then((response) => {
                //   for (let index = 0; index < 100; index++) {
                //     tableau.push(response.data.association[index]); 
                //   }
                  
                  
                // })
                // .catch((error) => {
                //   store.dispatch(getResultsFromApiError());
                // });
                
              
              console.log(tableau);
            })
            .catch((error) => {
              store.dispatch(getResultsFromApiError());
            });
            
            
          
          
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
