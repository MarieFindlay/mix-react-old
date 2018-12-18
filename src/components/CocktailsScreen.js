import React from "react";

import CocktailsColumn from "./CocktailsColumn";
import CocktailDetails from "./CocktailDetails";

const CocktailsScreen = props => {
  const cocktails = props.cocktails;
  return (
    <div>
      <CocktailsColumn cocktails={cocktails} />
      <CocktailDetails selectedCocktail={cocktails[0]} />
    </div>
  );
};

export default CocktailsScreen;
