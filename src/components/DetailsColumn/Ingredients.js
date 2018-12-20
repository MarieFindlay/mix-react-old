import React from "react";

import "./DetailsColumn.scss";

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

const Ingredients = props => {
  const selectedCocktail = props.selectedCocktail;
  const ingredientsListItems = selectedCocktail.ingredients.map(
    (ingredient, index) => (
      <IngredientListItem key={index} ingredient={ingredient} />
    )
  );
  return (
    <div className="ingredientsContainer">
      <h3 className="ingredientsHeader">Ingredients</h3>
      <table>
        <tbody>{ingredientsListItems}</tbody>
      </table>
    </div>
  );
};

export default Ingredients;
