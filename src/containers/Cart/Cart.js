import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import {
  DropdownButton,
  ButtonGroup,
  Dropdown,
  Modal,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import { createSelector } from "reselect";

import Item from "../../components/Item/Item";
import { loadCart, clearCart, removeItemFromCart } from "../helper/cartHelper";
import * as ingredientsActions from "../../store/actions/ingredientsActions/ingredientsActions";
import CheckoutForm from "./CheckoutForm";
import { checkAuthStatus } from "../../store/actions/authActions/authActions";
import {
  createOrder,
  setOrderSuccess,
} from "../../store/actions/orderActions/orderActions";
import { loadingToggler } from "../../store/actions/commonActions/commonActions";
import styles from "./Cart.module.css";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const common = createSelector(
  (state) => state.common,
  (common) => common
);

const Cart = (props) => {
  const dispatch = useDispatch();

  const availableIngredients = useSelector((state) => state.ingredients);
  const newOrderData = useSelector((state) => state.order.newOrderSuccess);
  const commonData = useSelector(common, shallowEqual);

  const [cartItems, setCartItems] = useState([]);
  const [reload, setReload] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedStore, setSelectedStore] = useState("");
  const [paymentClientSecret, setPaymentClientSecret] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [orderErrorMsg, setOrderErrorMsg] = useState("");
  const [paymentError, setPaymentError] = useState("");

  useEffect(() => {
    dispatch(ingredientsActions.loadAllIngredients());
  }, [dispatch]);

  useEffect(() => {
    setCartItems(loadCart());
  }, [reload]);

  useEffect(() => {
    let sum = 0;

    cartItems?.length > 0 && cartItems.map((item) => {
      for (let key in item) {
        sum = sum + item[key].itemPrice;
      }
      return null;
    });

    setTotalPrice(sum);
  }, [cartItems]);

  useEffect(() => {
    if (selectedStore !== "" && orderErrorMsg === "Select a store") {
      setOrderErrorMsg("");
    }
  }, [selectedStore,orderErrorMsg]);

  const clearCartHandler = () => {
    clearCart();
    setReload((prevState) => !prevState);
  };

  const removeItemHandler = (id) => {
    removeItemFromCart(id);
    setReload((prevState) => !prevState);
  };

  const paymentHandler = async (event) => {
    event.preventDefault();
    dispatch(loadingToggler(true));
    dispatch(setOrderSuccess());
    setPaymentError("");
    const user = await checkAuthStatus();
    if (user) {
      if (selectedStore === "") {
        setOrderErrorMsg("Select a store");
        dispatch(loadingToggler(false));
      } else {
        const token = await user.getIdToken();

        const body = {
          amount: JSON.stringify(totalPrice),
        };
        return axios
          .post(`${process.env.REACT_APP_PAYMENT_SECRET}`, body, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            const clientSecret = response.data.client_secret;
            setPaymentClientSecret(clientSecret);
            dispatch(loadingToggler(false));
            setModalShow(true);
          })
          .catch((error) => console.log(error));
      }
    } else {
      setOrderErrorMsg("Please sign in to order");
      dispatch(loadingToggler(false));
    }
  };

  const onPaymentSubmitHandler = () => {
    setPaymentError("");
  };

  const paymentErrorHandler = (info) => {
    dispatch(loadingToggler(false));
    setPaymentError(info.message);
  };

  const paymentSuccessHandler = async (info) => {
    const user = await checkAuthStatus();

    if (user) {
      const order = {
        items: JSON.stringify(cartItems),
        transactionId: info.id,
        createdAt: info.created,
        store: selectedStore,
        orderTotal: totalPrice,
      };
      dispatch(createOrder(order, user.uid));
    }
  };

  const newOrderCreated = () => {
    clearCart().then((data) => {
      if (data === "done") {
        setTimeout(async () => {
          setModalShow(false);
          props.history.replace("/orders");
        }, 1000);
      }
    });

    return <Alert variant="info">Order Placed Successfully</Alert>;
  };

  return cartItems?.length > 0 ? (
    <>
      <div className="container-xl">
        <div className="card mt-3 mb-5 overflow-auto bg-dark">
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
        className="container-fluid position-fixed bg-info"
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
              {commonData.loading === true ? (
                <div className="px-3 d-flex justify-content-center">
                  <Spinner animation="border" variant="light" />
                </div>
              ) : (
                <Button variant="success" onClick={paymentHandler}>
                  Proceed to Pay
                </Button>
              )}
              {orderErrorMsg !== "" && (
                <p className="text-danger">{orderErrorMsg}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <Modal
          show={modalShow}
          backdrop="static"
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Complete Payment
            </Modal.Title>
          </Modal.Header>
          <div className="bg-dark">
            <Modal.Body>
              <div>
                {paymentError !== "" && (
                  <Alert variant="danger">{paymentError}</Alert>
                )}

                {newOrderData === false && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm
                      clientSecret={paymentClientSecret}
                      onError={paymentErrorHandler}
                      onSuccess={paymentSuccessHandler}
                      onSubmit={onPaymentSubmitHandler}
                    />
                  </Elements>
                )}

                {commonData.loading === true && (
                  <div className="px-3 d-flex justify-content-center">
                    <Spinner animation="border" variant="light" />
                  </div>
                )}

                {modalShow === true &&
                  newOrderData === true &&
                  newOrderCreated()}
              </div>
            </Modal.Body>
          </div>
        </Modal>
      </div>
    </>
  ) : (
    <div className="container">
      <div className={styles.EmptyCartParent}>
        <div className={`row ${styles.EmptyCartChild}`}>
          <div className="col-sm-12 col-lg-6">
            <img
              alt="empty cart"
              src={require("../../assets/Logo/EmptyCart.png")}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-lg-12">
            <p className="lead">Your cart is empty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
