import React from "react";

import NavBar from "./NavBar";
import SearchInput from "./SearchInput";
import CocktailsList from "./CocktailsList";
import PreviousNextButton from "./PreviousNextButton";

import "./CocktailsColumn.scss";

const CocktailsColumn = props => {
  const cocktails = props.cocktails;
  return (
    <div className="cocktailsColumn">
      <NavBar />
      <SearchInput />
      <CocktailsList cocktails={cocktails} />
      <PreviousNextButton />
    </div>
  );
};

export default CocktailsColumn;
