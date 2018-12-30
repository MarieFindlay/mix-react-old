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
  selectedCocktail,
  servingsValue,
  onServingsUpdate,
  onServingsSubmit,
  onClearShoppingList
}) => {
  console.log(view);
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
        selectedCocktail={selectedCocktail}
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
  view: state.view
});

const DetailsColumnWrapper = connect(mapStateToProps)(DetailsColumn);

export default DetailsColumnWrapper;
