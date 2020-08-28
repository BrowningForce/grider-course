import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

const Button = () => {
  const { language } = useContext(LanguageContext);
  const color = useContext(ColorContext);

  const text = language === 'english' ? 'Submit' : 'Voorlegen';

  return <button className={`ui button ${color}`}>{text}</button>;
};

export default Button;
