import React from "react";
import styles from "./BurgerIngredient.module.css";
import propTypes from "prop-types";
import { useSelector } from "react-redux";

const BurgerIngredient = (props) => {
  const ingredients = useSelector((state) => state.ingredients);
  const availableIngredients = ingredients.ingredients;

  let ingredientType = props.type;
  if (availableIngredients[props.type]) {
    ingredientType = availableIngredients[props.type].type;
  }
  let ingredientClassName =
    ingredientType.charAt(0).toUpperCase() + ingredientType.slice(1);
  let ingredient = null;

  switch (ingredientType) {
    case "bread-bottom":
      ingredient = <div className={styles.BreadBottom}></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={styles.BreadTop}>
          <div className={styles.Seeds1}></div>
          <div className={styles.Seeds2}></div>
        </div>
      );
      break;
    case `${ingredientType}`:
      ingredient = <div className={styles[ingredientClassName]}></div>;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};

BurgerIngredient.propTypes = {
  type: propTypes.string.isRequired,
};
export default BurgerIngredient;
