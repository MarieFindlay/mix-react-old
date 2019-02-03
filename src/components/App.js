import React from "react";

import MenuColumn from "./MenuColumn/MenuColumn";
import DetailsColumn from "./DetailsColumn/DetailsColumn";

import "./App.scss";

const App = () => {
  return (
    <div className="mainScreenContainer">
      <div className="imgColumn" />
      <MenuColumn />
      <DetailsColumn />
    </div>
  );
};

export default App;
