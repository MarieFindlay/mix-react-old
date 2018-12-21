import React from "react";

import MenuColumn from "./MenuColumn/MenuColumn";
import DetailsColumn from "./DetailsColumn/DetailsColumn";

import cocktails from "../cocktails.js";

import "./MainScreen.scss";

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnView: 1,
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
      this.setState({ shoppingList: tempShoppingList });
      this.setState({ servingsValue: "" });
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
        console.log("inside empty condition");
        tempShoppingListCocktails.push({
          name: selectedCocktail.name,
          amount: Number(servingsValue)
        });
      }
      const tempShoppingList = {
        ingredients: tempShoppingListIngredients,
        cocktails: tempShoppingListCocktails
      };
      this.setState({ shoppingList: tempShoppingList });
      this.setState({ servingsValue: "" });
    }
  };

  render() {
    const menuCocktails =
      this.state.columnView === 1 || this.state.shoppingList === null
        ? cocktails
        : this.state.shoppingList.cocktails;
    return (
      <div className="mainScreenContainer">
        <div className="imgColumn" />
        <MenuColumn
          cocktails={menuCocktails}
          columnView={this.state.columnView}
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
