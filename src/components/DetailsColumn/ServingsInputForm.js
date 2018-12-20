import React from "react";

import "./DetailsColumn.scss";

const ServingsInputForm = props => {
  console.log(props.servingsValue, props.handleServingsUpdate);
  return (
    <form className="servingsForm">
      <input
        className="servingsInput"
        type="number"
        placeholder="Servings"
        value={props.servingsValue}
        onChange={props.handleServingsUpdate}
      />
      <button
        className="servingsSubmitButton"
        onClick={props.handleServingsSubmit}
      >
        Add to shopping list
      </button>
    </form>
  );
};

export default ServingsInputForm;
