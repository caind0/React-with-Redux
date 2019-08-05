//From Reducers
import { combineReducers } from 'redux';


const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05'},
    { title: 'No Diggity', duration: '3:44'},
    { title: 'I Want It That Way', duration: '4:44'},
    { title: 'California Love', duration: '5:55'}
  ];
};

const selectedSongReducer = (selectedSong = null,action) => {
  if(action.type === 'SONG_SELECTED'){
    return action.payload
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
