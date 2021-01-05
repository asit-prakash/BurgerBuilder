import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import localForage from "localforage";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import Routes from "./Routes";
import ingredientsReducers from "./store/reducers/ingredientsReducers/ingredientsReducers";
import cartReducers from "./store/reducers/cartReducers/cartReducers";
import authReducer from "./store/reducers/authReducer/authReducer";
import orderReducer from "./store/reducers/orderReducer/orderReducer";
import commonReducer from "./store/reducers/commonReducer/commonReducer";

const rootReducer = combineReducers({
  ingredients: ingredientsReducers,
  cart: cartReducers,
  auth: authReducer,
  order: orderReducer,
  common: commonReducer,
});

const persistConfig = {
  key: "root",
  storage: localForage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};
export default App;
