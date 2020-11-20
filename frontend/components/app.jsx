import React from "react";
import { Route, Switch } from 'react-router-dom';
import MainNavContainer from './main_nav/main_nav_container';
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import VideoIndexContainer from './videos/video_index_container';
import SideNavContainer from './side_nav/side_nav_container'
import {
  AuthRoute,
  ProtectedRoute
} from '../util/route_utils';

const App = () => (
  <>
    {/* <header>
      {<MainNavContainer />}
      {<SideNavContainer />}
    </header> */}
    <Switch>
      <AuthRoute path="/signin" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/" component={MainNavContainer} />
    </Switch>
    
    <SideNavContainer />
    <section>
      <VideoIndexContainer />
    </section>
    
  </>
);

export default App;