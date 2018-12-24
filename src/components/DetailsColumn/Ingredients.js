import React from "react";

import "./DetailsColumn.scss";

const Ingredients = ({ ingredients, header }) => {
  const ingredientsListItems = ingredients.map((ingredient, index) => (
    <IngredientListItem key={index} ingredient={ingredient} />
  ));
  return (
    <div className="ingredientsContainer">
      <h3 className="ingredientsHeader">{header}</h3>
      <table>
        <tbody>{ingredientsListItems}</tbody>
      </table>
    </div>
  );
};

const IngredientListItem = ({ ingredient }) => {
  return (
    <tr className="ingredientTableRow">
      <td className="ingredientNameData">{ingredient.name}</td>
      <td className="ingredientTableData">
        {ingredient.amount + " " + ingredient.unit}
      </td>
    </tr>
  );
};

export default Ingredients;
