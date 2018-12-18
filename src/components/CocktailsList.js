import React from "react";

import CocktailListItem from "./CocktailListItem";

const CocktailsList = props => {
  return (
    <ul>
      <CocktailListItem />
      <CocktailListItem />
    </ul>
  );
};

export default CocktailsList;
