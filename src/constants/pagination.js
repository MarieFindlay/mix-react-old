export const cocktailsPerPage = 15;

export const numberOfPages = cocktails => {
  return Math.floor(cocktails.length / cocktailsPerPage);
};

export const cocktailsOnCurrentPage = (currentPage, cocktails) => {
  const start = currentPage * cocktailsPerPage;
  const end = start + cocktailsPerPage;
  return cocktails.slice(start, end);
};
