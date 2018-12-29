import React from "react";
import "./MenuColumn.scss";

const CocktailsList = ({ selectedCocktail, cocktails, onCocktailClick }) => {
  const listItems = cocktails.map(cocktail => (
    <CocktailListItem
      key={cocktail.name}
      cocktail={cocktail}
      onCocktailClick={onCocktailClick}
      selectedCocktail={selectedCocktail}
    />
  ));
  return <ul className="cocktailList">{listItems}</ul>;
};

const CocktailListItem = ({ selectedCocktail, cocktail, onCocktailClick }) => {
  return (
    <div>
      <li
        className={
          selectedCocktail === cocktail
            ? "cocktailListItemSelected"
            : "cocktailListItemUnselected"
        }
        onClick={e => onCocktailClick(cocktail)}
      >
        {cocktail.name}
      </li>
    </div>
  );
};

export default CocktailsList;
