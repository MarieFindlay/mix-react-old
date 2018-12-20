import React from "react";

import "./DetailsColumn.scss";

const ShoppingListIngredientItem = props => {
  const item = props.item;
  return (
    <tr className="shoppingListIngredientTableRow">
      <td className="shoppingListIngredientItem">{item.name}</td>
      <td className="shoppingListIngredientAmount">
        {item.amount + " " + item.unit}
      </td>
    </tr>
  );
};

const IngredientsInShoppingList = props => {
  const shoppingList = props.shoppingList;
  const listItems = shoppingList.ingredients.map((item, index) => (
    <ShoppingListIngredientItem key={index} item={item} />
  ));
  return (
    <table className="shoppingListIngredientsTable">
      <tbody>{listItems}</tbody>
    </table>
  );
};

export default IngredientsInShoppingList;
