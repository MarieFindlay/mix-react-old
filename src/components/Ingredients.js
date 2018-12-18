import React from "react";

import IngredientListItem from "./IngredientListItem";

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
