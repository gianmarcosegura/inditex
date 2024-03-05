import React from 'react';
import './InputSearch.css';
import PropTypes from 'prop-types';

export const InputSearch = ({ count, setSearchText }) => {
  return (
    <div className="searchContent">
      <input
        className="inputSearch"
        placeholder="SEARCH A CHARACTER..."
        onChange={({ nativeEvent }) => setSearchText(nativeEvent.target?.value)}></input>
      <p className="inputResults">{count} RESULTS</p>
    </div>
  );
};

InputSearch.propTypes = {
  count: PropTypes.number,
  setSearchText: PropTypes.any
};
