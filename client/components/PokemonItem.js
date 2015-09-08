import React from 'react';

export default class PokemonItem extends React.Component {
  static propTypes = {
    pokemon: React.PropTypes.object.isRequired,
    caught: React.PropTypes.bool.isRequired,
    actions: React.PropTypes.object.isRequired
  };

  render() {
    const { pokemon, caught, actions } = this.props;
    return (
      <tr className={caught ? 'success' : ''}>
        <td>{ pokemon.name }</td>
        <td>{ pokemon.type }</td>
        <td>{ pokemon.stage }</td>
        <td>{ pokemon.species }</td>
        <td>
          { caught ?

            'Caught!' :

            <button className="btn btn-primary"
                    type="button"
                    onClick={ ()=> actions.markCaught(pokemon.name) }>Catch</button> }
        </td>
      </tr>
    );
  }
}
