import React from "react";

import MenuColumn from "./MenuColumn/MenuColumn";
import DetailsColumn from "./DetailsColumn/DetailsColumn";

import unsortedCocktails from "../cocktails.js";

import "./MainScreen.scss";

const convertCocktails = cocktails => {
  cocktails.forEach(cocktail => {
    cocktail.ingredients.forEach(ingredient => {
      if (ingredient.unit === "oz") {
        ingredient.amount = ingredient.amount * 30;
        ingredient.unit = "ml";
      }
    });
  });
};

const sortCocktails = cocktails => {
  return cocktails.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
};

const pluraliseCocktails = cocktails => {
  cocktails.forEach(cocktail => {
    cocktail.ingredients.forEach(ingredient => pluraliseIngredient(ingredient));
  });
};

const pluraliseIngredient = ingredient => {
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

const cocktails = sortCocktails(unsortedCocktails);
convertCocktails(cocktails);
pluraliseCocktails(cocktails);

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnView: 1,
      searchInputValue: "",
      filteredCocktails: cocktails,
      selectedCocktail: null,
      shoppingList: null,
      servingsValue: ""
    };
  }

  handleMenuOption1Click = () => {
    this.setState({ columnView: 1 });
  };

  handleMenuOption2Click = () => {
    this.setState({ columnView: 2 });
  };

  handleMenuOption3Click = () => {
    this.setState({ columnView: 3 });
  };

  handleSearchUpdate = event => {
    this.setState({
      filteredCocktails: cocktails.filter(cocktail => {
        return cocktail.name
          .toUpperCase()
          .startsWith(event.target.value.toUpperCase());
      })
    });
  };

  handleCocktailClick = cocktail => {
    this.setState({ selectedCocktail: cocktail });
  };

  handleServingsUpdate = event => {
    this.setState({ servingsValue: event.target.value });
  };

  handleServingsSubmit = event => {
    event.preventDefault();
    const shoppingList = this.state.shoppingList;
    const selectedCocktail = this.state.selectedCocktail;
    const servingsValue = this.state.servingsValue;
    if (servingsValue === "") {
      alert(
        "Enter the number of servings you want, then add to your shopping list"
      );
    } else {
      if (shoppingList === null) {
        const tempShoppingList = {
          ingredients: [],
          cocktails: []
        };
        selectedCocktail.ingredients.forEach(ingredient => {
          tempShoppingList.ingredients.push({
            name: ingredient.name,
            amount: servingsValue * ingredient.amount,
            unit: ingredient.unit
          });
        });
        tempShoppingList.cocktails.push({
          name: selectedCocktail.name,
          amount: servingsValue
        });
        tempShoppingList.ingredients.forEach(ingredient =>
          pluraliseIngredient(ingredient)
        );
        this.setState({ shoppingList: tempShoppingList });
        this.setState({ servingsValue: "" });
        alert("Added to shopping list!");
      } else {
        const tempShoppingListIngredients = this.state.shoppingList.ingredients.slice();
        let matchArray = [];
        selectedCocktail.ingredients.forEach(ingredientA => {
          tempShoppingListIngredients.forEach(ingredientB => {
            if (ingredientA.name === ingredientB.name) {
              ingredientB.amount += servingsValue * ingredientA.amount;
              matchArray.push(ingredientA.name);
            }
          });
        });
        selectedCocktail.ingredients.forEach(ingredient => {
          if (matchArray.indexOf(ingredient.name) === -1) {
            tempShoppingListIngredients.push({
              name: ingredient.name,
              amount: servingsValue * ingredient.amount,
              unit: ingredient.unit
            });
          }
        });
        const tempShoppingListCocktails = shoppingList.cocktails.slice();
        let matchArrayCocktails = [];
        tempShoppingListCocktails.forEach(cocktail => {
          if (cocktail.name === selectedCocktail.name) {
            cocktail.amount = Number(cocktail.amount) + Number(servingsValue);
            matchArrayCocktails.push(cocktail.name);
          }
        });
        if (matchArrayCocktails.indexOf(selectedCocktail.name) === -1) {
          tempShoppingListCocktails.push({
            name: selectedCocktail.name,
            amount: Number(servingsValue)
          });
        }
        const tempShoppingList = {
          ingredients: tempShoppingListIngredients,
          cocktails: tempShoppingListCocktails
        };
        tempShoppingList.ingredients.forEach(ingredient =>
          pluraliseIngredient(ingredient)
        );
        this.setState({ shoppingList: tempShoppingList });
        this.setState({ servingsValue: "" });
        alert("Added to shopping list!");
      }
    }
  };

  render() {
    const menuCocktails =
      this.state.columnView === 1 || this.state.shoppingList === null
        ? this.state.filteredCocktails
        : this.state.shoppingList.cocktails;
    return (
      <div className="mainScreenContainer">
        <div className="imgColumn" />
        <MenuColumn
          cocktails={menuCocktails}
          columnView={this.state.columnView}
          onSearchUpdate={this.handleSearchUpdate}
          selectedCocktail={this.selectedCocktail}
          onMenuOption1Click={this.handleMenuOption1Click}
          onMenuOption2Click={this.handleMenuOption2Click}
          onMenuOption3Click={this.handleMenuOption3Click}
          onCocktailClick={this.handleCocktailClick}
        />
        <DetailsColumn
          columnView={this.state.columnView}
          selectedCocktail={this.state.selectedCocktail}
          shoppingList={this.state.shoppingList}
          servingsValue={this.state.servingsValue}
          onServingsUpdate={this.handleServingsUpdate}
          onServingsSubmit={this.handleServingsSubmit}
        />
      </div>
    );
  }
}

export default MainScreen;
