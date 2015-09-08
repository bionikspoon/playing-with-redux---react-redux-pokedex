import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import FilterPokemon from 'components/FilterPokemon';
import PokemonList from 'components/PokemonList';
import * as PokemonActions from 'actions/PokemonActions';


@connect(
    state => ({props: state.PokemonReducer}),
    PokemonActions,
    (data, actions, props) =>({data: data.props, actions, ...props}))
export default class HomeView extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor() {
    super();
  }


  render() {
    const { data, actions  } = this.props;
    return (
      <section className='container text-center'>
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">

            <h1>Pokedex in Redux</h1>
            <FilterPokemon actions={actions} />

            <PokemonList pokemon={ data.get('pokemon')}
                         caughtPokemon={data.get('caughtPokemon')}
                         actions={actions} />
          </div>
        </div>
      </section>
    );
  }
}
