import React from 'react';
import VideoIndexItem from './video_index_item';

export default class VideoIndex extends React.Component {
  componentDidMount() {
    debugger
    this.props.fetchVideos()
  }

  render() {
    const { videos, users, location, currentUser, openModal, deleteVideo } = this.props;
    const indexItems = videos.map(video => {
      return <VideoIndexItem video={video} 
        className="video-container"
        key={`video${video.id}`}
        deleteVideo={deleteVideo}
        openModal={openModal}
        currentUser={currentUser}
        user={users[video.uploaderId]} 
        location={location} />
    })

    const editIndex = (
        <ul className="edit-index">
          {indexItems}
        </ul>
    )

    const defaultIndex = (
      <ul className="video-index">
        {indexItems}
      </ul>
    )


    return ( //for homepage
      <>
        <ul className="video-index">
          {indexItems}
        </ul>
      </>
    )
  }
}
