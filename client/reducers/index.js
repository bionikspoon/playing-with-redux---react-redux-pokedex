import { combineReducers } from 'redux';
import counter from 'reducers/counter';
import pokemon from 'reducers/pokemon';

export default combineReducers({
  counter,
  pokemon
});
