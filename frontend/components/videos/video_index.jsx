import React from 'react';
import VideoIndexItem from './video_index_item';

export default class VideoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchVideos()
  }

  render() {
    const { videos, users } = this.props;
    const indexItems = videos.map(video => {
      return <VideoIndexItem video={video} user={users[video.uploaderId]} />
    })
    return (
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
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
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
