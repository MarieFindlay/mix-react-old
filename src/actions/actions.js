/* Action Types */

export const SELECT_VIEW = "SELECT_VIEW";

/* Other Constants */

export const views = {
  CHOOSE_COCKTAILS: "CHOOSE_COCKTAILS",
  SHOPPING_LIST: "SHOPPING_LIST",
  SAVED_RECIPES: "SAVED_RECIPES"
};

/* Action Creators */

export function selectView(view) {
  return {
    type: SELECT_VIEW,
    view: view
  };
}
