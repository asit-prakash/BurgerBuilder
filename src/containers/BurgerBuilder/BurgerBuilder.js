import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "react-bootstrap";

import * as ingredientsActions from "../../store/actions/ingredientsActions/ingredientsActions";
import BuildControls from "../../components/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import { addItemToCart } from "../helper/cartHelper";

const BurgerBuilder = () => {
  const dispatch = useDispatch();

  const ingredients = useSelector((state) => state.ingredients);
  const availableIngredients = ingredients.ingredients;
  const currentPrice = ingredients.totalPrice;
  const currentBurgerIsPurchasable = ingredients.isPurchasable;
  const currentBurger = ingredients.currentBurgerIng;

  const [showAddToCartAlert, setShowAddToCartAlert] = useState(false);
  const addToCartAlertTimer = useRef();

  useEffect(() => {
    dispatch(ingredientsActions.loadAllIngredients());

    return () => {
      clearTimeout(addToCartAlertTimer.current);
    };
  }, [dispatch]);

  const addIngredientHandler = (ingId) => {
    dispatch(ingredientsActions.addIngredient(ingId));
  };

  const removeIngredientHandler = (ingId) => {
    dispatch(ingredientsActions.removeIngredient(ingId));
  };

  const disabledIngredientInfo = (ingId) => {
    if (currentBurger[ingId]?.qty > 0) {
      return false;
    } else {
      return true;
    }
  };

  const addToCartHandler = () => {
    const item = {
      ingredients: currentBurger,
      itemPrice: currentPrice,
    };
    addItemToCart(item);
    dispatch(ingredientsActions.resetBurgerBuilder());
    setShowAddToCartAlert(true);
    addToCartAlertTimer.current = setTimeout(() => {
      setShowAddToCartAlert(false);
    }, 2000);
  };

  return (
    <>
      <div className="container-xl mt-3">
        {showAddToCartAlert === true && (
          <div>
            <Alert variant="success">Burger added to cart</Alert>
          </div>
        )}
        <div className="row">
          <div className="col-lg-4 col-md-5 col-sm-8 col-12">
            <Burger ingredients={currentBurger} header={`Burger in making!!`} />
          </div>
          <div className="col-lg-8 col-md-7 col-sm-8 col-12">
            <BuildControls
              ingredients={availableIngredients}
              price={currentPrice}
              purchasable={currentBurgerIsPurchasable}
              disabled={disabledIngredientInfo}
              ingredientsAdder={addIngredientHandler}
              ingredientsRemover={removeIngredientHandler}
              addtoCart={addToCartHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default BurgerBuilder;
