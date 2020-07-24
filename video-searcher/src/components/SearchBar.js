import React, { useState, onFormSubmit } from 'react';

const SearchBar = (props) => {
  const [query, setQuery] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(query);
  };

  return (
    <div className='ui segment searchbar'>
      <form action='' className='ui form' onSubmit={onSubmit}>
        <div className='field'>
          <label>Video Search</label>
          <input
            type='text'
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search...'
            value={query}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
