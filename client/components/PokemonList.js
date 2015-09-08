import React from 'react';

export default class PokemonList extends React.Component {
  static propTypes = {
    store: React.PropTypes.object.isRequired
  }

  render() {
    const { store } = this.props;
    return (
      <div>
        <h1>Hello World</h1>
        {store}
      </div>
    );
  }
}
