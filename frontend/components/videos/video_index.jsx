import React from 'react';
import { withRouter } from 'react-router-dom';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {
  componentDidMount() {
    this.handleThunkActions()
  }
  
  componentDidUpdate(prevProps) {
    const { match, location } = this.props
    if (prevProps.match.path !== match.path || 
      prevProps.location.search !== location.search) {
        this.handleThunkActions()
      }
    }
    
  handleThunkActions() {
    const { fetchVideos, fetchSearchQuery, location, match } = this.props
      switch (match.path) {
      case "/results":
        fetchSearchQuery(location.search)
        break;
      default:
        fetchVideos()
        break;
    }
  }

  render() {
    const { videos, users, location, currentUser, openModal, deleteVideo, match, filters, video } = this.props;
    let indexVideos;
    if (!Object.keys(videos)) return null;
    if (match.path === "/results") {
      indexVideos = [...filters].reverse().map(videoId => videos[videoId])
    } else if (match.path === "/watch/:videoId") {
      let obj = { ...videos }
      delete obj[video.id]
      indexVideos = Object.values(obj).reverse()
    } else if (match.path === "/channel/:userId/videos") {
      indexVideos = currentUser.videoIds.map(videoId => videos[videoId])
    } else if (match.path === "/playlist/liked") {
      indexVideos = currentUser.upvotedVideoIds.map(videoId => videos[videoId])
    } else {
      indexVideos = Object.values(videos).reverse()
    }
    if (!indexVideos.length) return null;
    let indexItems = indexVideos.map(video => {
      return <VideoIndexItem video={video} 
        className="video-container"
        key={`video${video.id}`}
        deleteVideo={deleteVideo}
        openModal={openModal}
        currentUser={currentUser}
        user={users[video.uploaderId]} 
        location={location} 
        match={match}
        />
    })

    switch (match.path) {
      case "/results":
        return (
          <ul key="results" id="row-index">
            {indexItems}
          </ul>
        )
      case "/channel/:userId/videos":
        return (
          <ul key="channel" id="row-index">
            {indexItems}
          </ul>
        )
      case "/playlist/liked":
        return (
          <ul key="playlist" id="row-index">
            {indexItems}
          </ul>
        )
      case "/watch/:videoId":
        return (
          <ul key="watch" id="list-index">
            {indexItems}
          </ul>
        )
      default:
        return (
          <ul key="home" id="video-index">
            {indexItems}
          </ul>
        );
    }
  }
}

export default withRouter(VideoIndex)