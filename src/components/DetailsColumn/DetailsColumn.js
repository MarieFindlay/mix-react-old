import React from "react";

import SelectedCocktailDetails from "./SelectedCocktailDetails";
import ShoppingListDetails from "./ShoppingListDetails";

import "./DetailsColumn.scss";

const DetailsColumn = props => {
  console.log(props.columnView, props.shoppingList);
  const selectedCocktail = props.selectedCocktail;
  const shoppingList = props.shoppingList;
  if (props.columnView === "chooseCocktails") {
    return (
      <div className="detailsColumn">
        <SelectedCocktailDetails selectedCocktail={selectedCocktail} />
      </div>
    );
  } else if (props.columnView === "shoppingList") {
    return (
      <div className="detailsColumn">
        <ShoppingListDetails shoppingList={shoppingList} />
      </div>
    );
  }
  return (
    <div className="detailsColumn">
      <SelectedCocktailDetails selectedCocktail={selectedCocktail} />
    </div>
  );
};

export default DetailsColumn;
