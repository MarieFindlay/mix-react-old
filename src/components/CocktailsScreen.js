import React from "react";

import CocktailsColumn from "./CocktailsColumn";
import CocktailDetails from "./CocktailDetails";

const CocktailsScreen = props => {
  return (
    <div>
      <CocktailsColumn />
      <CocktailDetails />
    </div>
  );
};

export default CocktailsScreen;
