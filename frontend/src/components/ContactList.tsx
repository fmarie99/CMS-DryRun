import React, { useEffect } from "react";
import { Contact } from "../interfaces/Contact";
import { getContacts } from "../services/Api";

interface Props {
  contacts: Contact[];
  handleSetContacts: (contacts: Contact[]) => void;
}

export default function ContactList({ contacts, handleSetContacts }: Props) {
  // Read the contacts from the API using the useEffect hook with GetAllContacts

  useEffect(() => {
    // fetch the contacts from the API
    // set the contacts in the state
    (async () => {
      handleSetContacts(await getContacts());
    })();
  }, []);

  // create a component that displays list of contacts using UL and LI tags
  // add a button to each contact to delete it
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.firstName} {contact.lastName}
            <div>
              {contact.physicalAddress}
              {contact.deliveryAddress}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
