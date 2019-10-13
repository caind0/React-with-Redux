import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import { ADD_CONTACT, DELETE_CONTACT, SET_CONTACT, CLEAR_CONTACT, UPDATE_CONTACT, FILTER_CONTACT, REMOVE_CONTACT, CLEAR_FILTER } from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      { id: 1, name: "Cain Do", email: "cdo@gmail.com", phone: "111-111-1111", type: "personal" },
      { id: 2, name: "Jim Do", email: "jdo@gmail.com", phone: "222-222-2222", type: "professional" },
      { id: 3, name: "Matt Do", email: "mdo@gmail.com", phone: "333-333-3333", type: "professional" }
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  //Set Current Contact
  const setContact = contact => {
    dispatch({ type: SET_CONTACT, payload: contact });
  };
  //Clear Current Contact
  const clearContact = () => {
    dispatch({ type: CLEAR_CONTACT });
  };
  //Update Contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  //Filter Contacts
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACT, payload: text });
  };
  //Clear Contact
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact,
        current: state.current,
        setContact,
        clearContact,
        updateContact,
        filtered: state.filtered,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
