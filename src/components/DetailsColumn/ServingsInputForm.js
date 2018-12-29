import React from "react";

import "./DetailsColumn.scss";

const ServingsInputForm = ({
  servingsValue,
  onServingsUpdate,
  onServingsSubmit
}) => {
  return (
    <form className="servingsForm">
      <input
        className="servingsInput"
        type="number"
        placeholder="Servings"
        value={servingsValue}
        onChange={onServingsUpdate}
      />
      <button
        className={
          servingsValue === 0
            ? "servingsSubmitButtonDisabled"
            : "servingsSubmitButton"
        }
        onClick={onServingsSubmit}
      >
        + ADD
      </button>
    </form>
  );
};

export default ServingsInputForm;
