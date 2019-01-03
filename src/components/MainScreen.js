import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import MenuColumn from "./MenuColumn/MenuColumn";
import DetailsColumn from "./DetailsColumn/DetailsColumn";

import { views } from "../actions/actions";

import { initialCocktails } from "../../src/constants/cocktails";
import { pluraliseIngredient } from "../functions/functions";
import { numberOfPages } from "../constants/pagination";

import "./MainScreen.scss";

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: null,
      servingsValue: ""
    };
  }

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
      initialCocktails.forEach(cocktail => {
        this.state.shoppingList.cocktails.forEach(cocktailInShoppingList => {
          if (cocktail.name === cocktailInShoppingList.name) {
            myCocktails.push(cocktail);
          }
        });
      });
    }
    return (
      <div className="mainScreenContainer">
        <div className="imgColumn" />
        <MenuColumn
          selectedCocktail={this.state.selectedCocktail}
          onCocktailClick={this.handleCocktailClick}
          shoppingList={this.state.shoppingList}
        />
        <DetailsColumn
          columnView={this.props.view}
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

const mapStateToProps = (state, ownProps) => {
  return { view: state.view };
};

const MainScreenContainer = connect(mapStateToProps)(MainScreen);

export default MainScreenContainer;
