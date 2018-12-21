import React from "react";

import NavBar from "./NavBar";
import SearchInput from "./SearchInput";
import CocktailsList from "./CocktailsList";
import PreviousNextButton from "./PreviousNextButton";

import "./MenuColumn.scss";

const MenuColumn = ({
  onMenuOption1Click,
  onMenuOption2Click,
  onMenuOption3Click,
  columnView,
  cocktails,
  onCocktailClick
}) => {
  return (
    <div className="cocktailsColumn">
      <NavBar
        onMenuOption1Click={onMenuOption1Click}
        onMenuOption2Click={onMenuOption2Click}
        onMenuOption3Click={onMenuOption3Click}
      />
      {(columnView === 1 || columnView === 3) && (
        <>
          <SearchInput />
          <CocktailsList
            cocktails={cocktails}
            onCocktailClick={onCocktailClick}
          />
          <PreviousNextButton />
        </>
      )}
    </div>
  );
};

export default MenuColumn;
