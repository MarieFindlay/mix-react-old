import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectView } from "../../actions/actions";

import { views } from "../../../src/actions/actions";

import "./MenuColumn.scss";

const navItems = [
  {
    view: views.CHOOSE_COCKTAILS,
    label: "CHOOSE"
  },
  {
    view: views.SHOPPING_LIST,
    label: "SHOP"
  },
  {
    view: views.SAVED_RECIPES,
    label: "MIX"
  }
];

const NavBar = ({ onClick, selectedView }) => {
  return (
    <div className="NavBarContainer">
      {navItems.map(({ view: itemView, label }) => {
        return (
          <h2
            key={label}
            onClick={() => onClick(itemView)}
            className={
              selectedView === itemView
                ? "navHeaderSelected"
                : "navHeaderUnselected"
            }
          >
            {label}
          </h2>
        );
      })}
    </div>
  );
};
NavBar.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedView: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    selectedView: state.selectedView
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
