import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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

  useEffect(() => {
    dispatch(ingredientsActions.loadAllIngredients());
  }, [dispatch]);

  const addIngredientHandler = (ingId) => {
    dispatch(ingredientsActions.addIngredient(ingId));
  };

  const removeIngredientHandler = (ingId) => {
    dispatch(ingredientsActions.removeIngredient(ingId));
  };

  const disabledIngredientInfo = (ingId) => {
    //alternative of currentBurger[ingId] && currentBurger[ingId].qty > 0
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
  };

  return (
    <>
      <div className="container-xl mt-3">
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
