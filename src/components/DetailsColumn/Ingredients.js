import React from "react";

import "./DetailsColumn.scss";

const Ingredients = props => {
  const ingredientsListItems = props.ingredients.map((ingredient, index) => (
    <IngredientListItem key={index} ingredient={ingredient} />
  ));
  return (
    <div className="ingredientsContainer">
      <h3 className="ingredientsHeader">{props.header}</h3>
      <table>
        <tbody>{ingredientsListItems}</tbody>
      </table>
    </div>
  );
};

const IngredientListItem = props => {
  const ingredient = props.ingredient;
  return (
    <tr className="ingredientTableRow">
      <td className="ingredientTableData">{ingredient.name}</td>
      <td className="ingredientTableData">
        {ingredient.amount + " " + ingredient.unit}
      </td>
    </tr>
  );
};

export default Ingredients;
