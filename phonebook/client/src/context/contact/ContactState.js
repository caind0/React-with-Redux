import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import ContactReducer from "./ContactReducer";
import { ADD_CONTACT, DELETE_CONTACT, SET_CONTACT, CLEAR_CONTACT, UPDATE_CONTACT, FILTER_CONTACT, REMOVE_CONTACT } from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      { id: 1, name: "Cain Do", email: "cdo@gmail.com", phone: "111 - 111 - 1111", type: "professional" },
      { id: 2, name: "Jim Do", email: "jdo@gmail.com", phone: "222 - 222 - 2222", type: "professional" },
      { id: 3, name: "Matt Do", email: "mdo@gmail.com", phone: "333 - 333 - 3333", type: "professional" }
    ]
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //Add Contact

  //Delete Contact

  //Set Current Contact

  //Clear Current Contact

  //Update Contact

  //Filter Contact

  //Cleat Contact

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
