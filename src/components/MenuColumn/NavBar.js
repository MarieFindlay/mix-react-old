import React from "react";

import "./MenuColumn.scss";

const NavBar = props => {
  return (
    <div className="NavBarContainer">
      <h2 onClick={props.handleMenuOption1Click}>ALL COCKTAILS</h2>
      <h2 onClick={props.handleMenuOption2Click}>SHOPPING LIST</h2>
      <h2 onClick={props.handleMenuOption3Click}>MY COCKTAILS</h2>
    </div>
  );
};

export default NavBar;
