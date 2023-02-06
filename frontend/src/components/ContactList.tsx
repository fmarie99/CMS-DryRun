import { Contact } from "../interfaces/Contact";

interface Props {
  contacts: Contact[];
}

export default function ContactList({ contacts }: Props) {
  // create a component that displays list of contacts using UL and LI tags
  // add a button to each contact to delete it
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li>
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
