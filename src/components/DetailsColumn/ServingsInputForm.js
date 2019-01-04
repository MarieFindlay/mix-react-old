import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addToShoppingList,
  updateServingsInputValue
} from "../../actions/actions";

import "./DetailsColumn.scss";

const inputForm = ({ selectedCocktailId, onChange, inputValue, onClick }) => {
  return (
    <form className="servingsForm">
      <input
        className="servingsInput"
        type="number"
        placeholder="Servings"
        value={inputValue}
        onChange={e => onChange(parseInt(e.target.value))}
      />
      <button
        className={
          inputValue === 0
            ? "servingsSubmitButtonDisabled"
            : "servingsSubmitButton"
        }
        onClick={e => onClick(e, inputValue, selectedCocktailId)}
      >
        + ADD
      </button>
    </form>
  );
};
inputForm.propTypes = {
  selectedCocktailId: PropTypes.number
};

const mapStateToProps = (state, ownProps) => {
  return {
    selectedCocktailId: state.selectedCocktailId,
    inputValue: state.servingsInputValue
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: inputValue => {
      dispatch(updateServingsInputValue(inputValue));
    },
    onClick: (event, inputValue, selectedCocktailId) => {
      event.preventDefault();
      dispatch(addToShoppingList(inputValue, selectedCocktailId));
    }
  };
};

const inputFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(inputForm);

export default inputFormContainer;
