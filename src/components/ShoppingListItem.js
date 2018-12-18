import React from "react";

const ShoppingListItem = props => {
  const item = props.item;
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.amount + " " + item.unit}</td>
    </tr>
  );
};

export default ShoppingListItem;
