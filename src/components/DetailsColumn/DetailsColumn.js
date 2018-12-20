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
    this.handleServingsUpdate = this.handleServingsUpdate.bind(this);
    this.handleServingsSubmit = this.handleServingsSubmit.bind(this);
  }

  handleServingsUpdate(event) {
    this.setState({ servingsValue: event.target.value });
  }

  handleServingsSubmit(event) {
    alert("User submitted: " + this.state.servingsValue);
    event.preventDefault();
  }

  render() {
    const selectedCocktail = this.props.selectedCocktail;
    const columnView = this.props.columnView;

    const addToShoppingList = (shoppingList, selectedCocktail) => {};

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
