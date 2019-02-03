import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./MenuColumn.scss";
import { updateSearchInputValue } from "../../actions/actions";

const SearchInput = ({ onChange, searchInputValue, disabled }) => {
  return (
    <input
      onChange={event => onChange(event.target.value)}
      value={searchInputValue}
      className="searchInput"
      type="text"
      placeholder="Search"
      disabled={disabled}
    />
  );
};
SearchInput.propTypes = {
  disabled: PropTypes.bool.isRequired,
  searchInputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    searchInputValue: state.searchInputValue
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: inputValue => {
      dispatch(updateSearchInputValue(inputValue));
    }
  };
};

const SearchInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);

export default SearchInputContainer;
