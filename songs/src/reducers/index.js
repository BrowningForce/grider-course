import { combineReducers } from 'redux';

// Reducers

const songsReducer = () => {
  return [
    { title: 'I Want It All', duration: '5:45' },
    { title: 'Set It All Free', duration: '3:54' },
    { title: "I'm Still Standing", duration: '4:15' },
    { title: 'Killjoy', duration: '4:08' },
    { title: 'Bohemian Rhapsody', duration: '6:53' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type !== 'SELECT_SONG') {
    return selectedSong;
  }

  return action.payload;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
