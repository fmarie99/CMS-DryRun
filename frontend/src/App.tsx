import React from "react";
import ContactList from "./components/ContactList";
import { useState } from "react";
import ContactForm from "./components/ContactForm";
import { Contact } from "./interfaces/Contact";

function App() {
  // create a state variable for contacts
  const [contacts, setContacts] = useState<Contact[]>([]);

  const setContactsHandler = (contacts: Contact[]) => {
    setContacts(contacts);
  };

  const addContactHandler = (contact: Contact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, contact];
    });
  };

  return (
    <div className="App">
      <h1>Contact Management Application</h1>
      <ContactForm handleAddContact={addContactHandler}/>
      <ContactList contacts={contacts} handleSetContacts={setContactsHandler} />

      <p>© chan, tim, mac</p>
    </div>
  );
}

export default App;

// ContactForm component
// ContactList component
