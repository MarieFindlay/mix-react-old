import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import NavBar from "./NavBar";
import SearchInput from "./SearchInput";
import MenuList from "./MenuList";
import PreviousNextButton from "./PreviousNextButton";

import { calculateShoppingListCocktails } from "../../functions/functions";
import { initialCocktails } from "../../constants/cocktails";
import { numberOfPages } from "../../constants/pagination";

import { views } from "../../actions/actions";

import "./MenuColumn.scss";

const MenuColumn = ({ selectedView, cocktailsToDisplay }) => {
  return (
    <div className="cocktailsColumn">
      <NavBar />
      {(selectedView === views.CHOOSE_COCKTAILS ||
        (selectedView === views.SAVED_RECIPES &&
          cocktailsToDisplay.length > 0)) && (
        <>
          <SearchInput disabled={cocktailsToDisplay.length === 0} />
          <MenuList cocktails={cocktailsToDisplay} />
          <PreviousNextButton
            numberOfPages={numberOfPages(cocktailsToDisplay)}
          />
        </>
      )}
    </div>
  );
};
MenuColumn.propTypes = {
  selectedView: PropTypes.string.isRequired,
  cocktailsToDisplay: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    selectedView: state.selectedView,
    cocktailsToDisplay:
      state.selectedView === views.CHOOSE_COCKTAILS
        ? initialCocktails
        : calculateShoppingListCocktails(initialCocktails, state.shoppingList)
  };
};

const MenuColumnContainer = connect(mapStateToProps)(MenuColumn);

export default MenuColumnContainer;
