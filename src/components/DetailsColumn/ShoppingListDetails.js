import React from "react";

import CocktailsInShoppingList from "./CocktailsInShoppingList";
import InrgedientsInShoppingList from "./IngredientsInShoppingList";
import ClearShoppingListButton from "./ClearShoppingListButton";

const ShoppingListDetails = props => {
  const shoppingList = props.shoppingList;
  if (shoppingList) {
    return (
      <div>
        <h2>SHOPPING LIST</h2>
        <h3>TO MAKE</h3>
        <CocktailsInShoppingList shoppingList={shoppingList} />
        <h3>YOU NEED</h3>
        <InrgedientsInShoppingList shoppingList={shoppingList} />
        <ClearShoppingListButton />
      </div>
    );
  }
  return (
    <p>You shopping list is empty! Choose cocktails to add them to your list</p>
  );
};

export default ShoppingListDetails;
