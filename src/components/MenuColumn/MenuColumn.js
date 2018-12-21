import React from "react";

import NavBar from "./NavBar";
import SearchInput from "./SearchInput";
import CocktailsList from "./CocktailsList";
import PreviousNextButton from "./PreviousNextButton";

import "./MenuColumn.scss";

const MenuColumn = props => {
  return (
    <div className="cocktailsColumn">
      <NavBar
        onMenuOption1Click={props.onMenuOption1Click}
        onMenuOption2Click={props.onMenuOption2Click}
        onMenuOption3Click={props.onMenuOption3Click}
      />
      {(props.columnView === 1 || props.columnView === 3) && (
        <>
          <SearchInput />
          <CocktailsList
            cocktails={props.cocktails}
            onCocktailClick={props.onCocktailClick}
          />
          <PreviousNextButton />
        </>
      )}
    </div>
  );
};

export default MenuColumn;
