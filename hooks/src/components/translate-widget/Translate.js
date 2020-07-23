import React, { useState } from 'react';
import Dropdown from '../dropdown-widget/Dropdown';
import Convert from './Convert';



const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'Russian',
    value: 'ru',
  },
  {
    label: 'Ukrainian',
    value: 'uk',
  },
  {
    label: 'English',
    value: 'en',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label className='label'>Enter text to translate</label>
          <textarea value={text} onChange={(e) => setText(e.target.value)} cols='30' rows='10' />
        </div>
      </div>
      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
        labelText='Please select language'
      />
      <hr />
      <h3 className='ui header'>Result</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
