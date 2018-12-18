import React from "react";
import "./CocktailsList.scss";

import CocktailListItem from "./CocktailListItem";

const CocktailsList = props => {
  const cocktails = props.cocktails;
  const listItems = cocktails.map(cocktail => (
    <CocktailListItem key={cocktail.name} cocktail={cocktail} />
  ));
  return <ul className="cocktailList">{listItems}</ul>;
};

export default CocktailsList;
