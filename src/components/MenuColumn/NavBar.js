import React from "react";

import "./MenuColumn.scss";

const NavBar = props => {
  return (
    <div className="NavBarContainer">
      <h2 onClick={props.onMenuOption1Click}>ALL COCKTAILS</h2>
      <h2 onClick={props.onMenuOption2Click}>SHOPPING LIST</h2>
      <h2 onClick={props.onMenuOption3Click}>MY COCKTAILS</h2>
    </div>
  );
};

export default NavBar;
