import React from "react";

import Instructions from "./Instructions";
import Ingredients from "./Ingredients";
import ServingsInputForm from "./ServingsInputForm";

import "./DetailsColumn.scss";

const SelectedCocktailDetails = ({
  selectedCocktail,
  servingsValue,
  onServingsUpdate,
  onServingsSubmit,
  columnView,
  shoppingList
}) => {
  if (selectedCocktail) {
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
        Choose a cocktail to view its recipe and add ingredients to your
        Shopping List.
        <br />
        <br />
        When you're ready to mix, head to My Cocktails to view your saved
        recipes!
      </p>
    );
  } else if (shoppingList === null || shoppingList === []) {
    return (
      <p className="noCocktailSelectedText">
        Add your favourites from All Cocktails, then view your instructions
        here.
      </p>
    );
  } else {
    return (
      <p className="noCocktailSelectedText">
        Select a cocktail to view your instructions.
      </p>
    );
  }
};

export default SelectedCocktailDetails;
