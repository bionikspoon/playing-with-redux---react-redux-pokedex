import { createReducer } from 'utils/index';
import PokemonList from 'constants/pokemon-list';

const initialState = {
  pokemon: PokemonList,
  searchTerm: '',
  caughtPokemon: []
};

function filterPokemon(searchTerm = this.searchTerm) {
  console.log('fitlerPokemon', this);
  let filtered = PokemonList;
  if (searchTerm) {
    filtered = PokemonList.filter(
        pokemon => pokemon.name.toLowerCase().indexOf(searchTerm.toLowerCase())
      > -1);
  }
  return filtered;
}
export default createReducer(initialState, {
  ['SEARCH_INPUT_CHANGED']: (state, payload) => {
    return {
      ...state,
      searchTerm: payload,
      pokemon: state::filterPokemon(payload)
    };
  }
});

