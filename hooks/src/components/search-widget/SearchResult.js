import React from 'react';

const SearchResult = ({ item }) => {
  const sanitizeSnippet = (string) => {
    const node = document.createElement('div');
    node.innerHTML = string;
    const sanitized = node.innerText;

    return sanitized;
  };

  return (
    <div className='item'>
      <div className='right floated content'>
        <a
          href={`https://en.wikipedia.org?curid=${item.pageid}`}
          className='ui button'
          target='_blank'
          rel='noopener noreferrer'
        >
          Go
        </a>
      </div>
      <div className='content'>
        <div className='header'>{item.title}</div>
        <p>{sanitizeSnippet(item.snippet)}</p>
      </div>
    </div>
  );
};

export default SearchResult;
