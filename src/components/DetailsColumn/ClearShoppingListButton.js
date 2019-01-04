import React from "react";

import "./DetailsColumn.scss";

const ClearShoppingListButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="clearShoppingListButton">
      CLEAR LIST
    </button>
  );
};

export default ClearShoppingListButton;
