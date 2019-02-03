import { combineReducers } from "redux";

import { views, actionTypes } from "../actions/actions";

const selectedView = (state = views.CHOOSE_COCKTAILS, action) => {
  switch (action.type) {
    case actionTypes.SELECT_VIEW:
      return action.view;
    default:
      return state;
  }
};

const currentPage = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CURRENT_PAGE:
      return action.requestIsPrevious ? state - 1 : state + 1;
    default:
      return state;
  }
};

const searchInputValue = (state = "", action) => {
  switch (action.type) {
    case actionTypes.UPDATE_SEARCH_INPUT_VALUE:
      return action.inputValue;
    default:
      return state;
  }
};

const selectedCocktailId = (state = null, action) => {
  switch (action.type) {
    case actionTypes.SELECT_COCKTAIL:
      return action.id;
    case actionTypes.SELECT_VIEW:
      return null;
    default:
      return state;
  }
};

const shoppingList = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_COCKTAIL_TO_SHOPPING_LIST:
      if (action.servings !== 0) {
        if (state.hasOwnProperty(action.id)) {
          return {
            ...state,
            [action.id]: state[action.id] + action.servings
          };
        } else {
          return {
            ...state,
            [action.id]: action.servings
          };
        }
      }
      return state;
    case actionTypes.CLEAR_SHOPPING_LIST:
      return {};
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  selectedView,
  currentPage,
  searchInputValue,
  selectedCocktailId,
  shoppingList
});

export default rootReducer;
