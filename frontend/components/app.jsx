import React from "react";
import { Route, Switch } from 'react-router-dom';

import Modal from './modal/modal'
import MainNavContainer from './nav/main_nav/main_nav_container';
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import VideoIndexContainer from './videos/video_index_container';
import VideoShowContainer from './videos/video_show_container';
import SideNavContainer from './nav/side_nav/side_nav_container';
import ChannelShowContainer from './channels/channel_show_container';
import {
  AuthRoute,
  ProtectedRoute
} from '../util/route_utils';

const App = () => (
  <>
    <header>
      <Route path="/" component={Modal} />
      <Route path="/" component={MainNavContainer} />
      <Route path="/" component={SideNavContainer} />
    </header>


    <Switch>
      <AuthRoute exact path="/signin" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/channel/:userId" component={ChannelShowContainer} />
      <Route path="/videos/:videoId" component={VideoShowContainer} /> 
      <Route path="/" component={VideoIndexContainer} />
    </Switch>
    
    {/* <Route path="/" component={SideNavContainer} />
    <section>
      <Route path="/" component={VideoIndexContainer} />
    </section> */}
    
  </>
);

export default App;