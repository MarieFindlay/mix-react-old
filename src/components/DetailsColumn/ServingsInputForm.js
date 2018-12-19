import React from "react";

const ServingsInputField = props => {
  return <input type="text" placeholder="Number of servings" />;
};

const ServingsFormSubmitButton = props => {
  return <button>Add to shopping list</button>;
};

const ServingsInputForm = props => {
  return (
    <form>
      <ServingsInputField />
      <ServingsFormSubmitButton />
    </form>
  );
};

export default ServingsInputForm;
