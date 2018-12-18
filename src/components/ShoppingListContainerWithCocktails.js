import React from "react";

import ShoppingList from "./ShoppingList";
import ClearShoppingListButton from "./ClearShoppingListButton";

const ShoppingListContainerWithCocktails = props => {
  return (
    <div>
      <ShoppingList />
      <ClearShoppingListButton />
    </div>
  );
};

export default ShoppingListContainerWithCocktails;
