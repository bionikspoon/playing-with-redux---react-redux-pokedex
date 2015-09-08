import { combineReducers } from 'redux';
import counter from 'reducers/counter';
import PokemonReducer from 'reducers/PokemonReducer';

export default combineReducers({
  counter,
  PokemonReducer
});
