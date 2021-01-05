import {
  SIGNIN,
  SIGNUP,
  SIGNOUT,
  SET_AUTH_ERROR,
  CLEAR_AUTH_INFO,
} from "../../actions/authActions/authActions";

const initialState = {
  name: "",
  email: "",
  userId: "",
  message: "",
  signInSuccess: "",
  signUpSuccess: "",
};

const signInHandler = (state, action) => {
  if (action.data?.user) {
    return {
      ...state,
      name: action.data.user.displayName,
      email: action.data.user.email,
      userId: action.data.user.uid,
      message: "",
      signInSuccess: true,
    };
  } else if (action.data?.code === "auth/wrong-password") {
    return {
      ...state,
      message: "The password is incorrect",
    };
  } else if (action.data?.code === "auth/user-not-found") {
    return {
      ...state,
      message: "Please enter registered email address",
    };
  } else if (action.data?.code === "auth/invalid-email") {
    return {
      ...state,
      message: "Please enter a valid email address",
    };
  } else {
    return {
      ...state,
      message: "Unexpected error occurred",
    };
  }
};

const signUpHandler = (state, action) => {
  if (action.data?.data.code === "auth/invalid-password") {
    return {
      ...state,
      message: "Password must be at least 6 characters long",
    };
  } else if (action.data?.data.code === "auth/email-already-exists") {
    return {
      ...state,
      message: "The email address is already in use by another account",
    };
  } else if (action.data?.data.code === "auth/invalid-email") {
    return {
      ...state,
      message: "Please enter a valid email address",
    };
  } else if (action.data?.data?.uid) {
    return {
      ...state,
      message: "You are successfully registered, please sign in",
      signUpSuccess: true,
    };
  } else {
    return {
      ...state,
      message: "Unexpected error occurred",
    };
  }
};

const signOutHandler = (state, action) => {
  return {
    ...state,
    name: "",
    email: "",
    userId: "",
    message: "",
  };
};

const setAuthErrorHandler = (state, action) => {
  return {
    ...state,
    message: action.message,
  };
};

const clearAuthInfoHandler = (state, action) => {
  return {
    ...state,
    message: "",
    signInSuccess: "",
    signUpSuccess: "",
  };
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      return signInHandler(state, action);

    case SIGNUP:
      return signUpHandler(state, action);

    case SIGNOUT:
      return signOutHandler(state, action);

    case SET_AUTH_ERROR:
      return setAuthErrorHandler(state, action);

    case CLEAR_AUTH_INFO:
      return clearAuthInfoHandler(state, action);

    default:
      return state;
  }
};

export default authReducer;
