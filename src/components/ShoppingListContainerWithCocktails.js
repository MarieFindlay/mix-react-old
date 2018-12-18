import React from "react";

import ShoppingList from "./ShoppingList";
import ClearShoppingListButton from "./ClearShoppingListButton";

const ShoppingListContainerWithCocktails = props => {
  const shoppingList = props.shoppingList;
  return (
    <div>
      <ShoppingList shoppingList={shoppingList} />
      <ClearShoppingListButton />
    </div>
  );
};

export default ShoppingListContainerWithCocktails;
