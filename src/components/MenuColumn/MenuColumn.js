import React from "react";

import NavBar from "./NavBar";
import SearchInput from "./SearchInput";
import CocktailsList from "./CocktailsList";
import PreviousNextButton from "./PreviousNextButton";

import "./MenuColumn.scss";

const MenuColumn = props => {
  const cocktails = props.cocktails;
  if (props.columnView === "chooseCocktails") {
    return (
      <div className="cocktailsColumn">
        <NavBar />
        <SearchInput />
        <CocktailsList cocktails={cocktails} />
        <PreviousNextButton />
      </div>
    );
  } else if (props.columnView === "shoppingList") {
    return (
      <div className="cocktailsColumn">
        <NavBar />
      </div>
    );
  }
  return (
    <div className="cocktailsColumn">
      <NavBar />
      <SearchInput />
      <CocktailsList cocktails={cocktails} />
      <PreviousNextButton />
    </div>
  );
};

export default MenuColumn;
