export const convertCocktails = cocktails => {
  const convertedCocktails = cocktails.slice();
  convertedCocktails.forEach(cocktail => {
    cocktail.ingredients.forEach(ingredient => {
      if (ingredient.unit === "oz") {
        ingredient.amount = ingredient.amount * 30;
        ingredient.unit = "ml";
      }
    });
  });
  return convertedCocktails;
};

export const pluraliseCocktails = cocktails => {
  const pluralisedCocktails = cocktails.slice();
  pluralisedCocktails.forEach(cocktail => {
    cocktail.ingredients.forEach(ingredient => pluraliseIngredient(ingredient));
  });
  return pluralisedCocktails;
};

export const pluraliseIngredient = ingredient => {
  if (
    ["twist", "lime", "tsp", "cube", "lemon", "slice", "drop"].includes(
      ingredient.unit
    )
  ) {
    if (ingredient.amount !== 1) {
      ingredient.unit = `${ingredient.unit}s`;
    }
  } else if (["dash"].includes(ingredient.unit)) {
    if (ingredient.amount !== 1) {
      ingredient.unit = `${ingredient.unit}es`;
    }
  } else if (ingredient.unit === "cherry") {
    if (ingredient.amount !== 1) {
      ingredient.unit = "cherries";
    }
  } else if (ingredient.unit === "leaf") {
    if (ingredient.amount !== 1) {
      ingredient.unit = "leaves";
    }
  }
};

export const sortAlpha = items => {
  return items.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
};

export const filterCocktails = (cocktails, searchInputValue) => {
  return cocktails.filter(cocktail => {
    return cocktail.name
      .toUpperCase()
      .startsWith(searchInputValue.toUpperCase());
  });
};

export const initialiseShoppingListProperty = cocktails => {
  return cocktails.map(cocktail => {
    return {
      ...cocktail,
      quantityInShoppingList: 0
    };
  });
};

export const calculateShoppingListCocktails = (allCocktails, shoppingList) => {
  return allCocktails.filter(cocktail =>
    shoppingList.hasOwnProperty(cocktail.id)
  );
};
