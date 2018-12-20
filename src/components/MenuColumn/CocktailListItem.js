import React from "react";

const CocktailListItem = props => {
  return (
    <div>
      <li onClick={e => props.onCocktailClick(props.cocktail)}>
        {props.cocktail.name}
      </li>
    </div>
  );
};

export default CocktailListItem;
