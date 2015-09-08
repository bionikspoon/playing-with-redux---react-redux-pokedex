import { createReducer } from 'utils/index';
import PokemonInitialData from 'constants/PokemonInitialData';
import Immutable from 'immutable';
const PokemonList = Immutable.fromJS(PokemonInitialData);
const initialState = Immutable.Map(
  {
    pokemon: PokemonList, searchTerm: '', caughtPokemon: Immutable.List()
  });

function filterPokemon(searchTerm = this.get('searchTerm')) {
  if (!searchTerm) {
    return PokemonList;
  }
  return PokemonList.filter(
      pokemon => pokemon.get('name').toLowerCase().indexOf(searchTerm.toLowerCase())
    > -1);
}

export default createReducer(
  initialState,

  {
    ['SEARCH_INPUT_CHANGED']: (state, payload) => {
      return state

        .set('searchTerm', payload)

        .set('pokemon', state::filterPokemon(payload));
    },

    ['MARK_CAUGHT']: (state, payload) => {
      return state.setIn(
        ['caughtPokemon'], state.get('caughtPokemon').push(payload));
    }
  });

