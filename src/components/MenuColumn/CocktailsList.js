import React from "react";
import "./MenuColumn.scss";

import CocktailListItem from "./CocktailListItem";

const CocktailsList = props => {
  const cocktails = props.cocktails;
  const listItems = cocktails.map(cocktail => (
    <CocktailListItem
      key={cocktail.name}
      cocktail={cocktail}
      onCocktailClick={props.onCocktailClick}
    />
  ));
  return <ul className="cocktailList">{listItems}</ul>;
};

export default CocktailsList;
