import React from "react";
import WelcomeScreen from "./WelcomeScreen";
import MainScreen from "./MainScreen";

import "./App.scss";

const App = props => {
  const welcomeScreenIsOn = props.welcomeScreenIsOn;
  if (welcomeScreenIsOn) {
    return <WelcomeScreen />;
  }
  return <MainScreen />;
};

export default App;
