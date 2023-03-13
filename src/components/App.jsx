import React, { useState, useEffect } from 'react';

import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Container from './Container/Container';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const App = () => {
  const [contacts, setContacts] = useState(() => {
    const localStoregeContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(localStoregeContacts);
    if (parsedContacts && parsedContacts.length) {
      return parsedContacts;
    }
    return defaultContacts;
  });
  const [filterInput, setFilterInput] = useState('');

  const isDuplicate = name => {
    return contacts.find(contact => contact.name === name);
  };

  const onHandleSubmit = data => {
    if (isDuplicate(data.name)) {
      alert(`this ${data.name} is already in your contacts!`);
      return;
    }
    setContacts([data, ...contacts]);
    console.log(contacts);
  };

  const onDeleteContact = id => {
    setContacts(contacts.filter(el => el.id !== id));
  };

  const toFilteInput = e => {
    setFilterInput(e.currentTarget.value);
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const normolizeFilter = filterInput.toLowerCase();
  const filteredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normolizeFilter)
  );
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form onSubmit={onHandleSubmit} />
      <h2>Contacts</h2>
      <Filter value={filterInput} onChange={toFilteInput} />
      <ContactList data={filteredContact} delateContact={onDeleteContact} />
    </Container>
  );
};
export default App;
