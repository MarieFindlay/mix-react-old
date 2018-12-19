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

const Ingredients = props => {
  const selectedCocktail = props.selectedCocktail;
  const ingredientsListItems = selectedCocktail.ingredients.map(
    (ingredient, index) => (
      <IngredientListItem key={index} ingredient={ingredient} />
    )
  );
  return (
    <div>
      <h3>Ingredients</h3>
      <table>{ingredientsListItems}</table>
    </div>
  );
};

export default Ingredients;
