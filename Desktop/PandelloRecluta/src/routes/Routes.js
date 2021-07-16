import React from "react";
import {BrowserRouter,Switch, Route} from "react-router-dom";
import Login from "../pages/Login";
import Join from "../pages/Join";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/" component={Login}/>
        <Route exact path="/Join" component={Join}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;