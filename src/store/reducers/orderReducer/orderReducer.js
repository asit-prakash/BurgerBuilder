import {
  CREATE_ORDER,
  SET_ORDER_DATA,
  SET_ORDER_SUCCESS,
} from "../../actions/orderActions/orderActions";

const initialState = {
  newOrderSuccess: false,
  orders: null,
};

const newOrderHandler = (state, action) => {
  if (action.data.status === 200) {
    return {
      ...state,
      newOrderSuccess: true,
    };
  }
};

const setOrderDataHandler = (state, action) => {
  if (action.data.status === 200) {
    return {
      ...state,
      orders: action.data.data,
    };
  }
};

const setOrderSuccessHandler = (state, action) => {
  return {
    ...state,
    newOrderSuccess: false,
  };
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return newOrderHandler(state, action);

    case SET_ORDER_DATA:
      return setOrderDataHandler(state, action);

    case SET_ORDER_SUCCESS:
      return setOrderSuccessHandler(state, action);

    default:
      return state;
  }
};

export default orderReducer;
