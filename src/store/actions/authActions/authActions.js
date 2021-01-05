import axios from "axios";
import { auth } from "../../../utils/firebaseService.js";
import { loadingToggler } from "../commonActions/commonActions.js";

export const SIGNUP = "SIGNUP";

export const userSignup = (data) => {
  return async (dispatch) => {
    dispatch(loadingToggler(true));
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SIGNUP}`,
        data
      );
      dispatch(setSignupData(response));
    } catch (error) {
      dispatch(setSignupData(error));
    }
    dispatch(loadingToggler(false));
  };
};

const setSignupData = (data) => {
  return {
    type: SIGNUP,
    data,
  };
};

export const SIGNIN = "SIGNIN";

export const userSignin = (email, password) => {
  return async (dispatch) => {
    dispatch(loadingToggler(true));
    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
      dispatch(setSigninData(response));
    } catch (error) {
      dispatch(setSigninData(error));
    }
    dispatch(loadingToggler(false));
  };
};

const setSigninData = (data) => {
  return {
    type: SIGNIN,
    data,
  };
};

// export const test = () => {
//   return async (dispatch) => {
//     const currentUser = await checkAuthStatus();
//     const token = await currentUser.getIdToken();

//     try {
//       const response = await axios.get("http://localhost:8000/api/test", {
//         headers: { authorization: `Bearer ${token}` },
//       });
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export const checkAuthStatus = () => {
  return new Promise((resolve, reject) => {
    try {
      auth().onAuthStateChanged((user) => resolve(user));
    } catch (err) {
      reject(err);
    }
  });
};

export const SIGNOUT = "SIGNOUT";

export const userSignout = () => {
  return {
    type: SIGNOUT,
  };
};

export const SET_AUTH_ERROR = "SET_AUTH_ERROR";

export const setAuthError = (message) => {
  return {
    type: SET_AUTH_ERROR,
    message,
  };
};

export const CLEAR_AUTH_INFO = "CLEAR_AUTH_INFO";

export const clearAuthInfo = () => {
  return {
    type: CLEAR_AUTH_INFO,
  };
};
