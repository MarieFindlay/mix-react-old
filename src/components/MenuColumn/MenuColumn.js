import React from "react";

import NavBar from "./NavBar";
import SearchInput from "./SearchInput";
import CocktailsList from "./CocktailsList";
import PreviousNextButton from "./PreviousNextButton";

import "./MenuColumn.scss";

class MenuColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="cocktailsColumn">
        <NavBar
          onMenuOption1Click={this.props.onMenuOption1Click}
          onMenuOption2Click={this.props.onMenuOption2Click}
          onMenuOption3Click={this.props.onMenuOption3Click}
          columnView={this.props.columnView}
        />
        {(this.props.columnView === 1 || this.props.columnView === 3) && (
          <>
            <SearchInput onSearchUpdate={this.props.onSearchUpdate} />
            <CocktailsList
              cocktails={this.props.cocktails}
              onCocktailClick={this.props.onCocktailClick}
              selectedCocktail={this.props.selectedCocktail}
            />
            <PreviousNextButton
              onNextButtonClick={this.props.onNextButtonClick}
              onPrevButtonClick={this.props.onPrevButtonClick}
              currentPage={this.props.currentPage}
              numberOfPages={this.props.numberOfPages}
            />
          </>
        )}
      </div>
    );
  }
}

export default MenuColumn;
