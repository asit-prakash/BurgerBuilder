import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Item from "../../components/Item/Item";
import { loadCart, clearCart, removeItemFromCart } from "../helper/cartHelper";
import * as ingredientsActions from "../../store/actions/ingredientsActions/ingredientsActions";

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ingredientsActions.loadAllIngredients());
  }, [dispatch]);

  const availableIngredients = useSelector((state) => state.ingredients);

  const [cartItems, setCartItems] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setCartItems(loadCart());
  }, [reload]);

  const clearCartHandler = () => {
    clearCart();
    setReload((prevState) => !prevState);
  };

  const removeItemHandler = (id) => {
    removeItemFromCart(id);
    setReload((prevState) => !prevState);
  };

  return (
    <>
      <div className="container-xl">
        <div className="card mt-3 mb-3 overflow-auto bg-dark">
          <div className="card-header bg-dark text-white border-info d-flex justify-content-between flex-wrap">
            <h5 className="align-self-center">
              Your Shopping Cart ({cartItems.length} items)
            </h5>
            <button
              type="button"
              className="btn btn-info"
              onClick={clearCartHandler}
            >
              Clear Cart
            </button>
          </div>
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12 bg-dark">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-dark my-3 border border-top-0 border-right-0 border-left-0 border-white"
                  >
                    <Item
                      item={item}
                      availableIngredients={availableIngredients}
                      removeItem={removeItemHandler}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid position-sticky bg-info">
        <h1>Order here</h1>
      </div>
    </>
  );
};
export default Cart;
