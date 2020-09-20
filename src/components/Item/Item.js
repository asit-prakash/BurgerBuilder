import React from "react";
import Burger from "../Burger/Burger";
import ItemDetails from "./ItemDetails/ItemDetails";

const Item = (props) => {
  let ingredients;
  let price;
  let cartItemId;
  for (const itemId in props.item) {
    cartItemId = itemId;
    ingredients = props.item[itemId].ingredients;
    price = props.item[itemId].itemPrice;
  }

  return (
    <>
      <div className="row my-3 no-gutters container ">
        <div className="col-lg-3 col-md-5 col-sm-6  border border-info rounded">
          <div>
            <Burger ingredients={ingredients} />
          </div>
        </div>
        <div className="col-lg-9 col-md-7 col-sm-6 px-md-2 px-sm-3">
          <div className="row justify-content-end">
            <div className="col-lg-7 col-md-10 col-sm-12">
              <ItemDetails
                ingredients={ingredients}
                itemPrice={price}
                availableIngredients={props.availableIngredients}
                cartItemId={cartItemId}
                removeItem={props.removeItem}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Item;
