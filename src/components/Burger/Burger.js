import React from "react";
import styles from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  // console.log(props.ingredients)

  //TODO: look how is this working
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey].qty)].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = (
      <p className="lead text-light text-center">
        Please start adding ingredients
      </p>
    );
  }
  return (
    <div className="card  overflow-auto bg-dark">
      {props.header && (
        <h4 className="card-header bg-dark text-white border-info text-center">
          {props.header}
        </h4>
      )}
      <div className={styles.Burger}>
        <BurgerIngredient type="bread-top" />
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />
      </div>
    </div>
  );
};
export default Burger;
