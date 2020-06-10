import React from "react";
import propTypes from "prop-types";
import "./SearchField.css";

export const SearchField = ({ onInputChange, inputValue }) => {
  return (
    <label className="search-field__label" htmlFor="search">
      <i className="icon icon-search search-field__icon"></i>
      <span className="search-field__span">Search</span> 
      <input
        id="search"
        className="search-field__input"
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="comment, try `louis`"
      />
    </label>
  );
};

SearchField.propTypes = {
  inputValue: propTypes.string.isRequired,
  onInputChange: propTypes.func.isRequired,
};
