import {
  GET_ALL_INGREDIENTS,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  RESET_BURGER_BUILDER,
} from "../../actions/ingredientsActions/ingredientsActions";

const initialState = {
  ingredients: "",
  currentBurgerIng: {},
  isPurchasable: false,
  totalPrice: 50,
};

const getAllIngredientsHandler = (state, action) => {
  return {
    ...state,
    ingredients: action.ingredients,
  };
};

const addIngredientHandler = (state, action) => {
  const isIngAdded = state.currentBurgerIng[action.ingId];

  const oldCount = !!isIngAdded ? isIngAdded.qty : 0;
  const updatedCount = oldCount + 1;

  const oldPrice = state.totalPrice;
  const newPrice = oldPrice + parseInt(state.ingredients[action.ingId].price);

  const updateCurrentBurger = {
    ...state.currentBurgerIng,
    [action.ingId]: { qty: updatedCount },
  };

  return {
    ...state,
    currentBurgerIng: updateCurrentBurger,
    isPurchasable: newPrice > 100 ? true : false,
    totalPrice: newPrice,
  };
};

const removeIngredientHandler = (state, action) => {
  const isIngAdded = state.currentBurgerIng[action.ingId];

  const oldCount = !!isIngAdded ? isIngAdded.qty : 0;
  if (oldCount <= 0) {
    return state;
  }
  const updatedCount = oldCount - 1;

  const oldPrice = state.totalPrice;
  const newPrice = oldPrice - parseInt(state.ingredients[action.ingId].price);

  const updateCurrentBurger = {
    ...state.currentBurgerIng,
    [action.ingId]: { qty: updatedCount },
  };

  return {
    ...state,
    currentBurgerIng: updateCurrentBurger,
    isPurchasable: newPrice > 100 ? true : false,
    totalPrice: newPrice,
  };
};

const resetBurgerBuilderHandler = (state, action) => {
  return {
    ...state,
    currentBurgerIng: {},
    isPurchasable: false,
    totalPrice: 50,
  };
};

const ingredientsReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_INGREDIENTS:
      return getAllIngredientsHandler(state, action);

    case ADD_INGREDIENT:
      return addIngredientHandler(state, action);

    case REMOVE_INGREDIENT:
      return removeIngredientHandler(state, action);

    case RESET_BURGER_BUILDER:
      return resetBurgerBuilderHandler(state, action);

    default:
      return state;
  }
};

export default ingredientsReducers;
