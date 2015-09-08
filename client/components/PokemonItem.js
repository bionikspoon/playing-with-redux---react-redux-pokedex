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
        <td>{ pokemon.get('name') }</td>
        <td>{ pokemon.get('type') }</td>
        <td>{ pokemon.get('stage') }</td>
        <td>{ pokemon.get('species') }</td>
        <td>
          { caught ?

            'Caught!' :

            <button className="btn btn-primary btn-xs"
                    type="button"
                    onClick={ ()=> actions.markCaught(pokemon.get('name')) }>Catch</button> }
        </td>
      </tr>
    );
  }
}
