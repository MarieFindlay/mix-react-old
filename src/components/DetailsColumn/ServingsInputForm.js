import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCocktailToShoppingList } from "../../actions/actions";

import "./DetailsColumn.scss";

class inputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }
  render() {
    const selectedItemId = this.props.selectedItemId;
    const inputValue = this.state.inputValue;
    const onClick = this.props.onClick;
    return (
      <form className="servingsForm">
        <input
          className="servingsInput"
          type="number"
          placeholder="Servings"
          value={inputValue}
          onChange={e =>
            this.setState({ inputValue: parseInt(e.target.value) })
          }
        />
        <button
          className={
            inputValue === 0
              ? "servingsSubmitButtonDisabled"
              : "servingsSubmitButton"
          }
          onClick={e => onClick(e, inputValue, selectedItemId)}
        >
          + ADD
        </button>
      </form>
    );
  }
}
inputForm.propTypes = {
  selectedItemId: PropTypes.number,
  inputValue: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    selectedItemId: state.selectedCocktailId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (event, inputValue, selectedItemId) => {
      event.preventDefault();
      dispatch(addCocktailToShoppingList(inputValue, selectedItemId));
      alert("Added to shopping list!");
    }
  };
};

const inputFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(inputForm);

export default inputFormContainer;
