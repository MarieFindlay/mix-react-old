import React from "react";

import Instructions from "./Instructions";
import Ingredients from "./Ingredients";
import ServingsInputForm from "./ServingsInputForm";

import "./CocktailIsSelectedScreen.scss";

const CocktailIsSelectedScreen = props => {
  const selectedCocktail = props.selectedCocktail;
  return (
    <div className="selectedCocktailContainer">
      <h3>{selectedCocktail.name}</h3>
      <Ingredients selectedCocktail={selectedCocktail} />
      <Instructions selectedCocktail={selectedCocktail} />
      <ServingsInputForm />
    </div>
  );
};

export default CocktailIsSelectedScreen;
