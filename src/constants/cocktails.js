import rawCocktails from "./rawCocktails";

import {
  pluraliseCocktails,
  sortAlpha,
  convertCocktails,
  initialiseShoppingListProperty
} from "./../functions/functions";

export const initialCocktails = initialiseShoppingListProperty(
  convertCocktails(pluraliseCocktails(sortAlpha(rawCocktails)))
);
