import React from "react";
//webpack method
var images = require.context("../../../assets/ingredient-images", true);

const BuildControl = (props) => {
  let imgSrc = images(`./${props.ingredients.label}.jpeg`);
  return (
    <div className="media">
      <img
        src={imgSrc}
        className="mr-3 rounded"
        width="100px"
        height="80px"
        alt={props.label}
      />
      <div className="media-body">
        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-6 col-6">
            <h5 className="mt-0 mb-0">{props.ingredients.label}</h5>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-6">
            <h5 className="d-flex justify-content-end">
              <span className="badge badge-info">
                {" "}
                ₹ {props.ingredients.price}{" "}
              </span>
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <p className="mt-0 mb-0">{props.ingredients.description}</p>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="d-flex justify-content-end ">
              <button
                className="btn btn-sm btn-danger text-white mt-1 mr-2"
                onClick={props.remover}
                disabled={props.disabled}
              >
                Remove
              </button>
              <button
                className="btn btn-sm btn-success text-white mt-1"
                onClick={props.adder}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BuildControl;
