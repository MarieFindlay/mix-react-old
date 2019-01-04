import React from "react";

import MenuColumn from "./MenuColumn/MenuColumn";
import DetailsColumn from "./DetailsColumn/DetailsColumn";

import "./MainScreen.scss";

const MainScreen = () => {
  return (
    <div className="mainScreenContainer">
      <div className="imgColumn" />
      <MenuColumn />
      <DetailsColumn />
    </div>
  );
};

export default MainScreen;
