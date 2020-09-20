import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import Routes from "./Routes";
import ingredientsReducers from "./store/reducers/ingredientsReducers/ingredientsReducers";
import cartReducers from "./store/reducers/cartReducers/cartReducers";

const rootReducer = combineReducers({
  ingredients: ingredientsReducers,
  cart: cartReducers,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};
export default App;
