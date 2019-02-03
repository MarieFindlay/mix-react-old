/* Action Types */

export const actionTypes = {
  SELECT_VIEW: "SELECT_VIEW",
  UPDATE_CURRENT_PAGE: "UPDATE_CURRENT_PAGE",
  UPDATE_SEARCH_INPUT_VALUE: "UPDATE_SEARCH_INPUT_VALUE",
  SELECT_COCKTAIL: "SELECT_COCKTAIL",
  ADD_COCKTAIL_TO_SHOPPING_LIST: "ADD_COCKTAIL_TO_SHOPPING_LIST",
  CLEAR_SHOPPING_LIST: "CLEAR_SHOPPING_LIST"
};

/* Other Constants */

export const views = {
  CHOOSE_COCKTAILS: "CHOOSE_COCKTAILS",
  SHOPPING_LIST: "SHOPPING_LIST",
  SAVED_RECIPES: "SAVED_RECIPES"
};

/* Action Creators */

export const selectView = view => {
  return {
    type: actionTypes.SELECT_VIEW,
    view
  };
};

export const updateCurrentPage = requestIsPrevious => {
  return {
    type: actionTypes.UPDATE_CURRENT_PAGE,
    requestIsPrevious
  };
};

export const updateSearchInputValue = inputValue => {
  return {
    type: actionTypes.UPDATE_SEARCH_INPUT_VALUE,
    inputValue
  };
};

export const selectCocktail = id => {
  return {
    type: actionTypes.SELECT_COCKTAIL,
    id
  };
};

export const addCocktailToShoppingList = (servings, id) => {
  return {
    type: actionTypes.ADD_COCKTAIL_TO_SHOPPING_LIST,
    servings,
    id
  };
};

export const clearShoppingList = () => ({
  type: actionTypes.CLEAR_SHOPPING_LIST
});
