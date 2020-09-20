import { ADD_TO_CART } from "../../actions/cartActions/cartActions";

const initialState = {};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemId = new Date().toISOString();
      return {
        ...state,
        [itemId]: action.item,
      };

    default:
      return state;
  }
};

export default cartReducers;
