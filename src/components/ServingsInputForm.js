import React from "react";

import ServingsInputField from "./ServingsInputField";
import ServingsFormSubmitButton from "./ServingsFormSubmitButton";

const ServingsInputForm = props => {
  return (
    <form>
      <ServingsInputField />
      <ServingsFormSubmitButton />
    </form>
  );
};

export default ServingsInputForm;
