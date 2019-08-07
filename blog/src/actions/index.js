import jsonPlaceholder from '../apis/jsonPlaceholder';

// action creator to fetch all the posts
export const fetchPosts = () => async dispatch => {
  // returns something similar to a promise. using async /await syntax
  const response = await jsonPlaceholder.get("/posts");

  // for the API payload response, we only want the data property
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};
