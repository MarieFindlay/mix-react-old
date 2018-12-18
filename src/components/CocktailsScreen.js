import React from "react";

import CocktailsColumn from "./CocktailsColumn";
import CocktailDetails from "./CocktailDetails";

import "./CocktailsScreen.scss";

const CocktailsScreen = props => {
  const cocktails = props.cocktails;
  return (
    <div className="cocktailsScreenContainer">
      <CocktailsColumn cocktails={cocktails} />
      <CocktailDetails selectedCocktail={cocktails[0]} />
    </div>
  );
};

export default CocktailsScreen;
