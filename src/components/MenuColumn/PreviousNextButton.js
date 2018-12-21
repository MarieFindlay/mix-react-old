import React from "react";

import "./MenuColumn.scss";

const PreviousNextButton = () => {
  return (
    <div className="prevNextButtonContainer">
      <button className="prevButton">PREV</button>
      <button className="nextButton">NEXT</button>
    </div>
  );
};

export default PreviousNextButton;
