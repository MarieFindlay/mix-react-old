import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToShoppingList } from "../../actions/actions";

import "./DetailsColumn.scss";

class inputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <form className="servingsForm">
        <input
          className="servingsInput"
          type="number"
          placeholder="Servings"
          value={this.state.value}
          onChange={this.onChange}
        />
        <button
          className={
            this.props.servingsValue === 0
              ? "servingsSubmitButtonDisabled"
              : "servingsSubmitButton"
          }
          onClick={this.props.onClick(
            this.props.selectedCocktailId,
            this.state.value
          )}
        >
          + ADD
        </button>
      </form>
    );
  }
}
inputForm.propTypes = {
  selectedCocktailId: PropTypes.number,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return { selectedCocktailId: state.selectedCocktailId };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (id, value) => {
      dispatch(addToShoppingList(id, value));
    }
  };
};

const inputFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(inputForm);

export default inputFormContainer;
