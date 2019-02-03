import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { views } from "../../actions/actions";

import SelectedCocktailDetails from "./SelectedCocktailDetails";
import ShoppingListDetailsContainer from "./ShoppingListDetails";

import "./DetailsColumn.scss";

const DetailsColumn = ({
  selectedView,
  shoppingList,
  selectedCocktailId,
  onClearShoppingList
}) => {
  return selectedView === views.CHOOSE_COCKTAILS ||
    selectedView === views.SAVED_RECIPES ? (
    <div className="detailsColumn">
      <SelectedCocktailDetails
        selectedCocktailId={selectedCocktailId}
        selectedView={selectedView}
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
  selectedView: PropTypes.string.isRequired,
  shoppingList: PropTypes.array.isRequired,
  selectedCocktailId: PropTypes.number.isRequired,
  onClearShoppingList: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  selectedView: state.selectedView,
  selectedCocktailId: state.selectedCocktailId,
  shoppingList: state.shoppingList
});

const DetailsColumnWrapper = connect(mapStateToProps)(DetailsColumn);

export default DetailsColumnWrapper;
