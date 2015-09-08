import React from 'react';

export default class PokemonItem extends React.Component {
  static propTypes = {
    pokemon: React.PropTypes.object.isRequired
  };

  render() {
    const { pokemon } = this.props;
    return (
      <tr>
        <td>{ pokemon.name }</td>
        <td>{ pokemon.type }</td>
        <td>{ pokemon.stage }</td>
        <td>{ pokemon.species }</td>
        <td>{ pokemon.name }</td>
      </tr>
    );
  }
}
