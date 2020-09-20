import React from "react";
import BuildControl from "./BuildControl/BuildControl";

const BuildControls = (props) => {
  const ingredientData = {};
  const controls = [];
  for (let ing in props.ingredients) {
    ingredientData[ing] = props.ingredients[ing];
  }
  controls.push(ingredientData);

  return (
    <div className="card  rounded bg-dark text-white">
      <h4 className="card-header bg-dark text-white border-info">
        Build Your Burrger Here!!
      </h4>
      <div className="container">
        <div className="row">
          {Object.keys(controls[0]).map((ctrl) => {
            return (
              <div className="col-lg-6 col-md-12 col-sm-12 mt-4" key={ctrl}>
                <BuildControl
                  ingredients={controls[0][ctrl]}
                  adder={() => props.ingredientsAdder(ctrl)}
                  remover={() => props.ingredientsRemover(ctrl)}
                  disabled={props.disabled(ctrl)}
                />
              </div>
            );
          })}
        </div>
        <div className="row mt-3 mb-3 no-gutters">
          <div className="col-lg-4 col-md-5 col-sm-6 col-6">
            <p className="lead  mr-3">Total Price: ₹{props.price} </p>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-6 col-6">
            <button
              type="button"
              className="btn btn-info mb-2 d-flex "
              onClick={props.addtoCart}
              disabled={!props.purchasable}
            >
              {" "}
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BuildControls;
