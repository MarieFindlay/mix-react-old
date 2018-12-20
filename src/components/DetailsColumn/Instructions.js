import React from "react";

import "./DetailsColumn.scss";

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
    <div className="instructionsContainer">
      <h3 className="instructionsHeader">Instructions</h3>
      <ol className="instructionsList">{instructionsListItems}</ol>
    </div>
  );
};

export default Instructions;
