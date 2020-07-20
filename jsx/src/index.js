import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/style.css';

const App = () => {
  return (
    <div>
      <label className='label' htmlFor='name'>
        Name here:
      </label>
      <input id='name' type='text' />
      <button>Submit</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
