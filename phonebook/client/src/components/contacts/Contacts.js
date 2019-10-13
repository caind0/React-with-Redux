import React, { Fragment, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  //check if there are no contacts in phonebook
  if (contacts.length === 0) {
    return <h4>Please add a Contact</h4>;
  }

  return (
    <div>
      <Fragment>
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(contact => (
                <CSSTransition key={contact.id} timeout={500} classNames="item">
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map(contact => (
                <CSSTransition key={contact.id} timeout={500} classNames="item">
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      </Fragment>
    </div>
  );
};

export default Contacts;
