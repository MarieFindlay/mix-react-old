import React from "react";

const InstructionListItem = props => {
  const instruction = props.instruction;
  return <li>{instruction}</li>;
};

export default InstructionListItem;
