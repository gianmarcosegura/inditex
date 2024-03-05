import React from 'react';
import './InputSearch.css';

export const InputSearch = () => {
  return (
    <div className="searchContent">
      <input className="inputSearch" placeholder="SEARCH A CHARACTER..."></input>
      <p className="inputResults">40 RESULTS</p>
    </div>
  );
};
