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

import cocktails from "../../cocktails";
import shoppingList from "../../shoppingList";

storiesOf("App", module).add("welcomeScreenOn", () => (
  <App welcomeScreenIsOn={true} />
));
storiesOf("App", module).add("welcomeScreenOff", () => (
  <App welcomeScreenIsOn={false} />
));
storiesOf("WelcomeScreen", module).add("Standard", () => <WelcomeScreen />);
storiesOf("MainScreen", module).add("Standard", () => <MainScreen />);
storiesOf("NavBar", module).add("Standard", () => <NavBar />);
storiesOf("MainContentContainer", module)
  .add("cocktailsScreenSelected", () => (
    <MainContentContainer
      cocktailsScreenSelected={true}
      selectedCocktail={cocktails[0]}
    />
  ))
  .add("shoppingListScreenSelected", () => (
    <MainContentContainer cocktailsScreenSelected={false} />
  ));
storiesOf("CocktailsScreen", module).add("Standard", () => (
  <CocktailsScreen cocktails={cocktails} selectedCocktail={cocktails[0]} />
));
storiesOf("ShoppingListScreen", module).add("emptyShoppingList", () => (
  <ShoppingListScreen />
));
storiesOf("ShoppingListScreen", module).add("itemsInShoppingList", () => (
  <ShoppingListScreen shoppingList={shoppingList} />
));
storiesOf("CocktailsColumn", module).add("Standard", () => (
  <CocktailsColumn cocktails={cocktails} />
));
storiesOf("SearchInput", module).add("Standard", () => <SearchInput />);
storiesOf("CocktailsList", module).add("Standard", () => (
  <CocktailsList cocktails={cocktails} />
));
storiesOf("CocktailListItem", module).add("Standard", () => (
  <CocktailListItem selectedCocktail={cocktails[0]} />
));
storiesOf("PreviousNextButton", module).add("Standard", () => (
  <PreviousNextButton />
));
storiesOf("CocktailDetails", module)
  .add("cocktailSelected", () => (
    <CocktailDetails selectedCocktail={cocktails[0]} />
  ))
  .add("noCocktailSelected", () => <CocktailDetails selectedCocktail={null} />);
storiesOf("NoCocktailSelectedScreen", module).add("Standard", () => (
  <NoCocktailSelectedScreen />
));
storiesOf("CocktailIsSelectedScreen", module).add("Example cocktail", () => (
  <CocktailIsSelectedScreen selectedCocktail={cocktails[0]} />
));
storiesOf("Instructions", module).add("Standard", () => (
  <Instructions selectedCocktail={cocktails[0]} />
));
storiesOf("Ingredients", module).add("Standard", () => (
  <Ingredients selectedCocktail={cocktails[0]} />
));
storiesOf("InstructionListItem", module).add("Standard", () => (
  <InstructionListItem instruction={cocktails[0].instructions[0]} />
));
storiesOf("IngredientListItem", module).add("Standard", () => (
  <IngredientListItem ingredient={cocktails[0].ingredients[0]} />
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
  <ShoppingListContainerWithCocktails shoppingList={shoppingList} />
));
storiesOf("ShoppingList", module).add("Standard", () => (
  <ShoppingList shoppingList={shoppingList} />
));
storiesOf("ShoppingListItem", module).add("Standard", () => (
  <ShoppingListItem item={shoppingList[0]} />
));
storiesOf("ClearShoppingListButton", module).add("Standard", () => (
  <ClearShoppingListButton />
));
