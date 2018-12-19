import React from "react";

const ShoppingListIngredientItem = props => {
  const item = props.item;
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.amount + " " + item.unit}</td>
    </tr>
  );
};

const IngredientsInShoppingList = props => {
  const shoppingList = props.shoppingList;
  const listItems = shoppingList.ingredients.map((item, index) => (
    <ShoppingListIngredientItem key={index} item={item} />
  ));
  return (
    <table>
      <tbody>{listItems}</tbody>
    </table>
  );
};

export default IngredientsInShoppingList;
