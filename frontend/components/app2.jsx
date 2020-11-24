import React from "react";
import { Route, Switch } from 'react-router-dom';
import VideoIndexContainer from './videos/video_index_container';
import SideNavContainer from './nav/side_nav/side_nav_container';
import ChannelShowContainer from './channels/channel_show_container';
import {
  AuthRoute,
  ProtectedRoute
} from '../util/route_utils';

const App2 = () => (
  <>
    <>
      <Route path="/" component={SideNavContainer} />
    </>


    <Switch>
      <Route path="/channel/:userId" component={ChannelShowContainer} />
      <Route path="/" component={VideoIndexContainer} />
    </Switch>

  </>
);

export default App2;

