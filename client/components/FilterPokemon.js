import React from 'react';

export default class FilterPokemon extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired
  };

  render() {
    const { actions } = this.props;
    return (
      <form >
        <div className='form-group'>
          <input type='text'
                 name='search'
                 className='form-control'
                 placeholder='Search Pokedex'
                 value={this.searchTerm}
                 onChange={e => actions.searchTermChanged(e.target.value)} />
        </div>
      </form>
    );
  }
}
