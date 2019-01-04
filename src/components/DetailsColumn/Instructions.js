import React from "react";

import "./DetailsColumn.scss";

const InstructionListItem = ({ instruction }) => {
  return <li>{instruction}</li>;
};

const Instructions = ({ selectedCocktail, header }) => {
  const instructionsListItems = selectedCocktail.instructions.map(
    (instruction, index) => (
      <InstructionListItem key={index} instruction={instruction} />
    )
  );
  return (
    <div className="instructionsContainer">
      <h3 className="instructionsHeader">{header}</h3>
      <ol className="instructionsList">{instructionsListItems}</ol>
    </div>
  );
};

export default Instructions;
