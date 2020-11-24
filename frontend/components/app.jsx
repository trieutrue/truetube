import React from "react";
import { Route, Switch } from 'react-router-dom';

import Modal from './modal/modal'
import MainNavContainer from './nav/main_nav/main_nav_container';
import App2 from './app2'
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import VideoShowContainer from './videos/video_show_container';
import {
  AuthRoute,
  ProtectedRoute
} from '../util/route_utils';

const App = () => (
  <>
    <header>
      <Route path="/" component={Modal} />
      <Route path="/" component={MainNavContainer} />
    </header>

  
    <Switch>
      <AuthRoute exact path="/signin" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/videos/:videoId" component={VideoShowContainer} />  
      <Route path="/" component={App2} />
    </Switch>
    
  </>
);

export default App;