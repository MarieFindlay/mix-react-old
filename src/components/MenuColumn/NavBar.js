import React from "react";
import PropTypes from "prop-types";
import { selectView } from "../../actions/actions";
import { connect } from "react-redux";

import "./MenuColumn.scss";

const NavMenu = ({ onClick, view, options }) => {
  return (
    <div className="NavBarContainer">
      <h2
        onClick={() => onClick(options[0])}
        className={
          view === options[0] ? "navHeaderSelected" : "navHeaderUnselected"
        }
      >
        CHOOSE
      </h2>
      <h2
        onClick={() => onClick(options[1])}
        className={
          view === options[1] ? "navHeaderSelected" : "navHeaderUnselected"
        }
      >
        SHOP
      </h2>
      <h2
        onClick={() => onClick(options[2])}
        className={
          view === options[2] ? "navHeaderSelected" : "navHeaderUnselected"
        }
      >
        MIX
      </h2>
    </div>
  );
};
NavMenu.propTypes = {
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

const NavBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavMenu);

export default NavBar;
