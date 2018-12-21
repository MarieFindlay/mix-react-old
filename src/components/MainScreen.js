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
      selectedCocktail: null
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

  render() {
    const menuCocktails =
      this.state.columnView === 1 ? cocktails : cocktails.slice(0, 4);
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
        />
      </div>
    );
  }
}

export default MainScreen;
