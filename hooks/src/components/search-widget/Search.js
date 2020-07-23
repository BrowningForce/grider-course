import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchResult from './SearchResult';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    const executeSearch = async () => {
      const results = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedSearchTerm,
        },
      });
      
      setSearchResults(results.data.query.search);
    };

    if (debouncedSearchTerm) {
      executeSearch();
    }
  }, [debouncedSearchTerm]);

  const renderedResults = searchResults.map((result) => (
    <SearchResult key={result.pageid} item={result} />
  ));

  return (
    <div className='ui form'>
      <div className='field'>
        <label htmlFor='input'>Start Searching</label>
        <input
          name='input'
          type='text'
          className='input'
          placeholder='Search...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
};

export default Search;
