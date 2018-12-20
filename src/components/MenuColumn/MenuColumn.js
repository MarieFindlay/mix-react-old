import React from "react";

import NavBar from "./NavBar";
import SearchInput from "./SearchInput";
import CocktailsList from "./CocktailsList";
import PreviousNextButton from "./PreviousNextButton";

import "./MenuColumn.scss";

const MenuColumn = props => {
  const cocktails = props.cocktails;
  if (props.columnView === 1) {
    return (
      <div className="cocktailsColumn">
        <NavBar
          handleMenuOption1Click={props.handleMenuOption1Click}
          handleMenuOption2Click={props.handleMenuOption2Click}
          handleMenuOption3Click={props.handleMenuOption3Click}
        />
        <SearchInput />
        <CocktailsList
          cocktails={cocktails}
          handleCocktailClick={props.handleCocktailClick}
        />
        <PreviousNextButton />
      </div>
    );
  } else if (props.columnView === 2) {
    return (
      <div className="cocktailsColumn">
        <NavBar
          handleMenuOption1Click={props.handleMenuOption1Click}
          handleMenuOption2Click={props.handleMenuOption2Click}
          handleMenuOption3Click={props.handleMenuOption3Click}
        />
      </div>
    );
  } else if (props.columnView === 3) {
    return (
      <div className="cocktailsColumn">
        <NavBar
          handleMenuOption1Click={props.handleMenuOption1Click}
          handleMenuOption2Click={props.handleMenuOption2Click}
          handleMenuOption3Click={props.handleMenuOption3Click}
        />
        <SearchInput />
        <CocktailsList
          cocktails={cocktails}
          handleCocktailClick={props.handleCocktailClick}
        />
        <PreviousNextButton />
      </div>
    );
  }
};

export default MenuColumn;
