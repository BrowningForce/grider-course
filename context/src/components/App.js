import React from 'react';
import UserCreateForm from './UserCreateForm';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

const App = () => {
  return (
    <div className='ui container'>
      <LanguageStore>
        <LanguageSelector />

        <ColorContext.Provider value='red'>
          <UserCreateForm />
        </ColorContext.Provider>
      </LanguageStore>
    </div>
  );
};

export default App;
