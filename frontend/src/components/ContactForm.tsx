import { useState } from "react";

export default function ContactForm() {
  // create a state variable for the form inputs
  const [contact, setContact] = useState({
    firstname: "",
    lastname: "",
    physicalAddress: "",
    deliveryAddress: "",
  });

  // create a function to handle the form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(contact);
  };

  // create a function to handle the form input changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setContact((prevContact) => {
      return {
        ...prevContact,
        [name]: value,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        value={contact.firstname}
        onChange={handleChange}
      />

      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        id="lastname"
        name="lastname"
        value={contact.lastname}
        onChange={handleChange}
      />

      <label htmlFor="physicalAddress">Physical Address</label>
      <input
        type="text"
        id="physicalAddress"
        name="physicalAddress"
        value={contact.physicalAddress}
        onChange={handleChange}
      />

      <label htmlFor="deliveryAddress">Delivery Address</label>
      <input
        type="text"
        id="deliveryAddress"
        name="deliveryAddress"
        value={contact.deliveryAddress}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
