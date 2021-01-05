import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Base from "./components/Base/Base";
import Auth from "./containers/Auth/Auth";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Cart from "./containers/Cart/Cart";
import Orders from "./containers/Orders/Orders";
import PrivateRoute from "./utils/PrivateRoute";

const Routes = () => {
  return (
    <Router>
      <Base>
        <Switch>
          <Route exact path="/" component={BurgerBuilder} />
          <Route exact path="/cart" component={Cart} />
          <Route path="/auth" component={Auth} />
          <PrivateRoute exact path="/orders" component={Orders} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Base>
    </Router>
  );
};

export default Routes;
