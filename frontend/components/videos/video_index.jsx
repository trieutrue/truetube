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
      case "/results" || "/channel":
        fetchSearchQuery(location.search)
        break;
      default:
        fetchVideos()
        break;
    }
  }

  render() {
    const { videos, users, location, currentUser, openModal, deleteVideo, match, filters } = this.props;
    let indexVideos;
    if (match.path === "/results") {
      indexVideos = filters.map(videoId => videos[videoId])
    } else {
      indexVideos = Object.values(videos)
    }

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
    
    const rowIndex = (
        <ul className="row-index">
          {indexItems}
        </ul>
    )

    const defaultIndex = (
      <ul className="video-index">
        {indexItems}
      </ul>
    )

    debugger
    switch (match.path) {
      case "/results" || "/channel":
        return rowIndex
      default:
        
        return defaultIndex;
    }
  }
}

export default withRouter(VideoIndex)