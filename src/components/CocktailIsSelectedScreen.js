import React from "react";

import Instructions from "./Instructions";
import Ingredients from "./Ingredients";
import ServingsInputForm from "./ServingsInputForm";

const CocktailIsSelectedScreen = props => {
  return (
    <div>
      <Instructions />
      <Ingredients />
      <ServingsInputForm />
    </div>
  );
};

export default CocktailIsSelectedScreen;
