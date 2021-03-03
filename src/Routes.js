import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Help from "./core/Help"
import Account from "./core/Account"

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/help" exact component={Help}/>
        <Route path="/account" exact component={Account}/>
      </Switch>
    </HashRouter>
  );
};

export default Routes;
