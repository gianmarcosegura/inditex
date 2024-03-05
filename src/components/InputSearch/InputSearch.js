import React from 'react';
import './InputSearch.css';
import PropTypes from 'prop-types';

export const InputSearch = ({ count }) => {
  return (
    <div className="searchContent">
      <input className="inputSearch" placeholder="SEARCH A CHARACTER..."></input>
      <p className="inputResults">{count} RESULTS</p>
    </div>
  );
};

InputSearch.propTypes = {
  count: PropTypes.number
};
