import React from "react";

import EmptyShoppingList from "./EmptyShoppingList";
import ShoppingListContainerWithCocktails from "./ShoppingListContainerWithCocktails";

const ShoppingListScreen = props => {
  const shoppingList = props.shoppingList;
  if (shoppingList) {
    return <ShoppingListContainerWithCocktails shoppingList={shoppingList} />;
  }
  return <EmptyShoppingList />;
};

export default ShoppingListScreen;
