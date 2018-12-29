import React from "react";

import "./MenuColumn.scss";

const NavBar = ({
  onMenuOption1Click,
  onMenuOption2Click,
  onMenuOption3Click,
  columnView
}) => {
  return (
    <div className="NavBarContainer">
      <h2
        onClick={onMenuOption1Click}
        className={
          columnView === 1 ? "navHeaderSelected" : "navHeaderUnselected"
        }
      >
        ALL COCKTAILS
      </h2>
      <h2
        onClick={onMenuOption2Click}
        className={
          columnView === 2 ? "navHeaderSelected" : "navHeaderUnselected"
        }
      >
        SHOPPING LIST
      </h2>
      <h2
        onClick={onMenuOption3Click}
        className={
          columnView === 3 ? "navHeaderSelected" : "navHeaderUnselected"
        }
      >
        MY COCKTAILS
      </h2>
    </div>
  );
};

export default NavBar;
