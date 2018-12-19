import React from "react";

import MenuColumn from "./MenuColumn/MenuColumn";
import DetailsColumn from "./DetailsColumn/DetailsColumn";

import cocktails from "../cocktails.js";
import shoppingList from "../shoppingList.js";

import "./MainScreen.scss";

const MainScreen = props => {
  console.log(shoppingList);
  return (
    <div className="mainScreenContainer">
      <div className="imgColumn" />
      <MenuColumn cocktails={cocktails} columnView={"chooseCocktails"} />
      <DetailsColumn
        selectedCocktail={cocktails[0]}
        shoppingList={shoppingList}
        columnView={"selectedCocktail"}
      />
    </div>
  );
};

export default MainScreen;
