import React from "react";

import MenuColumn from "./MenuColumn/MenuColumn";
import DetailsColumn from "./DetailsColumn/DetailsColumn";

import cocktails from "../cocktails.js";
import shoppingList from "../shoppingList.js";

import "./MainScreen.scss";

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnView: 1,
      selectedCocktail: null
    };
    this.handleMenuOption1Click = this.handleMenuOption1Click.bind(this);
    this.handleMenuOption2Click = this.handleMenuOption2Click.bind(this);
    this.handleMenuOption3Click = this.handleMenuOption3Click.bind(this);
    this.handleCocktailClick = this.handleCocktailClick.bind(this);
  }

  handleMenuOption1Click() {
    this.setState({ columnView: 1 });
  }

  handleMenuOption2Click() {
    this.setState({ columnView: 2 });
  }

  handleMenuOption3Click() {
    this.setState({ columnView: 3 });
  }

  handleCocktailClick(cocktail) {
    this.setState({ selectedCocktail: cocktail });
    console.log(this.state.selectedCocktail);
  }

  render() {
    return (
      <div className="mainScreenContainer">
        <div className="imgColumn" />
        <MenuColumn
          cocktails={cocktails}
          columnView={this.state.columnView}
          selectedCocktail={this.selectedCocktail}
          handleMenuOption1Click={this.handleMenuOption1Click}
          handleMenuOption2Click={this.handleMenuOption2Click}
          handleMenuOption3Click={this.handleMenuOption3Click}
          handleCocktailClick={this.handleCocktailClick}
        />
        <DetailsColumn
          columnView={this.state.columnView}
          selectedCocktail={this.state.selectedCocktail}
        />
      </div>
    );
  }
}

export default MainScreen;
