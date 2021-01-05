import axios from "axios";
import { API } from "../../../backend";
import { loadingToggler } from "../commonActions/commonActions";

export const CREATE_ORDER = "CREATE_ORDER";

export const createOrder = (order, userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API}/orders/${userId}.json`, order);
      dispatch(newOrderData(response));
    } catch (error) {
      console.log(error);
    }
    dispatch(loadingToggler(false));
  };
};

const newOrderData = (data) => {
  return {
    type: CREATE_ORDER,
    data,
  };
};

export const fetchOrders = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API}/orders/${id}.json`);
      dispatch(setOrderData(response));
    } catch (error) {
      console.log(error);
    }
  };
};

export const SET_ORDER_DATA = "SET_ORDER_DATA";

const setOrderData = (data) => {
  return {
    type: SET_ORDER_DATA,
    data,
  };
};

export const SET_ORDER_SUCCESS = "SET_ORDER_SUCCESS";

export const setOrderSuccess = () => {
  return {
    type: SET_ORDER_SUCCESS,
  };
};
