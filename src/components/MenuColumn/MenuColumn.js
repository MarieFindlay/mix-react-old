import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import NavBar from "./NavBar";
import SearchInput from "./SearchInput";
import MenuList from "./MenuList";
import PreviousNextButton from "./PreviousNextButton";

import { cocktailsOnCurrentPage } from "../../constants/pagination";
import { filterCocktails } from "../../functions/functions";
import { initialCocktails } from "../../constants/cocktails";

import { views } from "../../actions/actions";

import "./MenuColumn.scss";

const MenuColumn = ({
  view,
  selectedCocktail,
  onCocktailClick,
  currentPage,
  shoppingList,
  initialCocktails
}) => {
  return (
    <div className="cocktailsColumn">
      <NavBar />
      {(view === views.CHOOSE_COCKTAILS || view === views.SAVED_RECIPES) && (
        <>
          <SearchInput />
          <MenuList />
          <PreviousNextButton
            shoppingList={shoppingList}
            cocktails={initialCocktails}
          />
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
    currentPage: state.currentPage,
    cocktails: filterCocktails(initialCocktails, state.searchInputValue)
  };
};

const MenuColumnContainer = connect(mapStateToProps)(MenuColumn);

export default MenuColumnContainer;
