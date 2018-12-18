import React from "react";

import SearchInput from "./SearchInput";
import CocktailsList from "./CocktailsList";
import PreviousNextButton from "./PreviousNextButton";

const CocktailsColumn = props => {
  return (
    <div>
      <SearchInput />
      <CocktailsList />
      <PreviousNextButton />
    </div>
  );
};

export default CocktailsColumn;
