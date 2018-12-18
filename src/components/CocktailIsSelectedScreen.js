import React from "react";

import Instructions from "./Instructions";
import Ingredients from "./Ingredients";
import ServingsInputForm from "./ServingsInputForm";

const CocktailIsSelectedScreen = props => {
  const selectedCocktail = props.selectedCocktail;
  return (
    <div>
      <h3>{selectedCocktail.name}</h3>
      <Instructions selectedCocktail={selectedCocktail} />
      <Ingredients selectedCocktail={selectedCocktail} />
      <ServingsInputForm />
    </div>
  );
};

export default CocktailIsSelectedScreen;
