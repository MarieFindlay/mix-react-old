import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import NavBar from "./NavBar";
import SearchInput from "./SearchInput";
import MenuList from "./MenuList";
import PreviousNextButton from "./PreviousNextButton";

import { calculateShoppingListCocktails } from "../../functions/functions";
import { initialCocktails } from "../../constants/cocktails";

import { views } from "../../actions/actions";

import "./MenuColumn.scss";

const MenuColumn = ({ view, cocktailsToDisplay }) => {
  return (
    <div className="cocktailsColumn">
      <NavBar />
      {(view === views.CHOOSE_COCKTAILS ||
        (view === views.SAVED_RECIPES && cocktailsToDisplay.length > 0)) && (
        <>
          <SearchInput cocktails={cocktailsToDisplay} />
          <MenuList cocktails={cocktailsToDisplay} />
          <PreviousNextButton cocktails={cocktailsToDisplay} />
        </>
      )}
    </div>
  );
};
MenuColumn.propTypes = {
  view: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    view: state.view,
    cocktailsToDisplay:
      state.view === views.CHOOSE_COCKTAILS
        ? initialCocktails
        : calculateShoppingListCocktails(initialCocktails, state.shoppingList)
  };
};

const MenuColumnContainer = connect(mapStateToProps)(MenuColumn);

export default MenuColumnContainer;
