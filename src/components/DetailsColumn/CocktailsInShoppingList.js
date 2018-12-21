import React from "react";

import "./DetailsColumn.scss";

const CocktailsInShoppingList = ({ shoppingList }) => {
  const listItems = shoppingList.cocktails.map((cocktail, index) => (
    <CocktailsInShoppingListItem key={index} cocktail={cocktail} />
  ));
  return <ul className="cocktailsInShoppingList">{listItems}</ul>;
};

const CocktailsInShoppingListItem = ({ cocktail }) => {
  return (
    <div>
      <li>{cocktail.amount + " x " + cocktail.name}</li>
    </div>
  );
};

export default CocktailsInShoppingList;
