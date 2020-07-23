import React, { useState } from 'react';
import { data } from '../data/data';
import options from './dropdown-widget/options';
// Components
import Header from './Header';
import Route from './Route';
import Accordion from './accordion-widget/Accordion';
import Search from './search-widget/Search';
import Dropdown from './dropdown-widget/Dropdown';
import Translate from './translate-widget/Translate';

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className='ui segment'>
      <Header />
      <Route path='/'>
        <Accordion data={data} />
      </Route>
      <Route path='/search'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          options={options}
          labelText='Pick a color'
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
};

export default App;
