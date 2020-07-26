import React from 'react';

import SongList from './SongList';
import SelectedSongCard from './SelectedSongCard';

const App = () => {
  return (
    <div className='ui container grid'>
      <div className='ui row'>
        <div className='column eight wide'>
          <SongList />
        </div>
        <div className="column eight wide">
          <SelectedSongCard />
        </div>
      </div>
    </div>
  );
};

export default App;
