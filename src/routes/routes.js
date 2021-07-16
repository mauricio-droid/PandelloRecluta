import React from "react";
import {BrowserRouter,Switch, Route} from "react-router-dom";
import Login from "../pages/Login";
import Reg from "../pages/SignUp";
import Open from "../pages/Joined";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/" component={Login}/>
        <Route exact path="/SignUp" component={SignUp}/>
        <Route exact path="/Joined" component={Joined}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;