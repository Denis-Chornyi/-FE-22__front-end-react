import React from 'react';

const Filter = ({ filterText, count, onChange }) => (
  <div className="filter">
    <input type="text" className="filter__input" value={filterText} onChange={onChange} />
    <span className="filter__count">{count}</span>
  </div>
);

export default Filter;
