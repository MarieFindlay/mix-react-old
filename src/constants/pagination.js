export const cocktailsPerPage = 15;

// todo: getNumberOfPages
export const numberOfPages = cocktails => {
  return Math.floor(cocktails.length / cocktailsPerPage);
};

// todo: getCocktails..
export const cocktailsOnCurrentPage = (currentPage, cocktails) => {
  const start = currentPage * cocktailsPerPage;
  const end = start + cocktailsPerPage;
  return cocktails.slice(start, end);
};
