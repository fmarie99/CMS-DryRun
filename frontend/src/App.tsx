import React from "react";
import ContactList from "./components/ContactList";
import { useState } from "react";
import ContactForm from "./components/ContactForm";

function App() {
  // create a state variable for contacts
  const [contacts, setContacts] = useState([]);

  return (
    <div className="App">
      <ContactList contacts={contacts} />
      <ContactForm />
    </div>
  );
}

export default App;

// ContactForm component
// ContactList component
