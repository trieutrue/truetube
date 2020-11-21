import React from 'react';
import {
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import VideoIndexContainer from '../videos/video_index_container';
export default class ChannelShow extends React.Component {

  render() {
    const { user } = this.props
    return (
      <>
        <NavLink to={`/channel/${user.id}/featured`}>HOME</NavLink>
        <NavLink to={`/channel/${user.id}/videos`}>VIDEOS</NavLink>
        <NavLink to={`/channel/${user.id}/playlists`}>PLAYLISTS</NavLink>
        <NavLink to={`/channel/${user.id}/discussion`}>DISCUSSION</NavLink>
        <NavLink to={`/channel/${user.id}/about`}>ABOUT</NavLink>
        
        <div id="channel-page">
          <Route path="/channel/:userId/featured" component={VideoIndexContainer} />
          <Route path="/channel/:userId/videos" component={VideoIndexContainer} />
          <Route path="/channel/:userId/about" component={UserShow} />
        </div>
      </>
    );
  }
}