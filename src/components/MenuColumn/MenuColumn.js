import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import NavBar from "./NavBar";
import SearchInput from "./SearchInput";
import CocktailsList from "./CocktailsList";
import PreviousNextButton from "./PreviousNextButton";

import cocktails from "../../cocktails";

import { views } from "../../actions/actions";

import "./MenuColumn.scss";

const MenuColumn = ({
  view,
  onSearchUpdate,
  selectedCocktail,
  onCocktailClick,
  onNextButtonClick,
  onPrevButtonClick,
  numberOfPages,
  currentPage
}) => {
  return (
    <div className="cocktailsColumn">
      <NavBar
        options={[
          views.CHOOSE_COCKTAILS,
          views.SHOPPING_LIST,
          views.SAVED_RECIPES
        ]}
      />
      {(view === views.CHOOSE_COCKTAILS || view === views.SAVED_RECIPES) && (
        <>
          <SearchInput onSearchUpdate={onSearchUpdate} />
          <CocktailsList
            cocktails={cocktails}
            onCocktailClick={onCocktailClick}
            selectedCocktail={selectedCocktail}
          />
          <PreviousNextButton
            onNextButtonClick={onNextButtonClick}
            onPrevButtonClick={onPrevButtonClick}
            currentPage={currentPage}
            numberOfPages={numberOfPages}
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
    view: state.view
  };
};

const MenuColumnWrapper = connect(
  mapStateToProps,
  null
)(MenuColumn);

export default MenuColumnWrapper;
