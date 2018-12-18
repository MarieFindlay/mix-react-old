import React from "react";

import NavBar from "./NavBar";
import MainContentContainer from "./MainContentContainer";

const MainScreen = props => {
  return (
    <div>
      <MainContentContainer cocktailsScreenSelected={true} />
    </div>
  );
};

export default MainScreen;
