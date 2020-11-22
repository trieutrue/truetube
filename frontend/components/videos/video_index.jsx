import React from 'react';
import VideoIndexItem from './video_index_item';

export default class VideoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchVideos()
  }

  render() {
    const { videos, users, location, currentUser, openModal } = this.props;
    const indexItems = videos.map(video => {
      return <VideoIndexItem video={video} 
        openModal={openModal}
        className="video-container"
        currentUser={currentUser}
        user={users[video.uploaderId]} 
        location={location} />
    })

    const editIndex = (
      <>
        <ul className="edit-index">

        </ul>
      </>
    )


    return ( //for homepage
      <>
        <ul className="video-index">
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
        </ul>
      </>
    )
  }
}
