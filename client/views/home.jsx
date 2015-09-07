import React from 'react';
import { connect } from 'react-redux';
import FilterPokemon from 'components/FilterPokemon';
import PokemonList from 'components/PokemonList';

@connect(state => ({
  data: state.data
}))
export default class HomeView extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
  }

  constructor() {
    super();
    this.state = {
      data: ''
    };
  }

  // normally you'd import an action creator, but I don't want to create
  // a file that you're just going to delete anyways!
  /*  _increment() {
   this.props.dispatch({type: 'SEARCH_INPUT_CHANGED'});
   }*/

  render() {
    const { data: {pokemon}, actions} = this.props;
    return (
      <section className='container text-center'>
        <h1>Pokedex in Redux</h1>
        <FilterPokemon actions={actions}/>
        <PokemonList pokemon={pokemon} actions={actions}/>
      </section>
    );
  }
}
