import React from "react";

import NoCocktailSelectedScreen from "./NoCocktailSelectedScreen";
import CocktailIsSelectedScreen from "./CocktailIsSelectedScreen";

const CocktailDetails = props => {
  const selectedCocktail = props.selectedCocktail;
  return (
    <div>
      <NoCocktailSelectedScreen />
      <CocktailIsSelectedScreen selectedCocktail={selectedCocktail} />
    </div>
  );
};

export default CocktailDetails;
