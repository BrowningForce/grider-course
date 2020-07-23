import React, { useState } from 'react';
import { data } from '../data/data';
import options from './dropdown-widget/options';
// Components
import Accordion from './accordion-widget/Accordion';
import Search from './search-widget/Search';
import Dropdown from './dropdown-widget/Dropdown';
import Translate from './translate-widget/Translate';

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className='ui segment'>
      <Translate />
    </div>
  );
};

export default App;
