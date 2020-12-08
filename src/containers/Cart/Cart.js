import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Item from "../../components/Item/Item";
import { loadCart, clearCart, removeItemFromCart } from "../helper/cartHelper";
import * as ingredientsActions from "../../store/actions/ingredientsActions/ingredientsActions";
import { DropdownButton, ButtonGroup, Dropdown } from "react-bootstrap";

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ingredientsActions.loadAllIngredients());
  }, [dispatch]);

  const availableIngredients = useSelector((state) => state.ingredients);

  const [cartItems, setCartItems] = useState([]);
  const [reload, setReload] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedStore, setSelectedStore] = useState("");

  useEffect(() => {
    setCartItems(loadCart());
  }, [reload]);

  useEffect(() => {
    let sum = 0;

    cartItems.map((item) => {
      for (let key in item) {
        sum = sum + item[key].itemPrice;
      }
      return null;
    });

    setTotalPrice(sum);
  }, [cartItems]);

  const clearCartHandler = () => {
    clearCart();
    setReload((prevState) => !prevState);
  };

  const removeItemHandler = (id) => {
    removeItemFromCart(id);
    setReload((prevState) => !prevState);
  };

  return cartItems?.length > 0 ? (
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
                {cartItems.map((item, index) => {
                  return (
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
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid position-sticky bg-info"
        style={{ bottom: 0 }}
      >
        <div className="p-1 d-flex justify-content-between align-items-center">
          <div>
            <DropdownButton
              as={ButtonGroup}
              key="up"
              id={`dropdown-button-drop-up`}
              drop={"up"}
              variant="light"
              title={selectedStore === "" ? "Select Store" : selectedStore}
              onSelect={(e) => setSelectedStore(e)}
            >
              <Dropdown.Item eventKey="Sector 5">Sector 5</Dropdown.Item>
              <Dropdown.Item eventKey="City Centre 1">
                City Centre 1
              </Dropdown.Item>
              <Dropdown.Item eventKey="Sector 2">Sector 2</Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="d-flex align-items-center">
            <div className="mr-2">
              <h3>Total: ₹{totalPrice}</h3>
            </div>
            <div>
              <button
                className="btn btn-success"
                disabled={selectedStore === "" ? true : false}
              >
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div>No product in the cart</div>
  );
};
export default Cart;
