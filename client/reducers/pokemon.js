import Immutable from 'immutable';
import { createReducer } from 'utils';
import PokemonList from 'constants/pokemon-list';
import { SEARCH_INPUT_CHANGED } from 'constants/pokemon';

const initialState = Immutable.Map({
  pokemon: Immutable.List(PokemonList),
  searchTerm: '',
  caughtPokemon: Immutable.List()
});

export default createReducer(initialState, {
  [SEARCH_INPUT_CHANGED]: (state, { copy }) => {
    return state.map.set('searchTerm', copy.searchTerm)
  }
})

//export default createReducer(initialState, {
//    [COUNTER_INCREMENT]: (state) => {
//        return state + 1;
//    }
//});
