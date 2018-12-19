import React from "react";

const InstructionListItem = props => {
  const instruction = props.instruction;
  return <li>{instruction}</li>;
};

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
      <ol>{instructionsListItems}</ol>
    </div>
  );
};

export default Instructions;
