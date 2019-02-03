import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";

import { filterCocktails } from "../../functions/functions";
import { cocktailsOnCurrentPage } from "../../constants/pagination";
import { selectCocktail } from "../../actions/actions";

import "./MenuColumn.scss";

const MenuListItem = ({ selectedItemId, item, onClick }) => {
  return (
    <div>
      <li
        className={classNames("cocktailListItem", {
          cocktailListItemSelected: selectedItemId === item.id,
          cocktailListItemUnselected: selectedItemId !== item.id
        })}
        onClick={() => onClick(item.id)}
      >
        {item.name}
      </li>
    </div>
  );
};

const MenuList = ({
  cocktails,
  selectedItemId,
  onClick,
  currentPage,
  searchInputValue
}) => {
  const menuItems = cocktailsOnCurrentPage(
    currentPage,
    filterCocktails(cocktails, searchInputValue)
  );
  const listItems = menuItems.map(item => (
    <MenuListItem
      key={item.id}
      item={item}
      selectedItemId={selectedItemId}
      onClick={onClick}
    />
  ));
  return <ul className="cocktailList">{listItems}</ul>;
};
MenuList.propTypes = {
  cocktails: PropTypes.array.isRequired,
  selectedItemId: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  searchInputValue: PropTypes.string
};

const mapStateToProps = (state, ownProps) => {
  return {
    selectedItemId: state.selectedCocktailId,
    searchInputValue: state.searchInputValue,
    currentPage: state.currentPage
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: id => {
      dispatch(selectCocktail(id));
    }
  };
};

const MenuListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuList);

export default MenuListContainer;
