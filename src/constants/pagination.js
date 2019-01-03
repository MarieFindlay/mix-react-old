import { views } from "../actions/actions";

export const cocktailsPerPage = 15;

export const numberOfPages = (view, cocktails, shoppingList) => {
  if (view === views.CHOOSE_COCKTAILS) {
    return Math.floor(cocktails.length / cocktailsPerPage);
  } else if (shoppingList === null) {
    return 0;
  }
  return Math.floor(shoppingList.cocktails.length / cocktailsPerPage);
};

export const cocktailsOnCurrentPage = (currentPage, cocktails) => {
  const start = currentPage * cocktailsPerPage;
  const end = start + cocktailsPerPage;
  return cocktails.slice(start, end);
};
