import React from "react";

const ItemDetails = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igkey) => {
    if (props.ingredients[igkey].qty > 0) {
      return (
        <li
          key={igkey}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {props.availableIngredients?.ingredients[igkey]?.label}{" "}
          <span className="badge badge-info badge-pill">
            {props.ingredients[igkey].qty}
          </span>
        </li>
      );
    }
    return null;
  });

  return (
    <>
      <ul className="list-group list-group-flush rounded">
        {ingredientSummary}
      </ul>
      <div className="d-flex justify-content-between flex-wrap mt-2 align-items-center">
        <p className="lead text-light">Total Price: ₹ {props.itemPrice}</p>
        <button
          type="button"
          className="btn btn-sm btn-danger"
          onClick={() => {
            props.removeItem(props.cartItemId);
          }}
        >
          Remove
        </button>
      </div>
    </>
  );
};

export default ItemDetails;
