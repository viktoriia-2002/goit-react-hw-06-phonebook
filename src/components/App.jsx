import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import ContactForm from './ContactForm';
import { Container } from './App.styled';

import { addContact, deleteContact } from 'redux/contactsSlice';
import { setStatusFilter } from 'redux/filterSlice';

const App = () => {
  const dispatch = useDispatch();

  const { contacts, filter } = useSelector(state => ({
    contacts: state.contacts,
    filter: state.filter,
  }));

  const handleNewContact = newContact => {
    dispatch(addContact(newContact));
  };

  const handleFilter = event => {
    const filterValue = event.target.value;
    console.log({ filterValue });
    dispatch(setStatusFilter(filterValue));
  };

  const handleDelete = name => {
    dispatch(deleteContact(name));
  };

  const filteredContacts = contacts.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm handleNewContact={handleNewContact} contacts={contacts} />
      <h2>Contacts</h2>

      <Filter onChange={handleFilter} value={filter} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </Container>
  );
};

export default App;
