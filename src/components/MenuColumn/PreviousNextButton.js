import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./MenuColumn.scss";

import { numberOfPages } from "../../constants/pagination";
import { updateCurrentPage } from "../../actions/actions";
import { initialCocktails } from "../../constants/cocktails";

const PrevNextButton = ({
  currentPage,
  shoppingList,
  view,
  cocktails,
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
        disabled={currentPage === numberOfPages(view, cocktails, shoppingList)}
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
    view: state.view,
    cocktails: initialCocktails
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
