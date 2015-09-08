import React from 'react';

export default class FilterPokemon extends React.Component {
  static propTypes = {
    onSearchTermChanged: React.PropTypes.func.isRequired
  }

  render() {
    const { onSearchTermChanged} = this.props;
    return (
      <form >
        <div className='form-group'>
          <input type='text'
                 name='search'
                 className='form-control'
                 placeholder='Search Pokedex'
                 value={this.searchTerm}
                 onChange={e => onSearchTermChanged(e.target.value)} />
        </div>
      </form>
    );
  }
}
