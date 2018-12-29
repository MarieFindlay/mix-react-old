import React from "react";

import SelectedCocktailDetails from "./SelectedCocktailDetails";
import ShoppingListDetails from "./ShoppingListDetails";

import "./DetailsColumn.scss";

const DetailsColumn = ({
  columnView,
  shoppingList,
  selectedCocktail,
  servingsValue,
  onServingsUpdate,
  onServingsSubmit,
  onClearShoppingList
}) => {
  return columnView === 2 ? (
    <div className="detailsColumn">
      <ShoppingListDetails
        shoppingList={shoppingList}
        onClearShoppingList={onClearShoppingList}
      />
    </div>
  ) : (
    <div className="detailsColumn">
      <SelectedCocktailDetails
        selectedCocktail={selectedCocktail}
        servingsValue={servingsValue}
        onServingsUpdate={onServingsUpdate}
        onServingsSubmit={onServingsSubmit}
        columnView={columnView}
        shoppingList={shoppingList}
      />
    </div>
  );
};

export default DetailsColumn;
