import React from "react";

import { storiesOf } from "@storybook/react";

import App from "../App";
import WelcomeScreen from "../WelcomeScreen";
import MainScreen from "../MainScreen";
import NavBar from "../NavBar";
import MainContentContainer from "../MainContentContainer";
import CocktailsScreen from "../CocktailsScreen";
import ShoppingListScreen from "../ShoppingListScreen";
import CocktailsColumn from "../CocktailsColumn";
import SearchInput from "../SearchInput";
import CocktailsList from "../CocktailsList";
import CocktailListItem from "../CocktailListItem";
import PreviousNextButton from "../PreviousNextButton";
import CocktailDetails from "../CocktailDetails";
import NoCocktailSelectedScreen from "../NoCocktailSelectedScreen";
import CocktailIsSelectedScreen from "../CocktailIsSelectedScreen";
import Instructions from "../Instructions";
import Ingredients from "../Ingredients";
import InstructionListItem from "../InstructionListItem";
import IngredientListItem from "../IngredientListItem";
import ServingsInputForm from "../ServingsInputForm";
import ServingsInputField from "../ServingsInputField";
import ServingsFormSubmitButton from "../ServingsFormSubmitButton";
import EmptyShoppingList from "../EmptyShoppingList";
import ShoppingListContainerWithCocktails from "../ShoppingListContainerWithCocktails";
import ShoppingList from "../ShoppingList";
import ShoppingListItem from "../ShoppingListItem";
import ClearShoppingListButton from "../ClearShoppingListButton";

storiesOf("App", module).add("Standard", () => <App />);
storiesOf("WelcomeScreen", module).add("Standard", () => <WelcomeScreen />);
storiesOf("MainScreen", module).add("Standard", () => <MainScreen />);
storiesOf("NavBar", module).add("Standard", () => <NavBar />);
storiesOf("MainContentContainer", module).add("Standard", () => (
  <MainContentContainer />
));
storiesOf("CocktailsScreen", module).add("Standard", () => <CocktailsScreen />);
storiesOf("ShoppingListScreen", module).add("Standard", () => (
  <ShoppingListScreen />
));
storiesOf("CocktailsColumn", module).add("Standard", () => <CocktailsColumn />);
storiesOf("SearchInput", module).add("Standard", () => <SearchInput />);
storiesOf("CocktailsList", module).add("Standard", () => <CocktailsList />);
storiesOf("CocktailListItem", module).add("Standard", () => (
  <CocktailListItem />
));
storiesOf("PreviousNextButton", module).add("Standard", () => (
  <PreviousNextButton />
));
storiesOf("CocktailDetails", module).add("Standard", () => <CocktailDetails />);
storiesOf("NoCocktailSelectedScreen", module).add("Standard", () => (
  <NoCocktailSelectedScreen />
));
storiesOf("CocktailIsSelectedScreen", module).add("Standard", () => (
  <CocktailIsSelectedScreen />
));
storiesOf("Instructions", module).add("Standard", () => <Instructions />);
storiesOf("Ingredients", module).add("Standard", () => <Ingredients />);
storiesOf("InstructionListItem", module).add("Standard", () => (
  <InstructionListItem />
));
storiesOf("IngredientListItem", module).add("Standard", () => (
  <IngredientListItem />
));
storiesOf("ServingsInputForm", module).add("Standard", () => (
  <ServingsInputForm />
));
storiesOf("ServingsInputField", module).add("Standard", () => (
  <ServingsInputField />
));
storiesOf("ServingsFormSubmitButton", module).add("Standard", () => (
  <ServingsFormSubmitButton />
));
storiesOf("EmptyShoppingList", module).add("Standard", () => (
  <EmptyShoppingList />
));
storiesOf("ShoppingListContainerWithCocktails", module).add("Standard", () => (
  <ShoppingListContainerWithCocktails />
));
storiesOf("ShoppingList", module).add("Standard", () => <ShoppingList />);
storiesOf("ShoppingListItem", module).add("Standard", () => (
  <ShoppingListItem />
));
storiesOf("ClearShoppingListButton", module).add("Standard", () => (
  <ClearShoppingListButton />
));
