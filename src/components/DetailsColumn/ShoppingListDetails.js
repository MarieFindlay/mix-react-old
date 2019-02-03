import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CocktailsInShoppingList from "./CocktailsInShoppingList";
import ClearShoppingListButton from "./ClearShoppingListButton";
import Ingredients from "./Ingredients";

import { pluraliseIngredient } from "../../functions/functions";
import { initialCocktails } from "../../constants/cocktails";

import { clearShoppingList } from "../../actions/actions";

import "./DetailsColumn.scss";

const ShoppingListDetails = ({ cocktailsInShoppingList, onClick }) => {
  if (Object.keys(cocktailsInShoppingList).length === 0) {
    return (
      <p className="shoppingListEmptyText">
        You shopping list is empty. <br /> <br /> First choose your cocktails,
        then come to Shop to find out you what you need.
      </p>
    );
  }
  const ingredientsInShoppingList = [];
  cocktailsInShoppingList.forEach(cocktailQuantityPair => {
    cocktailQuantityPair[0].ingredients.forEach(ingredient => {
      if (ingredientsInShoppingList.includes(ingredient.name)) {
        let item = ingredientsInShoppingList.find(
          item => item.name === ingredient.name
        );
        item.amount += cocktailQuantityPair[1] * ingredient.amount;
      } else {
        ingredientsInShoppingList.push({
          name: ingredient.name,
          amount: cocktailQuantityPair[1] * ingredient.amount,
          unit: ingredient.unit
        });
      }
    });
    ingredientsInShoppingList.forEach(ingredient =>
      pluraliseIngredient(ingredient)
    );
  });
  return (
    <div className="shoppingListContainer">
      <h2 className="shoppingListHeader">SHOPPING LIST</h2>
      <div className="shoppingListInnerContainer">
        <ClearShoppingListButton onClick={onClick} />
        <h3 className="shoppingListCocktailsHeader">TO MAKE</h3>
        <CocktailsInShoppingList
          cocktailsInShoppingList={cocktailsInShoppingList}
        />
        <Ingredients
          ingredients={ingredientsInShoppingList}
          header={"YOU NEED"}
        />
      </div>
    </div>
  );
};
ShoppingListDetails.propTypes = {
  cocktailsInShoppingList: PropTypes.object,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    cocktailsInShoppingList: Object.entries(state.shoppingList).map(item => [
      initialCocktails.find(cocktail => parseInt(item[0]) === cocktail.id),
      item[1]
    ])
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(clearShoppingList());
    }
  };
};

const ShoppingListDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingListDetails);

export default ShoppingListDetailsContainer;
