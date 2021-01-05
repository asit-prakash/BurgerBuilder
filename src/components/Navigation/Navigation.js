import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { createSelector } from "reselect";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { auth } from "../../utils/firebaseService";
import Logo from "../Logo/Logo";
import {
  checkAuthStatus,
  userSignout,
} from "../../store/actions/authActions/authActions";
import { Nav, Navbar } from "react-bootstrap";

const userAauth = createSelector(
  (state) => state.auth,
  (auth) => auth
);

const Navigation = React.memo((props) => {
  const dispatch = useDispatch();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authData = useSelector(userAauth, shallowEqual);

  const signoutHandler = () => {
    auth()
      .signOut()
      .then(() => {
        dispatch(userSignout());
        props.history.replace("/");
      })
      .catch((error) => {
        // An error happened.
        console.log("An error occurred", error);
      });
  };

  useEffect(() => {
    const isLoggedIn = async () => {
      const user = await checkAuthStatus();
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };
    isLoggedIn();
  }, [authData]);

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>
          <Link className="navbar-brand text-white" to="/">
            <Logo /> Burger Overflow
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>

            <Link className="nav-link text-white" to="/cart">
              Cart
            </Link>

            {isAuthenticated === true && (
              <Link className="nav-link text-white" to="/orders">
                Orders
              </Link>
            )}
            {isAuthenticated === false && (
              <>
                <Link className="nav-link text-white" to="/auth/signin">
                  Sign In
                </Link>
                <Link className="nav-link text-white" to="/auth/signup">
                  Sign Up
                </Link>
              </>
            )}
            {isAuthenticated === true && (
              <div onClick={signoutHandler}>
                <Link className="nav-link text-white" to="/auth">
                  Sign Out
                </Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
});

export default withRouter(Navigation);
