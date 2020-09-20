import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-dark">
      <Link className="navbar-brand text-white" to="/">
        <Logo /> Burger Builder
      </Link>
      <button
        className="navbar-toggler bg-light"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
        <ul className="navbar-nav nav-pills ml-auto mt-2 mt-lg-0 mr-3">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/cart">
              Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/orders">
              Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/auth">
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/auth">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/auth">
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
