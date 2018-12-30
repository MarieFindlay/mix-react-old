import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { views } from "../actions/actions";

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

const sortAlpha = items => {
  return items.sort((a, b) => {
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

const cocktails = sortAlpha(unsortedCocktails);
convertCocktails(cocktails);
pluraliseCocktails(cocktails);

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnView: 1,
      searchInputValue: "",
      filteredCocktails: cocktails,
      currentPage: 0,
      selectedCocktail: null,
      shoppingList: null,
      servingsValue: "",
      cocktailsPerPage: 15
    };
  }

  handleMenuOption1Click = () => {
    this.setState({ columnView: 1 });
    this.setState({ selectedCocktail: null });
  };

  handleMenuOption2Click = () => {
    this.setState({ columnView: 2 });
    this.setState({ selectedCocktail: null });
  };

  handleMenuOption3Click = () => {
    this.setState({ columnView: 3 });
    this.setState({ selectedCocktail: null });
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

  numberOfPages = () => {
    if (this.state.columnView === 1) {
      return Math.floor(
        this.state.filteredCocktails.length / this.state.cocktailsPerPage
      );
    } else if (this.state.shoppingList === null) {
      return 0;
    }
    return Math.floor(
      this.state.shoppingList.cocktails.length / this.state.cocktailsPerPage
    );
  };

  paginatedCocktails = () => {
    const start = this.state.currentPage * this.state.cocktailsPerPage;
    const end = start + this.state.cocktailsPerPage;
    return this.state.filteredCocktails.slice(start, end);
  };

  handleNextButtonClick = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };

  handlePrevButtonClick = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
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

  handleClearShoppingList = () => {
    this.setState({ shoppingList: null });
  };

  render() {
    const myCocktails = [];
    if (this.state.shoppingList !== null) {
      cocktails.forEach(cocktail => {
        this.state.shoppingList.cocktails.forEach(cocktailInShoppingList => {
          if (cocktail.name === cocktailInShoppingList.name) {
            myCocktails.push(cocktail);
          }
        });
      });
    }
    const menuCocktails =
      this.state.columnView === 1 ? this.paginatedCocktails() : myCocktails;
    return (
      <div className="mainScreenContainer">
        <div className="imgColumn" />
        <MenuColumn
          cocktails={menuCocktails}
          columnView={this.state.columnView}
          onSearchUpdate={this.handleSearchUpdate}
          selectedCocktail={this.state.selectedCocktail}
          onMenuOption1Click={this.handleMenuOption1Click}
          onMenuOption2Click={this.handleMenuOption2Click}
          onMenuOption3Click={this.handleMenuOption3Click}
          onCocktailClick={this.handleCocktailClick}
          onNextButtonClick={this.handleNextButtonClick}
          onPrevButtonClick={this.handlePrevButtonClick}
          currentPage={this.state.currentPage}
          numberOfPages={this.numberOfPages}
        />
        <DetailsColumn
          columnView={this.state.columnView}
          selectedCocktail={this.state.selectedCocktail}
          shoppingList={this.state.shoppingList}
          servingsValue={this.state.servingsValue}
          onServingsUpdate={this.handleServingsUpdate}
          onServingsSubmit={this.handleServingsSubmit}
          onClearShoppingList={this.handleClearShoppingList}
        />
      </div>
    );
  }
}

export default MainScreen;
