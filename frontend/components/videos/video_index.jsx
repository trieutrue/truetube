import React from 'react';
import { withRouter } from 'react-router-dom';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {
  constructor(props) {
    super(props);

    this.filterIndexItems = this.filterIndexItems.bind(this)
  }
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

  filterIndexItems() {
    const { videos, users, location, currentUser, openModal, deleteVideo, match, filters, video } = this.props;
    let indexVideos = [];
    if (!Object.keys(videos)) return indexVideos;
    
    switch (match.path) {
      case "/results":
        indexVideos = [...filters].reverse().map(videoId => videos[videoId])
        break;
      case "/watch/:videoId":
        const clone = { ...videos }
        delete clone[video.id]
        indexVideos = Object.values(clone).reverse()
        break;
      case "/channel/:userId/videos":
        indexVideos = currentUser.videoIds.map(videoId => videos[videoId])
        break;
      case "/playlist/liked":
        indexVideos = currentUser.upvotedVideoIds.map(videoId => videos[videoId])
        break;
      default:
        indexVideos = Object.values(videos).reverse()
        break;
    }

    if (!indexVideos.length) return null; // dispatch ui thing
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

    return indexItems;
  }

  render() {
    const { match } = this.props;
    switch (match.path) {
      case "/results":
        return (
          <ul key="results" id="row-index">
            {this.filterIndexItems()}
          </ul>
        )
      case "/channel/:userId/videos":
        return (
          <ul key="channel" id="row-index">
            {this.filterIndexItems()}
          </ul>
        )
      case "/playlist/liked":
        return (
          <ul key="playlist" id="row-index">
            {this.filterIndexItems()}
          </ul>
        )
      case "/watch/:videoId":
        return (
          <ul key="watch" id="list-index">
            {this.filterIndexItems()}
          </ul>
        )
      default:
        return (
          <ul key="home" id="video-index">
            {this.filterIndexItems()}
          </ul>
        );
    }
  }
}

export default withRouter(VideoIndex)