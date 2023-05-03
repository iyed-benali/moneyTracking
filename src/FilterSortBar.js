import React from 'react';


function FilterSortBar({ filterOption, sortOption, onFilterChange, onSortChange }) {
  return (
    <div className="filter-sort-bar">
      <label>
        Filter by description:
        <input type="text" value={filterOption} onChange={onFilterChange} />
      </label>
      <br />
      <label>
        Sort by:
        <select value={sortOption} onChange={onSortChange}>
          <option value="">None</option>
          <option value="amount">Amount</option>
          <option value="date">Date</option>
        </select>
      </label>
    </div>
  );
}

export default FilterSortBar;
