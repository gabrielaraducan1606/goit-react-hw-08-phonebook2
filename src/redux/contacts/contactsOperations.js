import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetch', async () => {
  const { data } = await axios.get('/contacts');
  return data;
});

export const addContact = createAsyncThunk('contacts/add', async (contact) => {
  const { data } = await axios.post('/contacts', contact);
  return data;
});

export const deleteContact = createAsyncThunk('contacts/delete', async (id) => {
  await axios.delete(`/contacts/${id}`);
  return id;
});

export const updateContact = createAsyncThunk('contacts/update', async ({ id, contact }) => {
  const { data } = await axios.patch(`/contacts/${id}`, contact);
  return data;
});
