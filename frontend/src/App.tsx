import React from "react";
import ContactList from "./components/ContactList";
import { useState } from "react";
import ContactForm from "./components/ContactForm";

function App() {
  // create a state variable for contacts
  const [contacts, setContacts] = useState([]);

  return (
    <div className="App">
      <h1>Contact Management App</h1>
      <ContactList contacts={contacts} />
      <ContactForm />

      <p>© chan, tim, mac</p>
    </div>
  );
}

export default App;

// ContactForm component
// ContactList component
