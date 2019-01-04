import React from "react";

import "./DetailsColumn.scss";

const CocktailsInShoppingList = ({ cocktailsInShoppingList }) => {
  const listItems = cocktailsInShoppingList.map(
    (cocktailQuantityPair, index) => (
      <CocktailsInShoppingListItem
        key={index}
        cocktailQuantityPair={cocktailQuantityPair}
      />
    )
  );
  return <ul className="cocktailsInShoppingList">{listItems}</ul>;
};

const CocktailsInShoppingListItem = ({ cocktailQuantityPair }) => {
  return (
    <div>
      <li>{cocktailQuantityPair[1] + " x " + cocktailQuantityPair[0].name}</li>
    </div>
  );
};

export default CocktailsInShoppingList;
