import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../FilterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onChangeInput = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  return (
    <>
      <label>
        Find contacts by name
        <br />
        <input
          className={css.inputContacts}
          onChange={onChangeInput}
          value={filter}
          type="text"
          name="filter"
        />
      </label>
    </>
  );
};
