import React from "react";
import InstructionListItem from "./InstructionListItem";

const Instructions = props => {
  const selectedCocktail = props.selectedCocktail;
  const instructionsListItems = selectedCocktail.instructions.map(
    (instruction, index) => (
      <InstructionListItem key={index} instruction={instruction} />
    )
  );
  return (
    <div>
      <h3>Instructions</h3>
      <ul>{instructionsListItems}</ul>
    </div>
  );
};

export default Instructions;
