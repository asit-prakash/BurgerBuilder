import React from "react";
import Navbar from "../Navbar/Navbar";

const Base = (props) => {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
    </>
  );
};
export default Base;
