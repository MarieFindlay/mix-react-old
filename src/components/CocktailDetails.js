import React from "react";

import NoCocktailSelectedScreen from "./NoCocktailSelectedScreen";
import CocktailIsSelectedScreen from "./CocktailIsSelectedScreen";

const CocktailDetails = props => {
  return (
    <div>
      <NoCocktailSelectedScreen />
      <CocktailIsSelectedScreen />
    </div>
  );
};

export default CocktailDetails;
