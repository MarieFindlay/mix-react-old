import React from "react";

import SearchInput from "./SearchInput";
import CocktailsList from "./CocktailsList";
import PreviousNextButton from "./PreviousNextButton";

const CocktailsColumn = props => {
  const cocktails = props.cocktails;
  return (
    <div>
      <SearchInput />
      <CocktailsList cocktails={cocktails} />
      <PreviousNextButton />
    </div>
  );
};

export default CocktailsColumn;
