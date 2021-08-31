import axios from 'axios';

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
      // création du tableau vide
      const tableau = [];
      const tableauFilter = [];

      if (state.search.sport.length === 0) {
        axios({method: 'GET',
          url: 'https://entreprise.data.gouv.fr/api/rna/v1/full_text/Accrobranche+Acrosport+Aerobic+Aéromodélisme+Aérostation+Agility+Aikido+Airsoft+Alpinisme+Apnée+Aquabike+Aquagym+Arts-du-cirque+Athlétisme+Automobile+Aviation+Aviron+Babyfoot+Badminton+Ball-Trap+Bandy+Base-jump+Baseball+Basketball+Beach-soccer+Beach-tennis+Beach-volley+Béhourd+Biathlon+Billard+BMX+Bobsleigh+Boccia+Bodyboard+Bodybuilding+Boomerang+Bouzkachi+Bowling+Boxe+Boxe-anglaise+Boxe-chinoise+Boxe-française+Boxe-thaïlandaise+Bras-de-fer+Bridge+Caber+Calcio-florentin+Canicross+Canne-de-combat+Canoë+Canoë-kayak+Canyoning+Canyonisme+Capoeira+Carrom+Catch+Chanbara+Char-à-voile+Chase-tag+Cheerleading+Cirque+Claquettes+Combat+Corde-à-sauter+Course+Course-à-pied+Course-aérienne+Course-camarguaise+Course-d\'obstacles+Course-d\'orientation+Course-de-cote+Course-de-drones+Course-landaise+Cricket+Croquet+Cross-training+Cross-country+Crosse+Crossfit+Curling+Cyclisme+Cyclisme-artistique+Cyclisme-sur-piste+Cyclisme-sur-route+Cyclo-cross+Cyclotourisme+Danse+Danse-africaine+Danse-classique+Danse-contemporaine+Danse-country+Danse-indienne+Danse-orientale+Danse-rock+Danse-sportive+Danse-sur-glace+Décathlon+Deltaplane+Disc-golf+Dragon-boat+Dragster+E-sport+Echecs+Enduro+Equitation+Escalade+Escrime+Extreme-Football-League+Fierljeppen+Fitminton+Fitness+Flag+Flamenco+Fléchettes+Floorball+Football+Football-américain+Football-australien+Footgolf+Footing+Footpool+Force-athlétique+Full-contact+Funboard+Futsal+Giraviation+Golf+Gouren+Grappling+Gymkhana+Gymnastique+Gymnastique-artistique+Gymnastique-rythmique+Haltérophilie+Handball+Handisport+Hapkido+Heptathlon+Hip-hop+Hockey+Hockey-subaquatique+Hockey-sur-gazon+Hockey-surglace+Horse-ball+Hurling+Iaïdo+Ice-cross+Indiaca+Indycar+Jetski+Jett-kune-do+Jianzi+Jodo+Jorkyball+Joutes+Ju-Jitsu+Judo+Kabaddi+Kalarippayatt+Kali-Arnis-Eskrima+Karaté+Karting+Kayak+Kempo+Kendo+Kenjutsu+Kick-boxing+Kin-ball+Kitesurf+Kobudo+Korfbal+Krav-maga+Kung-fu+Kyokushinkai+Kyudo+Lancer-du-javelot+Lancer-du-marteau+Lancer-du-poids+Lawn-bowl+Luge+Lutte+Marathon+Marche+Marche-aquatique+Marche-athlétique+Marche-nordique+Marche-sportive+MMA+Monocycle+Moto+Moto-cross+Moto-ball+Motoneige+Mountainboard+Musculation+Naginata+Natation+Natation-synchronisée+Netball+Ninjitsu+Nunchaku+Octathlon+Omnikin+Paddle+Padel+Paintball+Pancrace+Parachutisme+Paramoteur+Parapente+Parkour+Patinage+Patinage-artistique+Patinage-de-vitesse+Pêche+Pelote-basque+Pelote-valencienne+Pencak-Silat+Pentathlon+Pesäpallo+Pétanque+Peteca+Pilates+Ping-pong+Planche-à-voile+Plongée+Plongeon+Pole-dance+Polo+Qi-gong+Quad+Quilles+Qwan-Ki-Do+Raffa-volo+Rafting+Ragga+Raid+Rallycross+Rallye+Randonnée+Rink-hockey+Rock+Rodéo+Roller+Roller-Derby+Rugby+Rugby-subaquatique+Salsa+Samba+Sambo+Sarbacane+Saut-à-la-perche+Saut-en-longueur+Sauvetage+Self-défense+Sepak-takraw+Skateboard+Skeleton+Ski+Ski-acrobatique+Ski-alpin+Ski-fond+Ski-nautique+Skicross+Slackline+Slamball+Snorkeling+Snowboard+Snowkite+Softball+Speed-riding+Spéléologie+Spinning+Squash+Step+Stretching+Sumo+Surf+Taekwondo+Taï-chi+Tambourin+Tango+Tchoukball+Tennis+Tennis-de-table+Teqball+Tir+Tir-à-l\'arc+Tractor-pulling+Trail+Traîneaux+Trampoline+Trapèze+Triathlon+Tricking+Trottinette+Tumbling+Twirling-baton+ULM+Ultimate+Ultimate-fresbee+Varappe+Vélo+Voile+Volleyball+Voltige+Vovinam-Viet-Vo-Dao+VTT+Wakeboard+Waterpolo+Watfit+Wing-chun+Wingsuit+Yoga+Yoseikan-budo+Yukigassen+Zumba?per_page=100?page=1',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
          // on stocke le nb de page
          // const nbPageNoSport = Number(response.data.total_pages);
          // const nbResultNoSport = Number(response.data.total_results);
          // console.log('nbPageNoSport', nbPageNoSport);
          // console.log('nbResultNoSport', nbResultNoSport);
          //  en réponse on boucle chaque association pour la push dans le tableau la 1er foix
            for (let index = 0; index < 100; index++) {
              tableau.push(response.data.association[index]);
            }
            for (let index = 2; index < 7 ; index++) {
              axios({
                method: 'GET',
                url: `https://entreprise.data.gouv.fr/api/rna/v1/full_text/Accrobranche+Acrosport+Aerobic+Aéromodélisme+Aérostation+Agility+Aikido+Airsoft+Alpinisme+Apnée+Aquabike+Aquagym+Arts-du-cirque+Athlétisme+Automobile+Aviation+Aviron+Babyfoot+Badminton+Ball-Trap+Bandy+Base-jump+Baseball+Basketball+Beach-soccer+Beach-tennis+Beach-volley+Béhourd+Biathlon+Billard+BMX+Bobsleigh+Boccia+Bodyboard+Bodybuilding+Boomerang+Bouzkachi+Bowling+Boxe+Boxe-anglaise+Boxe-chinoise+Boxe-française+Boxe-thaïlandaise+Bras-de-fer+Bridge+Caber+Calcio-florentin+Canicross+Canne-de-combat+Canoë+Canoë-kayak+Canyoning+Canyonisme+Capoeira+Carrom+Catch+Chanbara+Char-à-voile+Chase-tag+Cheerleading+Cirque+Claquettes+Combat+Corde-à-sauter+Course+Course-à-pied+Course-aérienne+Course-camarguaise+Course-d'obstacles+Course-d'orientation+Course-de-cote+Course-de-drones+Course-landaise+Cricket+Croquet+Cross-training+Cross-country+Crosse+Crossfit+Curling+Cyclisme+Cyclisme-artistique+Cyclisme-sur-piste+Cyclisme-sur-route+Cyclo-cross+Cyclotourisme+Danse+Danse-africaine+Danse-classique+Danse-contemporaine+Danse-country+Danse-indienne+Danse-orientale+Danse-rock+Danse-sportive+Danse-sur-glace+Décathlon+Deltaplane+Disc-golf+Dragon-boat+Dragster+E-sport+Echecs+Enduro+Equitation+Escalade+Escrime+Extreme-Football League+Fierljeppen+Fitminton+Fitness+Flag+Flamenco+Fléchettes+Floorball+Football+Football américain+Football australien+Footgolf+Footing+Footpool+Force athlétique+Full contact+Funboard+Futsal+Giraviation+Golf+Gouren+Grappling+Gymkhana+Gymnastique+Gymnastique artistique+Gymnastique-rythmique+Haltérophilie+Handball+Handisport+Hapkido+Heptathlon+Hip hop+Hockey+Hockey subaquatique+Hockey sur gazon+Hockey sur glace+Horse ball+Hurling+Iaïdo+Ice cross+Indiaca+Indycar+Jetski+Jett kune do+Jianzi+Jodo+Jorkyball+Joutes+Ju-Jitsu+Judo+Kabaddi+Kalarippayatt+Kali Arnis Eskrima+Karaté+Karting+Kayak+Kempo+Kendo+Kenjutsu+Kick boxing+Kin ball+Kitesurf+Kobudo+Korfbal+Krav-maga+Kung fu+Kyokushinkai+Kyudo+Lancer du javelot+Lancer du marteau+Lancer du poids+Lawn bowl+Luge+Lutte+Marathon+Marche+Marche aquatique+Marche athlétique+Marche nordique+Marche sportive+MMA+Monocycle+Moto+Moto cross+Moto-ball+Motoneige+Mountainboard+Musculation+Naginata+Natation+Natation synchronisée+Netball+Ninjitsu+Nunchaku+Octathlon+Omnikin+Paddle+Padel+Paintball+Pancrace+Parachutisme+Paramoteur+Parapente+Parkour+Patinage+Patinage artistique+Patinage de vitesse+Pêche+Pelote basque+Pelote valencienne+Pencak-Silat+Pentathlon+Pesäpallo+Pétanque+Peteca+Pilates+Ping pong+Planche à voile+Plongée+Plongeon+Pole dance+Polo+Qi gong+Quad+Quilles+Qwan Ki Do+Raffa volo+Rafting+Ragga+Raid+Rallycross+Rallye+Randonnée+Rink hockey+Rock+Rodéo+Roller+Roller Derby+Rugby+Rugby subaquatique+Salsa+Samba+Sambo+Sarbacane+Saut à la perche+Saut en longueur+Sauvetage+Self défense+Sepak takraw+Skateboard+Skeleton+Ski+Ski acrobatique+Ski alpin+Ski de fond+Ski nautique+Skicross+Slackline+Slamball+Snorkeling+Snowboard+Snowkite+Softball+Speed riding+Spéléologie+Spinning+Squash+Step+Stretching+Sumo+Surf+Taekwondo+Taï chi+Tambourin+Tango+Tchoukball+Tennis+Tennis de table+Teqball+Tir+Tir à l'arc+Tractor pulling+Trail+Traîneaux+Trampoline+Trapèze+Triathlon+Tricking+Trottinette+Tumbling+Twirling baton+ULM+Ultimate+Ultimate fresbee+Varappe+Vélo+Voile+Volleyball+Voltige+Vovinam Viet Vo Dao+VTT+Wakeboard+Waterpolo+Watfit+Wing chun+Wingsuit+Yoga+Yoseikan budo+Yukigassen+Zumba?per_page=100?page=${index}`,
                headers: {
                  'Content-Type': 'application/json',
                },
              })
                .then((response2) => {
                  for (let index = 0; index < 100; index++) {
                    tableau.push(response2.data.association[index]);
                  }
                  if (isNaN(state.search.city) == false) {
                    // eslint-disable-next-line max-len
                    // eslint-disable-next-line max-len
                    const cityFilter = tableau.filter(({ adresse_code_postal }) => adresse_code_postal.startsWith(Number(state.search.city)));
                    // console.log(" code postal result > 7",cityFilter);
                    tableauFilter.push(cityFilter);
                    // console.log("tableauFilter", tableauFilter);
                    const tabFlat = tableauFilter.flat();
                    // console.log("tabFlat", tabFlat);
                    const filteredArray = tabFlat.filter((ele, pos) => tabFlat.indexOf(ele) == pos);
                    // console.log("filteredArray",filteredArray);
                    store.dispatch(getResultsFromApiSuccess(filteredArray));
                  }
                })
                .catch((error) => {
                  store.dispatch(getResultsFromApiError(error));
                });
            }
          })
          .catch((error) => {
            store.dispatch(getResultsFromApiError(error));
          });
      }
      else {
        // 1er requete sur le sport et la page 1
        axios({method: 'get',
          url: `https://entreprise.data.gouv.fr/api/rna/v1/full_text/${state.search.sport}?per_page=100?page=1`,
          headers: {
            'Content-Type': 'application/json',
          }})
          .then((response) => {
            // on stocke le nb de page
            const nbPage = Number(response.data.total_pages);
            // const nbResult = Number(response.data.total_results);
            // console.log('nbpage', nbPage);
            // console.log('nbresult', nbResult);
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
              for (let index = 2; index < nbPage ; index++) {
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
                      const cityFilter = tableau.filter(({ adresse_code_postal }) => adresse_code_postal.toLowerCase().startsWith(state.search.city.toLowerCase()));
                      // console.log(" code postal result > 7",cityFilter);
                      tableauFilter.push(cityFilter)
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
      }
      break;
    default:
      next(action);
  }
};

export default searchMiddleware;
