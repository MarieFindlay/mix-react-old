import React from "react";

import EmptyShoppingList from "./EmptyShoppingList";
import ShoppingListContainerWithCocktails from "./ShoppingListContainerWithCocktails";

const ShoppingListScreen = props => {
  return (
    <div>
      <EmptyShoppingList />
      <ShoppingListContainerWithCocktails />
    </div>
  );
};

export default ShoppingListScreen;
