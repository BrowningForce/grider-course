import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchTerm: '',
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.searchTerm);
  }

  onInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label htmlFor='search'>Image Search</label>
            <input
              type='text'
              name='search'
              id='search'
              onChange={this.onInputChange}
              value={this.state.searchTerm}
              placeholder='Search...'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
