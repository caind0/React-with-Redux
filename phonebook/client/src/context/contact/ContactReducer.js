import { ADD_CONTACT, DELETE_CONTACT, SET_CONTACT, CLEAR_CONTACT, UPDATE_CONTACT, FILTER_CONTACT, CLEAR_FILTER } from "../types";

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
    case FILTER_CONTACT:
      return {
        ...state,
        filtered: state.contacts.filter(contact => {
          //regex to match name that was passed in
          const regex = new RegExp(`${action.payload}`, "gi");
          return contact.name.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    default:
      return state;
  }
};
