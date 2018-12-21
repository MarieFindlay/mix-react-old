import React from "react";
import "./MenuColumn.scss";

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

const CocktailListItem = props => {
  return (
    <div>
      <li onClick={e => props.onCocktailClick(props.cocktail)}>
        {props.cocktail.name}
      </li>
    </div>
  );
};

export default CocktailsList;
