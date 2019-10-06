import { ADD_CONTACT, DELETE_CONTACT, SET_CONTACT, CLEAR_CONTACT, UPDATE_CONTACT, FILTER_CONTACT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact => (contact.id === action.payload.id ? action.payload : contact))
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      };
    case SET_CONTACT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CONTACT:
      return {
        ...state,
        current: action.payload
      };
    default:
      return state;
  }
};
