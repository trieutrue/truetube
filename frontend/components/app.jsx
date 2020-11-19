import React from "react";
import { Route, Switch } from 'react-router-dom';
import MainNavContainer from './main_nav/main_nav_container';
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import {
  AuthRoute,
  ProtectedRoute
} from '../util/route_utils';

const App = () => (
  <>
    <header>
      {/* <MainNavContainer /> */}
      {/* <SideNavContainer /> */}
    </header>
    <Switch>
      <AuthRoute path="/signin" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/" component={MainNavContainer} />
    </Switch>
  </>
);

export default App;