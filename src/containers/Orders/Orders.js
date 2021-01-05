import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "../../components/Item/Item";
import { checkAuthStatus } from "../../store/actions/authActions/authActions";
import { fetchOrders } from "../../store/actions/orderActions/orderActions";
import * as ingredientsActions from "../../store/actions/ingredientsActions/ingredientsActions";
import { Accordion, Card, Badge } from "react-bootstrap";

import styles from "./Orders.module.css";

const Orders = () => {
  const dispatch = useDispatch();
  const orderData = useSelector((state) => state.order.orders);
  const availableIngredients = useSelector((state) => state.ingredients);

  useEffect(() => {
    dispatch(ingredientsActions.loadAllIngredients());
  }, [dispatch]);

  useEffect(() => {
    const user = async () => {
      const currentUser = await checkAuthStatus();
      if (currentUser) {
        dispatch(fetchOrders(currentUser.uid));
        dispatch(ingredientsActions.loadAllIngredients());
      }
    };
    user();
  }, [dispatch]);

  return (
    <div>
      {orderData !== null ? (
        <div className="container-xl">
          <div className="card mt-3 mb-3 overflow-auto bg-dark">
            <div className="card-header bg-dark text-white border-info d-flex justify-content-between flex-wrap">
              <h5 className="align-self-center">Your orders</h5>
            </div>
            <div className="container">
              <div className="row no-gutters">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 bg-dark">
                  <Accordion>
                    {Object.keys(orderData)
                      .slice(0)
                      .reverse()
                      .map((item, index) => {
                        return (
                          <div key={index} className="my-2">
                            <div className="rounded bg-light">
                              <Accordion.Toggle
                                as={Card.Header}
                                eventKey={index + 1}
                              >
                                <div className="d-flex justify-content-between flex-wrap">
                                  <div className="d-flex">
                                    <div className="mr-1">
                                      <Badge variant="info">Store</Badge>
                                    </div>
                                    {orderData[item].store}
                                  </div>
                                  <div className="d-flex">
                                    <div className="mr-1">
                                      <Badge variant="info">Ordered On</Badge>
                                    </div>
                                    {new Date(
                                      orderData[item].createdAt * 1000
                                    ).toDateString()}
                                  </div>
                                </div>
                              </Accordion.Toggle>
                            </div>
                            <Accordion.Collapse eventKey={index + 1}>
                              <div className="bg-dark my-3 border border-top-0 border-right-0 border-left-0 border-white">
                                <div className="lead ml-3">
                                  <Badge variant="secondary">Items</Badge>
                                </div>
                                {JSON.parse(orderData[item].items).map(
                                  (data, dataIndex) => {
                                    return (
                                      <div key={dataIndex}>
                                        <Item
                                          item={data}
                                          availableIngredients={
                                            availableIngredients
                                          }
                                        />
                                      </div>
                                    );
                                  }
                                )}
                                <div className="lead ml-3 text-light d-flex">
                                  <div className="mr-1">
                                    <Badge variant="secondary">
                                      Transaction Id
                                    </Badge>
                                  </div>
                                  {orderData[item].transactionId}
                                </div>
                                <div className="lead ml-3 text-light d-flex">
                                  <div className="mr-1">
                                    <Badge variant="secondary">
                                      Order Total
                                    </Badge>
                                  </div>
                                  ₹ {orderData[item].orderTotal}
                                </div>
                              </div>
                            </Accordion.Collapse>
                          </div>
                        );
                      })}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className={styles.EmptyOrderParent}>
            <div className={`row ${styles.EmptyOrderChild}`}>
              <div className="col-sm-12 col-lg-6">
                <img
                  alt="empty order"
                  src={require("../../assets/Logo/EmptyCart.png")}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="col-lg-12">
                <p className="lead">Start ordering now!!</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
