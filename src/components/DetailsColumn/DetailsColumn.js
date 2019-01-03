import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { views } from "../../actions/actions";

import SelectedCocktailDetails from "./SelectedCocktailDetails";
import ShoppingListDetails from "./ShoppingListDetails";

import "./DetailsColumn.scss";

const DetailsColumn = ({
  view,
  shoppingList,
  selectedCocktailId,
  servingsValue,
  onServingsUpdate,
  onServingsSubmit,
  onClearShoppingList
}) => {
  return view === views.SHOPPING_LIST ? (
    <div className="detailsColumn">
      <ShoppingListDetails
        shoppingList={shoppingList}
        onClearShoppingList={onClearShoppingList}
      />
    </div>
  ) : (
    <div className="detailsColumn">
      <SelectedCocktailDetails
        selectedCocktailId={selectedCocktailId}
        servingsValue={servingsValue}
        onServingsUpdate={onServingsUpdate}
        onServingsSubmit={onServingsSubmit}
        columnView={view}
        shoppingList={shoppingList}
      />
    </div>
  );
};
DetailsColumn.propTypes = {
  view: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  view: state.view,
  selectedCocktailId: state.selectedCocktailId
});

const DetailsColumnWrapper = connect(mapStateToProps)(DetailsColumn);

export default DetailsColumnWrapper;
