import React, { Component } from 'react';

import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Container from './Container/Container';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  isDuplicate = name => {
    return this.state.contacts.find(contact => contact.name === name);
  };
  onHandleSubmit = data => {
    if (this.isDuplicate(data.name)) {
      alert(`this ${data.name} is already in your contacts!`);
      return;
    }

    this.setState(prevState => ({ contacts: [data, ...this.state.contacts] }));

    return this.state.contacts;
  };

  onDeleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  toFilteInput = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts && parsedContacts.length) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    const { filter, contacts } = this.state;
    const normolizeFilter = filter.toLowerCase();
    const filteredContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizeFilter)
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={this.onHandleSubmit} />

        <h2>Contacts</h2>

        <Filter value={this.state.filter} onChange={this.toFilteInput} />

        <ContactList
          data={filteredContact}
          delateContact={this.onDeleteContact}
        />
      </Container>
    );
  }
}
