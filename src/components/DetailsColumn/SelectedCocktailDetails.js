import React from "react";

import Instructions from "./Instructions";
import Ingredients from "./Ingredients";
import ServingsInputForm from "./ServingsInputForm";

import "./DetailsColumn.scss";

import { initialCocktails } from "../../constants/cocktails";

const SelectedCocktailDetails = ({
  selectedCocktailId,
  servingsValue,
  onServingsUpdate,
  onServingsSubmit,
  columnView,
  shoppingList
}) => {
  if (selectedCocktailId) {
    const selectedCocktail = initialCocktails.find(
      cocktail => selectedCocktailId === cocktail.id
    );
    return (
      <div className="selectedCocktailContainer">
        <h2 className="selectedCocktailHeader">
          {selectedCocktail.name.toUpperCase()}
        </h2>
        <div className="selectedCocktailInnerContainer">
          <ServingsInputForm
            servingsValue={servingsValue}
            onServingsUpdate={onServingsUpdate}
            onServingsSubmit={onServingsSubmit}
          />
          <Ingredients
            selectedCocktail={selectedCocktail}
            ingredients={selectedCocktail.ingredients}
            header={"Ingredients"}
          />
          <Instructions selectedCocktail={selectedCocktail} />
        </div>
      </div>
    );
  } else if (columnView === 1) {
    return (
      <p className="noCocktailSelectedText">
        Welcome to Mix, your cocktail party pal.
        <br />
        <br />
        Choose a cocktail to view its recipe and add ingredients to your
        Shopping List.
        <br />
        <br />
        Visit Shop to view your Shopping List.
        <br />
        <br />
        Head to Mix to view your saved recipes and start mixing!
      </p>
    );
  } else if (shoppingList === null || shoppingList === []) {
    return (
      <p className="noCocktailSelectedText">
        First choose your cocktails, then view your saved recipes here.
      </p>
    );
  } else {
    return (
      <p className="noCocktailSelectedText">
        Select a cocktail to view its recipe.
      </p>
    );
  }
};

export default SelectedCocktailDetails;
