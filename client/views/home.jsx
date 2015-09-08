import React from 'react';
import { connect } from 'react-redux';
import FilterPokemon from 'components/FilterPokemon';
import PokemonList from 'components/PokemonList';
import * as PokemonActions from 'actions/pokemon';


@connect(state => ({
  store: state.pokemon
}))
export default class HomeView extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    store: React.PropTypes.object.isRequired
  }

  constructor() {
    super();
  }

  _searchTermChanged(searchTerm) {
    this.props.dispatch(PokemonActions.searchTermChanged(searchTerm));
  }


  render() {
    const { store} = this.props;

    return (
      <section className='container text-center'>
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">

            <h1>Pokedex in Redux</h1>
            <FilterPokemon onSearchTermChanged={this::this._searchTermChanged} />
            <PokemonList store={store} />
          </div>
        </div>
      </section>
    );
  }
}
