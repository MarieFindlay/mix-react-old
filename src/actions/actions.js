/* Action Types */

export const actionTypes = {
  SELECT_VIEW: "SELECT_VIEW",
  UPDATE_CURRENT_PAGE: "UPDATE_CURRENT_PAGE",
  UPDATE_SEARCH_INPUT_VALUE: "UPDATE_SEARCH_INPUT_VALUE",
  SELECT_COCKTAIL: "SELECT_COCKTAIL",
  UPDATE_SERVINGS_INPUT_VALUE: "UPDATE_SERVINGS_INPUT_VALUE",
  ADD_TO_SHOPPING_LIST: "ADD_TO_SHOPPING_LIST"
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

export const updateServingsInputValue = inputValue => {
  return {
    type: actionTypes.UPDATE_SERVINGS_INPUT_VALUE,
    inputValue
  };
};

export const addToShoppingList = (servings, id) => {
  return {
    type: actionTypes.ADD_TO_SHOPPING_LIST,
    servings,
    id
  };
};
