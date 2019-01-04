import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./MenuColumn.scss";

import { numberOfPages } from "../../constants/pagination";
import { updateCurrentPage } from "../../actions/actions";

const PrevNextButton = ({ currentPage, view, cocktails, onClick }) => {
  return (
    <div className="prevNextButtonContainer">
      <button
        onClick={() => onClick(true)}
        className="prevButton"
        disabled={currentPage === 0}
      >
        PREV
      </button>
      <button
        onClick={() => onClick(false)}
        className="nextButton"
        disabled={currentPage === numberOfPages(cocktails)}
      >
        NEXT
      </button>
    </div>
  );
};
PrevNextButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentPage: state.currentPage,
    view: state.view
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: requestIsPrevious => {
      dispatch(updateCurrentPage(requestIsPrevious));
    }
  };
};

const prevNextButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PrevNextButton);

export default prevNextButtonContainer;
