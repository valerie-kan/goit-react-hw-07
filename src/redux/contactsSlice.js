import { createSlice } from "@reduxjs/toolkit";

import items from "../../contacts.json";

const initialState = {
  contacts: {
    items: items,
  },
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;

export const selectContacts = (state) => state.contactsList.contacts.items;
