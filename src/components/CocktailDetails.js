import React from "react";

import NoCocktailSelectedScreen from "./NoCocktailSelectedScreen";
import CocktailIsSelectedScreen from "./CocktailIsSelectedScreen";

import "./CocktailDetails.scss";

const CocktailDetails = props => {
  const selectedCocktail = props.selectedCocktail;
  if (selectedCocktail) {
    return <CocktailIsSelectedScreen selectedCocktail={selectedCocktail} />;
  }
  return <NoCocktailSelectedScreen />;
};

export default CocktailDetails;
