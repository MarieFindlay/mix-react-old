import React from "react";

import NavBar from "./NavBar";
import MainContentContainer from "./MainContentContainer";

const MainScreen = props => {
  return (
    <div>
      <NavBar />
      <MainContentContainer />
    </div>
  );
};

export default MainScreen;
