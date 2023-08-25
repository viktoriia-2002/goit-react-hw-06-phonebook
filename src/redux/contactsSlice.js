import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(payload) {
        return {
          payload: {
            name: payload.name,
            id: nanoid(),
            number: payload.number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const name = state.findIndex(contact => contact.name === action.payload);
      state.splice(name, 1);
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
