import React from 'react';
import { connect } from 'react-redux';
import FilterPokemon from 'components/FilterPokemon';
import PokemonList from 'components/PokemonList';
import * as PokemonActions from 'actions/pokemon';
import {bindActionCreators} from 'redux';


@connect(state => ({
  data: state.pokemon
}))
export default class HomeView extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    data: React.PropTypes.object.isRequired
  };

  constructor() {
    super();
  }

  _searchTermChanged(searchTerm) {
    this.props.dispatch(PokemonActions.searchTermChanged(searchTerm));
  }


  render() {
    const { pokemon, caughtPokemon  } = this.props.data;
    const actions = bindActionCreators(PokemonActions, this.props.dispatch);

    return (
      <section className='container text-center'>
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">

            <h1>Pokedex in Redux</h1>
            <FilterPokemon onSearchTermChanged={ this::this._searchTermChanged } />
            <PokemonList pokemon={ pokemon }
                         caughtPokemon={caughtPokemon}
                         actions={actions} />
          </div>
        </div>
      </section>
    );
  }
}
