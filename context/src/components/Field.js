import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

const Field = () => {
  const { language } = useContext(LanguageContext);
  const labelText = language === 'english' ? 'Name' : 'Naam';
  return (
    <div className='field'>
      <label htmlFor='username'>{labelText}</label>
      <input type='text' name='username' />
    </div>
  );
};

export default Field;
