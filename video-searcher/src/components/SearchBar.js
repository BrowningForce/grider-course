import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    searchTerm: '',
  };

  onInputChange = (event) => {
      this.setState({ searchTerm: event.target.value});
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    // TODO
    // Initiate search from YT api
  };

  render() {
    return (
      <div className='ui segment searchbar'>
        <form action='' className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label htmlFor=''>Video Search</label>
            <input
              type='text'
              onChange={this.onInputChange}
              placeholder='Search...'
              value={this.state.searchTerm}
            />
          </div>
        </form>
      </div>
    );
  }
}
