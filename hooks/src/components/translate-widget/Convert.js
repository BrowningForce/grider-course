import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from './api/googleTranslate';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
          }, 1000);
      
          return () => {
            clearTimeout(timerId);
          };
    }, [text])

  useEffect(() => {
    const executeTranslation = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: API_KEY,
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };

    if (debouncedText) {
        executeTranslation();
    }
  }, [language, debouncedText]);

  return (
    <div className='ui segment'>
        <p>{translated}</p>
    </div>
  );
};

export default Convert;
