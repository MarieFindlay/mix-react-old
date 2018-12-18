import React from "react";

const IngredientListItem = props => {
  const ingredient = props.ingredient;
  return (
    <tr>
      <td>{ingredient.name}</td>
      <td>{ingredient.amount + " " + ingredient.unit}</td>
    </tr>
  );
};

export default IngredientListItem;
