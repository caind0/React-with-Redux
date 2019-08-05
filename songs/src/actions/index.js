//From actions

//Action Creator
export const selectSong = (song) => {
  //return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

//named export export many functions
