import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAMS,
  DELETE_STREAMS
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type){
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      reeturn { ...state, [action.payload.id]: action.payload };
    case
    default:
      return state;
  }
}
