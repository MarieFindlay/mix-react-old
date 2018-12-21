import React from "react";
import "./MenuColumn.scss";

const CocktailsList = ({ cocktails, onCocktailClick }) => {
  const listItems = cocktails.map(cocktail => (
    <CocktailListItem
      key={cocktail.name}
      cocktail={cocktail}
      onCocktailClick={onCocktailClick}
    />
  ));
  return <ul className="cocktailList">{listItems}</ul>;
};

const CocktailListItem = ({ cocktail, onCocktailClick }) => {
  return (
    <div>
      <li className="cocktailListItem" onClick={e => onCocktailClick(cocktail)}>
        {cocktail.name}
      </li>
    </div>
  );
};

export default CocktailsList;
