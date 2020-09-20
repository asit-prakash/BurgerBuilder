import { getAllIngredients } from "./helper/getAllIngredients";

//GET all ingredients from firebase
export const GET_ALL_INGREDIENTS = "GET_ALL_INGREDIENTS";

export const loadAllIngredients = () => {
  return async (dispatch) => {
    const response = await getAllIngredients();

    dispatch({ type: GET_ALL_INGREDIENTS, ingredients: response });
  };
};

//Add an ingredient to current burger
export const ADD_INGREDIENT = "ADD_INGREDIENT";

export const addIngredient = (ingId) => {
  return {
    type: ADD_INGREDIENT,
    ingId: ingId,
  };
};

//Remove an ingredient to current burger
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";

export const removeIngredient = (ingId) => {
  return {
    type: REMOVE_INGREDIENT,
    ingId: ingId,
  };
};

//Reset burger builder if item is addded to cart
export const RESET_BURGER_BUILDER = "RESET_BURGER_BUILDER";

export const resetBurgerBuilder = () => {
  return {
    type: RESET_BURGER_BUILDER,
  };
};
