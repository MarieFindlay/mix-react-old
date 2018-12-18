import React from "react";

import CocktailsScreen from "./CocktailsScreen";
import ShoppingListScreen from "./ShoppingListScreen";

import cocktails from "../cocktails.js";
import shoppingList from "../shoppingList.js";

const MainContentContainer = props => {
  if (props.cocktailsScreenSelected) {
    return <CocktailsScreen cocktails={cocktails} />;
  }
  return <ShoppingListScreen shoppingList={shoppingList} />;
};

export default MainContentContainer;
