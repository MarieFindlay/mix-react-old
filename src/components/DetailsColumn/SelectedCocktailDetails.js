import React from "react";

import Instructions from "./Instructions";
import Ingredients from "./Ingredients";
import ServingsInputForm from "./ServingsInputForm";

import "./DetailsColumn.scss";

const SelectedCocktailDetails = ({
  selectedCocktail,
  servingsValue,
  onServingsUpdate,
  onServingsSubmit
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
            ingredients={selectedCocktail.ingredients}
            header={"Ingredients"}
          />
          <Instructions selectedCocktail={selectedCocktail} />
        </div>
      </div>
    );
  }
  return (
    <p className="noCocktailSelectedText">
      Select a cocktail to view its recipe and start adding ingredients to your
      shopping list!
    </p>
  );
};

export default SelectedCocktailDetails;
