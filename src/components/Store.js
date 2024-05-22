import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './ContactsSlice';
import filterReducer from './FilterSlice';

const Store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default Store;