import React from 'react';
import { useDispatch } from 'react-redux';
import { resetContacts } from '../ContactsSlice';
import css from './ResetButton.module.css';

export const ResetButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(resetContacts())}
      className={css.resetButton}
    >
      Reset Contacts
    </button>
  );
};
