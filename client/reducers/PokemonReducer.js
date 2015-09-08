import { createReducer } from 'utils/index';
import PokemonInitialData from 'constants/PokemonInitialData';
import Immutable from 'immutable';

const initialState = Immutable.Map(
  {
    pokemon: PokemonInitialData, searchTerm: '', caughtPokemon: []
  });

function filterPokemon(searchTerm = this.searchTerm) {
  let filtered = PokemonInitialData;
  if (searchTerm) {
    filtered = PokemonInitialData.filter(
        pokemon => pokemon.name.toLowerCase().indexOf(searchTerm.toLowerCase())
      > -1);
  }
  return filtered;
}
export default createReducer(
  initialState,

  {
    ['SEARCH_INPUT_CHANGED']: (state, payload) => {
      return state.merge(
        {
          searchTerm: payload, pokemon: state::filterPokemon(payload)
        });
    },

    ['MARK_CAUGHT']: (state, payload) => {
      return state.set(
        'caughtPokemon', [...(state.get('caughtPokemon')),
          payload
        ]);
    }
  });

