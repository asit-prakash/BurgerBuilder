import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Base from "./components/Base/Base";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Cart from "./containers/Cart/Cart";

const Routes = () => {
  return (
    <Router>
      <Base>
        <Switch>
          <Route exact path="/" component={BurgerBuilder} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Base>
    </Router>
  );
};
export default Routes;
