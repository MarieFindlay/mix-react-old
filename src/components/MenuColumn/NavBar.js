import React from "react";

import "./MenuColumn.scss";

const NavBar = ({
  onMenuOption1Click,
  onMenuOption2Click,
  onMenuOption3Click
}) => {
  return (
    <div className="NavBarContainer">
      <h2 onClick={onMenuOption1Click}>ALL COCKTAILS</h2>
      <h2 onClick={onMenuOption2Click}>SHOPPING LIST</h2>
      <h2 onClick={onMenuOption3Click}>MY COCKTAILS</h2>
    </div>
  );
};

export default NavBar;
