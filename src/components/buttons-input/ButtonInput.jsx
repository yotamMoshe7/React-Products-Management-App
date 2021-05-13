import React from 'react';
import './ButtonInput.css';
import {
  SELECT_HIGHER_PRICE,
  SELECT_LAST_ADDED,
  SELECT_TITLE,
} from '../../utility/Constants';

export const ButtonInput = ({
  setAddButtonClick,
  setSearchField,
  setSelectSort,
}) => {
  const addButtonClick = () => {
    setAddButtonClick(true);
  };

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const selectChange = (event) => {
    setSelectSort(event.target.value);
  };

  return (
    <div className='buttons-input-wrapper'>
      <div className='add-button-wrapper' onClick={addButtonClick}>
        <button className='add-button'>Add +</button>
      </div>
      <div className='input-wrapper'>
        <input
          className='input'
          type='text'
          placeholder='Search Products'
          onChange={handleChange}
        />
      </div>
      <div className='sort-by-wrapper'>
        <select name='sort-options' className='sort-by' onChange={selectChange}>
          <option value={SELECT_LAST_ADDED}>{SELECT_LAST_ADDED}</option>
          <option value={SELECT_HIGHER_PRICE}>{SELECT_HIGHER_PRICE}</option>
          <option value={SELECT_TITLE}>{SELECT_TITLE}</option>
        </select>
      </div>
    </div>
  );
};
