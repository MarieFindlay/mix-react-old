import React from "react";

const CocktailListItem = props => {
  return (
    <div>
      <li>{props.cocktailName}</li>
    </div>
  );
};

export default CocktailListItem;
