import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectView } from "../../actions/actions";

import { views } from "../../../src/actions/actions";
import { navBarHeaders } from "../../constants/menuText";

import "./MenuColumn.scss";

const NavBar = ({ onClick, view }) => {
  const options = [
    views.CHOOSE_COCKTAILS,
    views.SHOPPING_LIST,
    views.SAVED_RECIPES
  ];
  return (
    <div className="NavBarContainer">
      <h2
        onClick={() => onClick(options[0])}
        className={
          view === options[0] ? "navHeaderSelected" : "navHeaderUnselected"
        }
      >
        {navBarHeaders[0]}
      </h2>
      <h2
        onClick={() => onClick(options[1])}
        className={
          view === options[1] ? "navHeaderSelected" : "navHeaderUnselected"
        }
      >
        {navBarHeaders[1]}
      </h2>
      <h2
        onClick={() => onClick(options[2])}
        className={
          view === options[2] ? "navHeaderSelected" : "navHeaderUnselected"
        }
      >
        {navBarHeaders[2]}
      </h2>
    </div>
  );
};
NavBar.propTypes = {
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    view: state.view
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: option => {
      dispatch(selectView(option));
    }
  };
};

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

export default NavBarContainer;
