import React from "react";
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
      <MainNavContainer />
      {/* <SideNavContainer /> */}
    </header>
    <AuthRoute path="/signin" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </>
);

export default App;