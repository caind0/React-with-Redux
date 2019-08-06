import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  //bad approach breaking rules of action creator
  return async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response})
  };
};
