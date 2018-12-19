import React from "react";

import Instructions from "./Instructions";
import Ingredients from "./Ingredients";
import ServingsInputForm from "./ServingsInputForm";

const SelectedCocktailDetails = props => {
  const selectedCocktail = props.selectedCocktail;
  if (selectedCocktail) {
    return (
      <div className="selectedCocktailContainer">
        <h2>{selectedCocktail.name.toUpperCase()}</h2>
        <ServingsInputForm />
        <Ingredients selectedCocktail={selectedCocktail} />
        <Instructions selectedCocktail={selectedCocktail} />
      </div>
    );
  }
  return (
    <p>
      Select a cocktail to view its recipe and start adding ingredients to your
      shopping list!
    </p>
  );
};

export default SelectedCocktailDetails;
