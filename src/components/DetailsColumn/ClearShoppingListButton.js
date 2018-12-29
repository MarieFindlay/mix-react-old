import React from "react";

import "./DetailsColumn.scss";

const ClearShoppingListButton = ({ onClearShoppingList }) => {
  return (
    <button onClick={onClearShoppingList} className="clearShoppingListButton">
      CLEAR LIST
    </button>
  );
};

export default ClearShoppingListButton;
