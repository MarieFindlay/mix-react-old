import React from "react";

import Instructions from "./Instructions";
import Ingredients from "./Ingredients";
import ServingsInputForm from "./ServingsInputForm";

import "./DetailsColumn.scss";

import { initialCocktails } from "../../constants/cocktails";

import { views } from "../../actions/actions";

const SelectedCocktailDetails = ({
  selectedCocktailId,
  selectedView,
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
          <ServingsInputForm />
          <Ingredients
            ingredients={selectedCocktail.ingredients}
            header={"Ingredients"}
          />
          <Instructions
            selectedCocktail={selectedCocktail}
            header={"Instructions"}
          />
        </div>
      </div>
    );
  } else if (selectedView === views.CHOOSE_COCKTAILS) {
    return (
      <p className="noCocktailSelectedText">
        Welcome to Mix, your cocktail party planner.
        <br />
        <br />
        To start, choose your cocktails and add ingredients to your shopping
        list.
        <br />
        <br />
        Go to Shop to view your shopping list.
        <br />
        <br />
        Then head to Mix to view saved recipes and start making your cocktails!
      </p>
    );
  } else if (Object.keys(shoppingList).length === 0) {
    return (
      <p className="noCocktailSelectedText">
        First choose your cocktails, then view your saved recipes here.
      </p>
    );
  } else {
    return (
      <p className="noCocktailSelectedText">
        Select one of your saved cocktails to view its recipe.
      </p>
    );
  }
};

export default SelectedCocktailDetails;
