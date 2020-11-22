import React from 'react';
import {
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import VideoIndexContainer from '../videos/video_index_container';
export default class ChannelShow extends React.Component {
  componentDidUpdate(prevProps) {
    debugger
    if (prevProps.location.pathname !== this.props.location.pathname) return console.log("You did it")
  }

  render() {
    debugger
    const { user } = this.props
    return (
      <>
        <header className="channel-header">
          <NavLink to={`/channel/${user.id}/featured`}>HOME</NavLink>
          <NavLink to={`/channel/${user.id}/videos`}>VIDEOS</NavLink>
          <NavLink to={`/channel/${user.id}/playlists`}>PLAYLISTS</NavLink>
          <NavLink to={`/channel/${user.id}/discussion`}>DISCUSSION</NavLink>
          <NavLink to={`/channel/${user.id}/about`}>ABOUT</NavLink>
        </header>
        <div id="channel-page">
          <Route path="/channel/:userId/featured" component={VideoIndexContainer} />
          <Route path="/channel/:userId/videos" component={VideoIndexContainer} />
        </div>
      </>
    );
  }
}