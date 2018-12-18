import React from "react";

import ShoppingListItem from "./ShoppingListItem";

const ShoppingList = props => {
  const shoppingList = props.shoppingList;
  const listItems = shoppingList.map((item, index) => (
    <ShoppingListItem key={index} item={item} />
  ));
  return <table>{listItems}</table>;
};

export default ShoppingList;
