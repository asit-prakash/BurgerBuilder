import React, { useCallback, useState, useEffect } from "react";
import { Form, Button, Card, Col, Alert, Spinner } from "react-bootstrap";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { createSelector } from "reselect";
import { Link } from "react-router-dom";

import {
  userSignup,
  userSignin,
  setAuthError,
  clearAuthInfo,
} from "../../store/actions/authActions/authActions";

const auth = createSelector(
  (state) => state.auth,
  (auth) => auth
);

const common = createSelector(
  (state) => state.common,
  (common) => common
);

const Auth = ({ history }) => {
  const dispatch = useDispatch();

  const authData = useSelector(auth, shallowEqual);
  const commonData = useSelector(common, shallowEqual);

  const [authType, setAuthType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (authData.userId !== "") {
      history.replace("/");
    }
    if (authData.signInSuccess === true || authData.signUpSuccess === true) {
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
    }
  }, [authData]);

  useEffect(() => {
    const currentAuthType = history.location.pathname.substring(
      history?.location.pathname.lastIndexOf("/") + 1
    );
    setAuthType(currentAuthType);

    return () => {
      dispatch(clearAuthInfo());
    };
  }, [dispatch, history.location]);

  useEffect(() => {
    const beforeUnloadHandler = () => {
      dispatch(clearAuthInfo());
    };

    window.addEventListener("beforeunload", (event) => {
      event.preventDefault();
      return beforeUnloadHandler();
    });

    return () => {
      window.removeEventListener("beforeunload", beforeUnloadHandler);
    };
  }, [dispatch]);

  const performRedirect = useCallback(() => {
    if (authData.userId !== "") {
      history.replace("/");
    }
  }, [authData.userId]);

  const authDataSubmitHandler = (event) => {
    event.preventDefault();

    if (authType === "signin") {
      if (email === "" || password === "") {
        dispatch(setAuthError("Please enter all the mandatory fields"));
      } else {
        dispatch(userSignin(email, password));
      }
    } else if (authType === "signup") {
      if (email === "" || password === "" || firstName === "") {
        dispatch(setAuthError("Please enter all the mandatory fields"));
      } else {
        const data = {
          email,
          password,
          firstName,
          lastName,
        };
        dispatch(userSignup(data));
      }
    }
  };

  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          {authData.message !== "" && (
            <div>
              <Alert variant="info">{authData.message}</Alert>
            </div>
          )}
          <div className="rounded">
            <Card>
              <div className="bg-dark text-white text-center">
                <Card.Header>
                  <h3>
                    <span>
                      {authType === "signin" ? "Sign In " : "Sign Up "}
                    </span>
                    <span>to Burger Overflow</span>
                  </h3>
                </Card.Header>
              </div>

              <Card.Body>
                <Form>
                  {authType === "signup" && (
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>
                          <div className="d-flex">
                            <div>First Name</div>
                            <div className="text-danger">*</div>
                          </div>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter First Name"
                          value={firstName}
                          onChange={(event) => setFirstName(event.target.value)}
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Last Name"
                          value={lastName}
                          onChange={(event) => setLastName(event.target.value)}
                        />
                      </Form.Group>
                    </Form.Row>
                  )}
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>
                      <div className="d-flex">
                        <div>Email address</div>
                        <div className="text-danger">*</div>
                      </div>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                      <div className="d-flex">
                        <div>Password</div>
                        <div className="text-danger">*</div>
                      </div>
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </Form.Group>
                  {commonData.loading === true ? (
                    <div className="px-3">
                      <Spinner animation="border" variant="dark" />
                    </div>
                  ) : (
                    <Button
                      variant="info"
                      type="submit"
                      onClick={authDataSubmitHandler}
                    >
                      {authType === "signin" ? "Sign In" : "Sign Up"}
                    </Button>
                  )}
                  <div>
                    {authType === "signin" ? (
                      <div className="mt-2">
                        <p className="lead">
                          First time here ?
                          <span className="p-1">
                            <Link to="/auth/signup">Sign Up</Link>
                          </span>
                        </p>
                      </div>
                    ) : (
                      <div className="mt-2">
                        <p className="lead">
                          Already have an account?
                          <span className="p-1 text-info">
                            <Link to="/auth/signin">Sign In</Link>
                          </span>
                        </p>
                      </div>
                    )}
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {performRedirect()}
    </div>
  );
};

export default Auth;
