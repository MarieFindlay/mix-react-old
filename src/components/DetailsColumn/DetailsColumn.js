import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { views } from "../../actions/actions";

import SelectedCocktailDetails from "./SelectedCocktailDetails";
import ShoppingListDetailsContainer from "./ShoppingListDetails";

import "./DetailsColumn.scss";

const DetailsColumn = ({
  view,
  shoppingList,
  selectedCocktailId,
  onClearShoppingList
}) => {
  return view === views.CHOOSE_COCKTAILS || view === views.SAVED_RECIPES ? (
    <div className="detailsColumn">
      <SelectedCocktailDetails
        selectedCocktailId={selectedCocktailId}
        view={view}
        shoppingList={shoppingList}
      />
    </div>
  ) : (
    <div className="detailsColumn">
      <ShoppingListDetailsContainer />
    </div>
  );
};
DetailsColumn.propTypes = {
  view: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  view: state.view,
  selectedCocktailId: state.selectedCocktailId,
  shoppingList: state.shoppingList
});

const DetailsColumnWrapper = connect(mapStateToProps)(DetailsColumn);

export default DetailsColumnWrapper;
