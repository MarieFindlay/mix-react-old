import React from "react";

import CocktailListItem from "./CocktailListItem";

const CocktailsList = props => {
  const cocktails = props.cocktails;
  console.log(cocktails);
  const listItems = cocktails.map(cocktail => (
    <CocktailListItem key={cocktail.name} cocktail={cocktail} />
  ));
  return <ul>{listItems}</ul>;
};

export default CocktailsList;
