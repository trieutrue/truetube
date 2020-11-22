import React from 'react';
import VideoIndexItem from './video_index_item';

export default class VideoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchVideos()
  }

  render() {
    const { videos, users, location } = this.props;
    const indexItems = videos.map(video => {
      return <VideoIndexItem video={video} user={users[video.uploaderId]} location={location} />
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
