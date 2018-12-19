import React from "react";

const CocktailsInShoppingListItem = props => {
  console.log(props.cocktail);
  return (
    <div>
      <li>{props.cocktail}</li>
    </div>
  );
};

const CocktailsInShoppingList = props => {
  const shoppingList = props.shoppingList;
  console.log(shoppingList);
  const listItems = shoppingList.cocktails.map((cocktail, index) => (
    <CocktailsInShoppingListItem key={index} cocktail={cocktail} />
  ));
  return <ul className="cocktailsInShoppingList">{listItems}</ul>;
};

export default CocktailsInShoppingList;
