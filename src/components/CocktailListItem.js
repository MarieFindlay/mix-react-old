import React from "react";

const CocktailListItem = props => {
  return (
    <div>
      <li>{props.cocktail.name}</li>
    </div>
  );
};

export default CocktailListItem;
