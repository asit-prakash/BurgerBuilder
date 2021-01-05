import React from "react";
import Navigation from "../Navigation/Navigation";

const Base = (props) => {
  return (
    <>
      <Navigation />
      <main>{props.children}</main>
    </>
  );
};
export default Base;
