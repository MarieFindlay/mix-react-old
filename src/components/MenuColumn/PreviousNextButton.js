import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./MenuColumn.scss";

import { updateCurrentPage } from "../../actions/actions";

const PrevNextButton = ({
  currentPage,
  selectedView,
  numberOfPages,
  onClick
}) => {
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
        disabled={currentPage === numberOfPages}
      >
        NEXT
      </button>
    </div>
  );
};
PrevNextButton.propTypes = {
  currentPage: PropTypes.number.isRequired,
  selectedView: PropTypes.object.isRequired,
  numberOfPages: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentPage: state.currentPage,
    selectedView: state.selectedView
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
