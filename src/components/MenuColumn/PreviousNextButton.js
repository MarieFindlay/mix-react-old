import React from "react";

import "./MenuColumn.scss";

const PreviousNextButton = ({
  onPrevButtonClick,
  onNextButtonClick,
  currentPage,
  numberOfPages
}) => {
  return (
    <div className="prevNextButtonContainer">
      <button
        onClick={onPrevButtonClick}
        className="prevButton"
        disabled={currentPage === 0 ? true : false}
      >
        PREV
      </button>
      <button
        onClick={onNextButtonClick}
        className="nextButton"
        disabled={currentPage === numberOfPages() ? true : false}
      >
        NEXT
      </button>
    </div>
  );
};

export default PreviousNextButton;
