import React from "react";

const CocktailListItem = props => {
  return (
    <div>
      <li onClick={e => props.handleCocktailClick(props.cocktail)}>
        {props.cocktail.name}
      </li>
    </div>
  );
};

export default CocktailListItem;
