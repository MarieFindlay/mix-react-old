import React from "react";

import SelectedCocktailDetails from "./SelectedCocktailDetails";
import ShoppingListDetails from "./ShoppingListDetails";

import "./DetailsColumn.scss";

class DetailsColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      servingsValue: "",
      shoppingList: null
    };
  }

  handleServingsUpdate = event => {
    this.setState({ servingsValue: event.target.value });
  };

  handleServingsSubmit = event => {
    if (this.state.shoppingList === null) {
      const tempShoppingList = {
        ingredients: [],
        cocktails: []
      };
      this.props.selectedCocktail.ingredients.forEach(ingredient => {
        tempShoppingList.ingredients.push({
          name: ingredient.name,
          amount: this.state.servingsValue * ingredient.amount,
          unit: ingredient.unit
        });
      });
      this.setState({ shoppingList: tempShoppingList });
    }
    event.preventDefault();
  };

  render() {
    const selectedCocktail = this.props.selectedCocktail;
    const columnView = this.props.columnView;

    if (columnView === 1) {
      return (
        <div className="detailsColumn">
          <SelectedCocktailDetails
            selectedCocktail={selectedCocktail}
            servingsValue={this.state.servingsValue}
            handleServingsUpdate={this.handleServingsUpdate}
            handleServingsSubmit={this.handleServingsSubmit}
          />
        </div>
      );
    } else if (columnView === 2) {
      return (
        <div className="detailsColumn">
          <ShoppingListDetails shoppingList={this.props.shoppingList} />
        </div>
      );
    }
    return (
      <div className="detailsColumn">
        <SelectedCocktailDetails selectedCocktail={selectedCocktail} />
      </div>
    );
  }
}

export default DetailsColumn;
