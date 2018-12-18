import React from "react";

import CocktailsScreen from "./CocktailsScreen";
import ShoppingListScreen from "./ShoppingListScreen";

import cocktails from "../cocktails.js";
import shoppingList from "../shoppingList.js";

const MainContentContainer = props => {
  return (
    <div>
      <CocktailsScreen cocktails={cocktails} />
      <ShoppingListScreen shoppingList={shoppingList} />
    </div>
  );
};

export default MainContentContainer;
