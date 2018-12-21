import React from "react";

import "./DetailsColumn.scss";

const CocktailsInShoppingList = props => {
  const listItems = props.shoppingList.cocktails.map((cocktail, index) => (
    <CocktailsInShoppingListItem key={index} cocktail={cocktail} />
  ));
  return <ul className="cocktailsInShoppingList">{listItems}</ul>;
};

const CocktailsInShoppingListItem = props => {
  console.log(props.cocktail);
  return (
    <div>
      <li>{props.cocktail}</li>
    </div>
  );
};

export default CocktailsInShoppingList;
