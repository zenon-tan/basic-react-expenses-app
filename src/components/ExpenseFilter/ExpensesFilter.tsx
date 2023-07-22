import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props: any) => {

  const selectYearHandler = (event: any) => {
    props.onSelectYear(event.target.value)
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        {/* Two way binding: onChange passes data to parent, 
        value will receive the selected year from parent */}
        <select onChange={selectYearHandler} value = {props.selected}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;