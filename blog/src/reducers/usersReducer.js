export default (state = [], action) => {
  switch (action.type) {
    // in index.js we have the reducer functions defined,
    // in this case we want the action of 'FETCH_USER'
    case "FETCH_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};
