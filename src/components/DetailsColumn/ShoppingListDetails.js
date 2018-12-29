import React from "react";

import CocktailsInShoppingList from "./CocktailsInShoppingList";
import ClearShoppingListButton from "./ClearShoppingListButton";
import Ingredients from "./Ingredients";

import "./DetailsColumn.scss";

const ShoppingListDetails = ({ shoppingList, onClearShoppingList }) => {
  if (shoppingList) {
    return (
      <div className="shoppingListContainer">
        <h2 className="shoppingListHeader">SHOPPING LIST</h2>
        <div className="shoppingListInnerContainer">
          <h3 className="shoppingListCocktailsHeader">TO MAKE</h3>
          <CocktailsInShoppingList shoppingList={shoppingList} />
          <Ingredients
            ingredients={shoppingList.ingredients}
            header={"YOU NEED"}
          />
          <ClearShoppingListButton onClearShoppingList={onClearShoppingList} />
        </div>
      </div>
    );
  }
  return (
    <p className="shoppingListEmptyText">
      You shopping list is empty! <br /> <br /> Choose your favourites from All
      Cocktails and add them to your list.
    </p>
  );
};

export default ShoppingListDetails;
