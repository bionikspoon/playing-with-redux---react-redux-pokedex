import React from 'react';
import PokemonItem from 'components/PokemonItem';

export default class PokemonList extends React.Component {
  static propTypes = {
    pokemon: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    caughtPokemon: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
  };

  render() {
    const { pokemon, caughtPokemon, actions } = this.props;
    return (
      <table className="table table-striped">
        <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Stage</th>
          <th>Species</th>
          <th>Caught?</th>
        </tr>
        </thead>
        <tbody>
        {pokemon.map(
            pokemonObject =>
            <PokemonItem key={pokemonObject.name}
                         pokemon={pokemonObject}
                         caught={caughtPokemon.indexOf(pokemonObject.name) > -1}
                         actions={actions} />)}
        </tbody>
      </table>
    );
  }
}
